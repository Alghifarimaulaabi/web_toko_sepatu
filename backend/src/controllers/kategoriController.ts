import type { Request, Response } from 'express';
import { PrismaClient } from '../../generated/prisma/client.ts';

const prisma = new PrismaClient();

// GET all kategori
export const getAllKategori = async (req: Request, res: Response): Promise<void> => {
  try {
    const kategori = await prisma.kategori.findMany({
      orderBy: { id: 'asc' },
    });
    res.status(200).json(kategori);
  } catch (error) {
    console.error('Error fetching kategori:', error);
    res.status(500).json({ message: 'Gagal mengambil data kategori' });
  }
};

// POST create kategori
export const createKategori = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nama_kategori } = req.body;
    if (!nama_kategori) {
      res.status(400).json({ message: 'Nama kategori wajib diisi' });
      return;
    }

    const kategori = await prisma.kategori.create({
      data: { nama_kategori },
    });
    res.status(201).json(kategori);
  } catch (error) {
    console.error('Error creating kategori:', error);
    res.status(500).json({ message: 'Gagal membuat kategori' });
  }
};
