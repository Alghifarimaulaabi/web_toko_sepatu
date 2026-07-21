import type { Response } from 'express';
import { Prisma, PrismaClient } from "@prisma/client";
import type { AuthRequest } from '../middleware/auth.js';

const prisma = new PrismaClient();

export const getAllUsers = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (req.user?.role !== 'ADMIN') {
      res.status(403).json({ message: 'Akses ditolak. Hanya admin yang dapat mengakses.' });
      return;
    }

    const { limit = 10, page = 1, search } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    
    const whereClause: Prisma.UserWhereInput = {};
    if (search) {
      whereClause.OR = [
        { nama: { contains: String(search) } },
        { email: { contains: String(search) } }
      ];
    }

    const [users, totalCount] = await Promise.all([
      prisma.user.findMany({
        where: whereClause,
        select: {
          id: true,
          nama: true,
          email: true,
          role: true,
          foto: true,
          no_hp: true,
          alamat: true,
          kota: true,
          provinsi: true,
          kode_pos: true,
          createdAt: true
        },
        orderBy: { createdAt: 'desc' },
        skip: skip,
        take: Number(limit)
      }),
      prisma.user.count({ where: whereClause })
    ]);

    res.status(200).json({
      users,
      pagination: {
        total: totalCount,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(totalCount / Number(limit))
      }
    });
  } catch (error: any) {
    res.status(500).json({ message: 'Gagal mengambil data pengguna', error: error.message });
  }
};

export const deleteUser = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (req.user?.role !== 'ADMIN') {
      res.status(403).json({ message: 'Akses ditolak. Hanya admin yang dapat mengakses.' });
      return;
    }

    const id = parseInt(req.params.id as string);

    const orders = await prisma.pesanan.findMany({ where: { user_id: id } });
    const orderIds = orders.map(o => o.id);

    await prisma.$transaction([
      prisma.detailPesanan.deleteMany({ where: { pesanan_id: { in: orderIds } } }),
      prisma.pesanan.deleteMany({ where: { user_id: id } }),
      prisma.testimoni.deleteMany({ where: { user_id: id } }),
      prisma.user.delete({ where: { id } })
    ]);

    res.status(200).json({ message: 'Pengguna berhasil dihapus' });
  } catch (error: any) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Gagal menghapus pengguna', error: error.message });
  }
};
