import { PrismaClient } from "@prisma/client";
import fs from 'fs';
import path from 'path';
const prisma = new PrismaClient();
export const getProfile = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ message: 'Pengguna tidak terautentikasi' });
            return;
        }
        const user = await prisma.user.findUnique({
            where: { id: userId },
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
            }
        });
        if (!user) {
            res.status(404).json({ message: 'Pengguna tidak ditemukan' });
            return;
        }
        res.status(200).json(user);
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ message: 'Gagal mengambil profil', error: error.message });
    }
};
export const updateProfile = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ message: 'Pengguna tidak terautentikasi' });
            return;
        }
        const { nama, no_hp, alamat, kota, provinsi, kode_pos } = req.body;
        let fotoUrl;
        // Check if a file is uploaded
        if (req.file) {
            fotoUrl = `/uploads/${req.file.filename}`;
            // Optional: Delete old photo if it exists
            const oldUser = await prisma.user.findUnique({ where: { id: userId }, select: { foto: true } });
            if (oldUser?.foto && oldUser.foto.startsWith('/uploads/')) {
                const oldFilePath = path.join(process.cwd(), 'public', oldUser.foto);
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath);
                }
            }
        }
        const updatedData = {};
        if (nama)
            updatedData.nama = nama;
        if (no_hp)
            updatedData.no_hp = no_hp;
        if (alamat !== undefined)
            updatedData.alamat = alamat;
        if (kota !== undefined)
            updatedData.kota = kota;
        if (provinsi !== undefined)
            updatedData.provinsi = provinsi;
        if (kode_pos !== undefined)
            updatedData.kode_pos = kode_pos;
        if (fotoUrl)
            updatedData.foto = fotoUrl;
        const user = await prisma.user.update({
            where: { id: userId },
            data: updatedData,
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
            }
        });
        res.status(200).json({ message: 'Profil berhasil diperbarui', user });
    }
    catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({ message: 'Gagal memperbarui profil', error: error.message });
    }
};
//# sourceMappingURL=profileController.js.map