import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// GET all produk
export const getAllProduk = async (req, res) => {
    try {
        const produk = await prisma.produk.findMany({
            orderBy: { id: 'desc' },
        });
        res.status(200).json(produk);
    }
    catch (error) {
        console.error('Error fetching produk:', error);
        res.status(500).json({ message: 'Gagal mengambil data produk' });
    }
};
// GET produk by ID
export const getProdukById = async (req, res) => {
    try {
        const { id } = req.params;
        const produk = await prisma.produk.findUnique({
            where: { id: Number(id) },
        });
        if (!produk) {
            res.status(404).json({ message: 'Produk tidak ditemukan' });
            return;
        }
        res.status(200).json(produk);
    }
    catch (error) {
        console.error('Error fetching produk:', error);
        res.status(500).json({ message: 'Gagal mengambil data produk' });
    }
};
// POST create produk
export const createProduk = async (req, res) => {
    try {
        const { nama_produk, deskripsi, harga, kategori_id, kategori } = req.body;
        const gambar = req.file ? req.file.path : '';
        const categoryVal = kategori || kategori_id;
        if (!nama_produk || !harga || !categoryVal) {
            res.status(400).json({ message: 'Nama produk, harga, dan kategori wajib diisi' });
            return;
        }
        const produk = await prisma.produk.create({
            data: {
                nama_produk,
                deskripsi: deskripsi || '',
                harga: Number(harga),
                kategori: categoryVal,
                gambar,
            },
        });
        res.status(201).json({ message: 'Produk berhasil ditambahkan', produk });
    }
    catch (error) {
        console.error('Error creating produk:', error);
        res.status(500).json({ message: 'Gagal menambahkan produk' });
    }
};
// PUT update produk
export const updateProduk = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama_produk, deskripsi, harga, kategori_id, kategori } = req.body;
        const categoryVal = kategori || kategori_id;
        const updateData = {};
        if (nama_produk)
            updateData.nama_produk = nama_produk;
        if (deskripsi !== undefined)
            updateData.deskripsi = deskripsi;
        if (harga)
            updateData.harga = Number(harga);
        if (categoryVal)
            updateData.kategori = categoryVal;
        if (req.file)
            updateData.gambar = req.file.path;
        const produk = await prisma.produk.update({
            where: { id: Number(id) },
            data: updateData,
        });
        res.status(200).json({ message: 'Produk berhasil diperbarui', produk });
    }
    catch (error) {
        console.error('Error updating produk:', error);
        res.status(500).json({ message: 'Gagal memperbarui produk' });
    }
};
// DELETE produk
export const deleteProduk = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.produk.delete({
            where: { id: Number(id) },
        });
        res.status(200).json({ message: 'Produk berhasil dihapus' });
    }
    catch (error) {
        console.error('Error deleting produk:', error);
        res.status(500).json({ message: 'Gagal menghapus produk' });
    }
};
//# sourceMappingURL=produkController.js.map