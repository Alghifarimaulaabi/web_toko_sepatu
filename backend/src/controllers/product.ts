import type { Request, Response } from 'express';
import { PrismaClient } from '../../generated/prisma/client.js';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

// GET all products
export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await prisma.produk.findMany({
      include: {
        varian: true,
      },
      orderBy: { created_at: 'desc' }
    });
    
    // Map data so the frontend can easily read 'stok' without dealing with variant array
    const mappedProducts = products.map(p => ({
      ...p,
      stok: p.varian.length > 0 ? p.varian[0].stok : 0,
    }));

    res.status(200).json(mappedProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Gagal mengambil data produk' });
  }
};

// GET a single product
export const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const product = await prisma.produk.findUnique({
      where: { id },
      include: {
        varian: true,
      }
    });

    if (!product) {
      res.status(404).json({ message: 'Produk tidak ditemukan' });
      return;
    }

    res.status(200).json({
      ...product,
      stok: product.varian.length > 0 ? product.varian[0].stok : 0,
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Gagal mengambil data produk' });
  }
};

// POST create product
export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nama_produk, deskripsi, harga, kategori, stok } = req.body;
    
    if (!req.file) {
      res.status(400).json({ message: 'Foto produk wajib diunggah' });
      return;
    }

    const gambar = `/uploads/${req.file.filename}`;
    const parsedHarga = parseFloat(harga);
    const parsedStok = parseInt(stok || '0');

    const newProduct = await prisma.produk.create({
      data: {
        nama_produk,
        deskripsi,
        harga: parsedHarga,
        kategori: kategori,
        gambar,
        varian: {
          create: {
            warna: 'Default',
            ukuran: 'Default',
            stok: parsedStok,
          }
        }
      },
      include: {
        varian: true,
      }
    });

    res.status(201).json({
      message: 'Produk berhasil ditambahkan',
      product: newProduct
    });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Gagal menambahkan produk' });
  }
};

// PUT update product
export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const { nama_produk, deskripsi, harga, kategori, stok } = req.body;

    const existingProduct = await prisma.produk.findUnique({
      where: { id },
      include: { varian: true }
    });

    if (!existingProduct) {
      res.status(404).json({ message: 'Produk tidak ditemukan' });
      return;
    }

    let gambar = existingProduct.gambar;
    if (req.file) {
      // User uploaded a new image, delete the old one
      const oldPath = path.join(process.cwd(), 'public', existingProduct.gambar);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
      gambar = `/uploads/${req.file.filename}`;
    }

    const parsedHarga = parseFloat(harga);
    const parsedStok = parseInt(stok || '0');

    // Update product
    const updatedProduct = await prisma.produk.update({
      where: { id },
      data: {
        nama_produk,
        deskripsi,
        harga: parsedHarga,
        kategori: kategori,
        gambar,
      }
    });

    // Update stock in the default variant
    if (existingProduct.varian.length > 0) {
      await prisma.produkVarian.update({
        where: { id: existingProduct.varian[0].id },
        data: { stok: parsedStok }
      });
    } else {
      // If it doesn't have a variant, create one
      await prisma.produkVarian.create({
        data: {
          produk_id: id,
          warna: 'Default',
          ukuran: 'Default',
          stok: parsedStok,
        }
      });
    }

    res.status(200).json({
      message: 'Produk berhasil diupdate',
      product: updatedProduct
    });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Gagal mengupdate produk' });
  }
};

// DELETE product
export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    
    const product = await prisma.produk.findUnique({
      where: { id }
    });

    if (!product) {
      res.status(404).json({ message: 'Produk tidak ditemukan' });
      return;
    }

    // Delete image file
    const imagePath = path.join(process.cwd(), 'public', product.gambar);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    // Since in schema ProdukVarian has onDelete: Cascade, deleting Produk will delete its variants
    await prisma.produk.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Produk berhasil dihapus' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Gagal menghapus produk' });
  }
};
