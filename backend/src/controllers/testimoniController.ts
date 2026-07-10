import type { Response } from 'express';
import { PrismaClient } from '../../generated/prisma/client.js';
import type { AuthRequest } from '../middleware/auth.js';

const prisma = new PrismaClient();

// User: Create review for a product from a delivered order
export const createTestimoni = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ message: 'Pengguna tidak terautentikasi' });
      return;
    }

    const { pesanan_id, produk_id, rating, komentar } = req.body;
    
    const pesananIdNum = Number(pesanan_id);
    const produkIdNum = Number(produk_id);
    const ratingNum = Number(rating);

    if (!pesanan_id || !produk_id || !rating || !komentar) {
      res.status(400).json({ message: 'Semua field wajib diisi (pesanan_id, produk_id, rating, komentar)' });
      return;
    }

    if (ratingNum < 1 || ratingNum > 5) {
      res.status(400).json({ message: 'Rating harus antara 1-5' });
      return;
    }

    // Check pesanan belongs to user and is DELIVERED
    const pesanan = await prisma.pesanan.findFirst({
      where: {
        id: pesananIdNum,
        user_id: userId,
        status: 'DELIVERED'
      },
      include: {
        detailPesanan: true,
        user: { select: { nama: true } }
      }
    });

    if (!pesanan) {
      res.status(404).json({ message: 'Pesanan tidak ditemukan atau belum berstatus Diterima' });
      return;
    }

    // Check produk is part of the order
    const produkInOrder = pesanan.detailPesanan.find(d => d.produk_id === produkIdNum);
    if (!produkInOrder) {
      res.status(400).json({ message: 'Produk tidak ada dalam pesanan ini' });
      return;
    }

    // Check if already reviewed
    const existing = await prisma.testimoni.findUnique({
      where: {
        user_id_produk_id_pesanan_id: {
          user_id: userId,
          produk_id: produkIdNum,
          pesanan_id: pesananIdNum
        }
      }
    });

    if (existing) {
      res.status(409).json({ message: 'Anda sudah memberikan ulasan untuk produk ini pada pesanan ini' });
      return;
    }

    let gambarPath = null;
    if (req.file) {
      gambarPath = req.file.path;
    }

    const testimoni = await prisma.testimoni.create({
      data: {
        pesanan_id: pesananIdNum,
        user_id: userId,
        produk_id: produkIdNum,
        nama: pesanan.user.nama,
        rating: ratingNum,
        komentar,
        gambar: gambarPath
      }
    });

    // Create notification for admin
    await prisma.notifikasi.create({
      data: {
        judul: 'Ulasan Baru',
        pesan: `${pesanan.user.nama} telah memberikan ulasan bintang ${rating}.`,
        type: 'REVIEW',
        reference_id: testimoni.id
      }
    });

    res.status(201).json({ message: 'Ulasan berhasil ditambahkan', testimoni });
  } catch (error: any) {
    console.error('Error creating testimoni:', error);
    res.status(500).json({ message: 'Gagal menambahkan ulasan', error: error.message });
  }
};

// Public: Get reviews for a specific product
export const getTestimoniByProduk = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { produkId } = req.params;
    const { page = 1, limit = 10 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const [testimonis, totalCount, avgResult] = await Promise.all([
      prisma.testimoni.findMany({
        where: { produk_id: Number(produkId) },
        include: {
          user: { select: { nama: true, foto: true } }
        },
        orderBy: { created_at: 'desc' },
        skip,
        take: Number(limit)
      }),
      prisma.testimoni.count({ where: { produk_id: Number(produkId) } }),
      prisma.testimoni.aggregate({
        where: { produk_id: Number(produkId) },
        _avg: { rating: true },
        _count: { rating: true }
      })
    ]);

    res.status(200).json({
      testimonis,
      averageRating: avgResult._avg.rating || 0,
      totalReviews: avgResult._count.rating || 0,
      pagination: {
        total: totalCount,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(totalCount / Number(limit))
      }
    });
  } catch (error: any) {
    console.error('Error fetching testimoni by produk:', error);
    res.status(500).json({ message: 'Gagal mengambil ulasan', error: error.message });
  }
};

