import type { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { checkLoginAttempt, recordFailedLogin, resetLoginAttempts } from '../middleware/loginRateLimiter.js';

const prisma = new PrismaClient();

// Note: JWT_SECRET should be in .env in production
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_jwt_key_123';

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      res.status(400).json({ message: 'Semua field (nama, email, password) wajib diisi' });
      return;
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      res.status(400).json({ message: 'Email sudah terdaftar' });
      return;
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = await prisma.user.create({
      data: {
        nama: name,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      message: 'Registrasi berhasil',
      user: {
        id: newUser.id,
        nama: newUser.nama,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error('Error in register:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      res.status(400).json({ message: 'Email dan password wajib diisi' });
      return;
    }

    // Rate limit check
    const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.ip || 'unknown';
    const rateLimitCheck = checkLoginAttempt(clientIp, email);

    if (rateLimitCheck.blocked) {
      const minutes = Math.ceil(rateLimitCheck.retryAfter / 60);
      res.status(429).json({
        message: `Terlalu banyak percobaan login gagal. Silakan coba lagi dalam ${minutes} menit.`,
        retryAfter: rateLimitCheck.retryAfter,
        remainingAttempts: 0,
      });
      return;
    }

    // Check user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      const result = recordFailedLogin(clientIp, email);
      res.status(400).json({
        message: 'Email atau password salah',
        remainingAttempts: result.remainingAttempts,
        locked: result.locked,
        retryAfter: result.retryAfter,
      });
      return;
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      const result = recordFailedLogin(clientIp, email);
      res.status(400).json({
        message: result.locked
          ? 'Akun dikunci sementara karena terlalu banyak percobaan gagal. Silakan coba lagi dalam 15 menit.'
          : 'Email atau password salah',
        remainingAttempts: result.remainingAttempts,
        locked: result.locked,
        retryAfter: result.retryAfter,
      });
      return;
    }

    // Login berhasil — reset rate limiter
    resetLoginAttempts(clientIp, email);

    // Generate token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(200).json({
      message: 'Login berhasil',
      token,
      user: {
        id: user.id,
        nama: user.nama,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Error in login:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
};

