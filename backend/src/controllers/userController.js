import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getAllUsers = async (req, res) => {
    try {
        if (req.user?.role !== 'ADMIN') {
            res.status(403).json({ message: 'Akses ditolak. Hanya admin yang dapat mengakses.' });
            return;
        }
        const { limit = 10, page = 1, search } = req.query;
        const skip = (Number(page) - 1) * Number(limit);
        const whereClause = {};
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
    }
    catch (error) {
        console.error('Error fetching all users:', error);
        res.status(500).json({ message: 'Gagal mengambil data pengguna', error: error.message });
    }
};
//# sourceMappingURL=userController.js.map