// User: Check if user already reviewed a product in a specific order
export const checkUserReview = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ message: 'Pengguna tidak terautentikasi' });
      return;
    }

    const { pesananId, produkId } = req.params;

    const existing = await prisma.testimoni.findUnique({
      where: {
        user_id_produk_id_pesanan_id: {
          user_id: userId,
          produk_id: Number(produkId),
          pesanan_id: Number(pesananId)
        }
      }
    });

    res.status(200).json({ reviewed: !!existing });
  } catch (error: any) {
    console.error('Error checking user review:', error);
    res.status(500).json({ message: 'Gagal mengecek ulasan', error: error.message });
  }
};

// Admin: Get all products that have reviews with summary
export const getAllTestimoniAdmin = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (req.user?.role !== 'ADMIN') {
      res.status(403).json({ message: 'Akses ditolak' });
      return;
    }

    const { page = 1, limit = 10, search } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    // Find products that have at least one review
    const whereClause: any = {
      testimoni: { some: {} }
    };
    if (search) {
      whereClause.nama_produk = { contains: String(search) };
    }

    const [products, totalCount] = await Promise.all([
      prisma.produk.findMany({
        where: whereClause,
        include: {
          testimoni: {
            select: { rating: true }
          }
        },
        orderBy: { created_at: 'desc' },
        skip,
        take: Number(limit)
      }),
      prisma.produk.count({ where: whereClause })
    ]);

    const formatted = products.map(p => ({
      id: p.id,
      nama_produk: p.nama_produk,
      gambar: p.gambar,
      totalReviews: p.testimoni.length,
      averageRating: p.testimoni.length > 0
        ? Number((p.testimoni.reduce((sum, t) => sum + t.rating, 0) / p.testimoni.length).toFixed(1))
        : 0
    }));

    res.status(200).json({
      products: formatted,
      pagination: {
        total: totalCount,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(totalCount / Number(limit))
      }
    });
  } catch (error: any) {
    console.error('Error fetching admin testimoni:', error);
    res.status(500).json({ message: 'Gagal mengambil data testimoni', error: error.message });
  }
};

// Admin: Get reviews for a specific product
export const getTestimoniByProdukAdmin = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (req.user?.role !== 'ADMIN') {
      res.status(403).json({ message: 'Akses ditolak' });
      return;
    }

    const { produkId } = req.params;

    const testimonis = await prisma.testimoni.findMany({
      where: { produk_id: Number(produkId) },
      include: {
        user: { select: { nama: true, email: true, foto: true } },
        pesanan: { select: { kode_pesanan: true } }
      },
      orderBy: { created_at: 'desc' }
    });

    res.status(200).json({ testimonis });
  } catch (error: any) {
    console.error('Error fetching admin testimoni by produk:', error);
    res.status(500).json({ message: 'Gagal mengambil ulasan produk', error: error.message });
  }
};

// Admin: Delete a review
export const deleteTestimoni = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (req.user?.role !== 'ADMIN') {
      res.status(403).json({ message: 'Akses ditolak' });
      return;
    }

    const { id } = req.params;

    await prisma.testimoni.delete({
      where: { id: Number(id) }
    });

    res.status(200).json({ message: 'Ulasan berhasil dihapus' });
  } catch (error: any) {
    console.error('Error deleting testimoni:', error);
    res.status(500).json({ message: 'Gagal menghapus ulasan', error: error.message });
  }
};

// Admin: Reply to a review
export const replyTestimoni = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (req.user?.role !== 'ADMIN') {
      res.status(403).json({ message: 'Akses ditolak' });
      return;
    }

    const { id } = req.params;
    const { balasan } = req.body;

    if (!balasan) {
      res.status(400).json({ message: 'Balasan wajib diisi' });
      return;
    }

    const testimoni = await prisma.testimoni.update({
      where: { id: Number(id) },
      data: { balasan }
    });

    res.status(200).json({ message: 'Balasan berhasil dikirim', testimoni });
  } catch (error: any) {
    console.error('Error replying to testimoni:', error);
    res.status(500).json({ message: 'Gagal membalas ulasan', error: error.message });
  }
};
