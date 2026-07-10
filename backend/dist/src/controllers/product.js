import { PrismaClient } from '../../generated/prisma/client.js';
import fs from 'fs';
import path from 'path';
const prisma = new PrismaClient();
// GET all products
export const getProducts = async (req, res) => {
    try {
        const products = await prisma.produk.findMany({
            include: {
                varian: true,
            },
            orderBy: { created_at: 'desc' }
        });
        const testimonialStats = await prisma.testimoni.groupBy({
            by: ['produk_id'],
            _avg: { rating: true },
            _count: { _all: true }
        });
        const salesStats = await prisma.detailPesanan.groupBy({
            by: ['produk_id'],
            _sum: { jumlah: true }
        });
        const ratingMap = new Map();
        testimonialStats.forEach(stat => {
            ratingMap.set(stat.produk_id, {
                rating: Number(stat._avg.rating ?? 0),
                reviewCount: stat._count._all ?? 0
            });
        });
        const salesMap = new Map();
        salesStats.forEach(stat => {
            salesMap.set(stat.produk_id, Number(stat._sum.jumlah ?? 0));
        });
        // Map data so the frontend can easily read 'stok' without dealing with variant array
        const mappedProducts = products.map(p => {
            const ratingInfo = ratingMap.get(p.id);
            const terjual = salesMap.get(p.id) ?? 0;
            return {
                ...p,
                stok: p.varian[0]?.stok ?? 0,
                rating: ratingInfo ? Number(ratingInfo.rating.toFixed(1)) : 0,
                reviewCount: ratingInfo?.reviewCount ?? 0,
                terjual,
            };
        });
        res.status(200).json(mappedProducts);
    }
    catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Gagal mengambil data produk' });
    }
};
// GET a single product
export const getProductById = async (req, res) => {
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
            stok: product.varian[0]?.stok ?? 0
        });
    }
    catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Gagal mengambil data produk' });
    }
};
// POST create product
export const createProduct = async (req, res) => {
    try {
        const { nama_produk, deskripsi, harga, kategori, varian } = req.body;
        const files = req.files || [];
        const fotoFile = files.find(f => f.fieldname === 'foto');
        if (!fotoFile) {
            res.status(400).json({ message: 'Foto produk wajib diunggah' });
            return;
        }
        const gambar = fotoFile.path;
        const parsedHarga = parseFloat(harga);
        let varianData = [];
        if (varian) {
            try {
                varianData = JSON.parse(varian);
            }
            catch (e) {
                console.error('Error parsing varian:', e);
            }
        }
        if (varianData.length === 0) {
            varianData = [{ warna: 'Default', ukuran: 'Default', stok: parseInt(req.body.stok || '0') }];
        }
        const newProduct = await prisma.produk.create({
            data: {
                nama_produk,
                deskripsi,
                harga: parsedHarga,
                kategori: kategori,
                gambar,
                varian: {
                    create: varianData.map((v, index) => {
                        const varianFile = files.find(f => f.fieldname === `varian_foto_${index}`);
                        return {
                            warna: v.warna,
                            ukuran: v.ukuran,
                            stok: parseInt(v.stok),
                            gambar: varianFile ? `/uploads/${varianFile.filename}` : null
                        };
                    })
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
    }
    catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Gagal menambahkan produk' });
    }
};
// PUT update product
export const updateProduct = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nama_produk, deskripsi, harga, kategori, varian } = req.body;
        const existingProduct = await prisma.produk.findUnique({
            where: { id },
            include: { varian: true }
        });
        if (!existingProduct) {
            res.status(404).json({ message: 'Produk tidak ditemukan' });
            return;
        }
        let gambar = existingProduct.gambar;
        const files = req.files || [];
        const fotoFile = files.find(f => f.fieldname === 'foto');
        if (fotoFile) {
            gambar = fotoFile.path;
        }
        const parsedHarga = parseFloat(harga);
        // Update product basics
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
        let varianData = [];
        if (varian) {
            try {
                varianData = JSON.parse(varian);
            }
            catch (e) {
                console.error('Error parsing varian:', e);
            }
        }
        if (varianData.length > 0) {
            // For simplicity, delete existing variants and create new ones
            await prisma.produkVarian.deleteMany({
                where: { produk_id: id }
            });
            await prisma.produkVarian.createMany({
                data: varianData.map((v, index) => {
                    let varianGambar = v.gambar || null;
                    const varianFile = files.find(f => f.fieldname === `varian_foto_${index}`);
                    if (varianFile) {
                        varianGambar = `/uploads/${varianFile.filename}`;
                    }
                    return {
                        produk_id: id,
                        warna: v.warna,
                        ukuran: v.ukuran,
                        stok: parseInt(v.stok),
                        gambar: varianGambar
                    };
                })
            });
        }
        else if (req.body.stok) {
            // fallback for older requests that just send stok
            const firstVarian = existingProduct.varian[0];
            if (firstVarian) {
                await prisma.produkVarian.update({
                    where: {
                        id: firstVarian.id
                    },
                    data: {
                        stok: parseInt(req.body.stok)
                    }
                });
            }
            else {
                await prisma.produkVarian.create({
                    data: { produk_id: id, warna: 'Default', ukuran: 'Default', stok: parseInt(req.body.stok) }
                });
            }
        }
        res.status(200).json({
            message: 'Produk berhasil diupdate',
            product: updatedProduct
        });
    }
    catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Gagal mengupdate produk' });
    }
};
// DELETE product
export const deleteProduct = async (req, res) => {
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
    }
    catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Gagal menghapus produk' });
    }
};
//# sourceMappingURL=product.js.map