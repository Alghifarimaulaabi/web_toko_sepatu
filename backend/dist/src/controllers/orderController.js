import { PrismaClient } from "@prisma/client";
// @ts-ignore
import midtransClient from 'midtrans-client';
const prisma = new PrismaClient();
const snap = new midtransClient.Snap({
    isProduction: process.env.NODE_ENV === 'production',
    serverKey: process.env.MIDTRANS_SERVER_KEY || '',
    clientKey: process.env.MIDTRANS_CLIENT_KEY || process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY || ''
});
// Get all orders (Admin only)
export const getAllOrders = async (req, res) => {
    try {
        if (req.user?.role !== 'ADMIN') {
            res.status(403).json({ message: 'Akses ditolak. Hanya admin yang dapat mengakses.' });
            return;
        }
        const { status, limit = 10, page = 1, search, userId } = req.query;
        const skip = (Number(page) - 1) * Number(limit);
        const whereClause = {};
        if (status && status !== 'all') {
            whereClause.status = String(status);
        }
        if (userId) {
            whereClause.user_id = Number(userId);
        }
        if (search) {
            whereClause.kode_pesanan = { contains: String(search) };
        }
        const [orders, totalCount] = await Promise.all([
            prisma.pesanan.findMany({
                where: whereClause,
                include: {
                    user: {
                        select: { nama: true, email: true }
                    },
                    detailPesanan: {
                        include: { produk: true }
                    }
                },
                orderBy: { tanggal_pesanan: 'desc' },
                skip: skip,
                take: Number(limit)
            }),
            prisma.pesanan.count({ where: whereClause })
        ]);
        const formattedOrders = orders.map(order => ({
            id: order.id,
            kode_pesanan: order.kode_pesanan,
            tanggal_pesanan: order.tanggal_pesanan,
            total_harga: order.total_harga,
            status: order.status,
            metode_pembayaran: order.metode_pembayaran,
            alamat: {
                nama_penerima: order.nama_penerima,
                no_hp: order.no_hp,
                alamat: order.alamat,
                kota: order.kota,
                provinsi: order.provinsi,
                kode_pos: order.kode_pos,
                catatan: order.catatan
            },
            user: order.user,
            items: order.detailPesanan.map(detail => ({
                id: detail.produk_id,
                nama_produk: detail.produk.nama_produk,
                gambar: detail.produk.gambar,
                harga: detail.harga,
                jumlah: detail.jumlah,
                subtotal: detail.subtotal
            }))
        }));
        res.status(200).json({
            orders: formattedOrders,
            pagination: {
                total: totalCount,
                page: Number(page),
                limit: Number(limit),
                totalPages: Math.ceil(totalCount / Number(limit))
            }
        });
    }
    catch (error) {
        console.error('Error fetching all orders:', error);
        res.status(500).json({ message: 'Gagal mengambil data pesanan', error: error.message });
    }
};
// Get all orders for authenticated user
export const getUserOrders = async (req, res) => {
    try {
        const userId = req.user?.id;
        const { status, limit = 10, page = 1 } = req.query;
        if (!userId) {
            res.status(401).json({ message: 'Pengguna tidak terautentikasi' });
            return;
        }
        const skip = (Number(page) - 1) * Number(limit);
        // Build where clause
        const whereClause = { user_id: userId };
        if (status && status !== 'all') {
            whereClause.status = String(status);
        }
        // Get orders with their details
        const [orders, totalCount] = await Promise.all([
            prisma.pesanan.findMany({
                where: whereClause,
                include: {
                    detailPesanan: {
                        include: {
                            produk: true
                        }
                    }
                },
                orderBy: {
                    tanggal_pesanan: 'desc'
                },
                skip: skip,
                take: Number(limit)
            }),
            prisma.pesanan.count({
                where: whereClause
            })
        ]);
        // Format response
        const formattedOrders = orders.map(order => ({
            id: order.id,
            kode_pesanan: order.kode_pesanan,
            tanggal_pesanan: order.tanggal_pesanan,
            total_harga: order.total_harga,
            status: order.status,
            metode_pembayaran: order.metode_pembayaran,
            alamat: {
                nama_penerima: order.nama_penerima,
                no_hp: order.no_hp,
                alamat: order.alamat,
                kota: order.kota,
                provinsi: order.provinsi,
                kode_pos: order.kode_pos,
                catatan: order.catatan
            },
            items: order.detailPesanan.map(detail => ({
                id: detail.produk_id,
                nama_produk: detail.produk.nama_produk,
                gambar: detail.produk.gambar,
                harga: detail.harga,
                jumlah: detail.jumlah,
                subtotal: detail.subtotal
            }))
        }));
        // Sync PENDING orders with Midtrans (useful if webhook didn't hit)
        const pendingMidtransOrders = formattedOrders.filter(o => o.status === 'PENDING' && o.metode_pembayaran === 'midtrans');
        for (const order of pendingMidtransOrders) {
            try {
                const midtransStatus = await snap.transaction.status(order.kode_pesanan);
                const transactionStatus = midtransStatus.transaction_status;
                const fraudStatus = midtransStatus.fraud_status;
                let newStatus = order.status;
                if (transactionStatus === 'capture') {
                    if (fraudStatus === 'accept') {
                        newStatus = 'PROCESSING';
                    }
                }
                else if (transactionStatus === 'settlement') {
                    newStatus = 'PROCESSING';
                }
                else if (transactionStatus === 'cancel' || transactionStatus === 'deny' || transactionStatus === 'expire') {
                    newStatus = 'CANCELLED';
                }
                if (newStatus !== order.status) {
                    await prisma.pesanan.update({
                        where: { id: order.id },
                        data: { status: newStatus }
                    });
                    order.status = newStatus; // update the local object so response is correct
                }
            }
            catch (err) {
                if (!err.message?.includes('404')) {
                    console.error(`Failed to sync midtrans status for order ${order.kode_pesanan}:`, err.message);
                }
            }
        }
        res.status(200).json({
            orders: formattedOrders,
            pagination: {
                total: totalCount,
                page: Number(page),
                limit: Number(limit),
                totalPages: Math.ceil(totalCount / Number(limit))
            }
        });
    }
    catch (error) {
        console.error('Error fetching user orders:', error);
        res.status(500).json({
            message: 'Gagal mengambil riwayat pesanan',
            error: error.message || String(error)
        });
    }
};
// Get single order detail
export const getOrderDetail = async (req, res) => {
    try {
        const userId = req.user?.id;
        const { orderId } = req.params;
        if (!userId) {
            res.status(401).json({ message: 'Pengguna tidak terautentikasi' });
            return;
        }
        const order = await prisma.pesanan.findFirst({
            where: {
                id: Number(orderId),
                user_id: userId
            },
            include: {
                detailPesanan: {
                    include: {
                        produk: true
                    }
                }
            }
        });
        if (!order) {
            res.status(404).json({ message: 'Pesanan tidak ditemukan' });
            return;
        }
        // Format response sama seperti di atas
        const formattedOrder = {
            id: order.id,
            kode_pesanan: order.kode_pesanan,
            tanggal_pesanan: order.tanggal_pesanan,
            total_harga: order.total_harga,
            status: order.status,
            metode_pembayaran: order.metode_pembayaran,
            alamat: {
                nama_penerima: order.nama_penerima,
                no_hp: order.no_hp,
                alamat: order.alamat,
                kota: order.kota,
                provinsi: order.provinsi,
                kode_pos: order.kode_pos,
                catatan: order.catatan
            },
            items: order.detailPesanan.map(detail => ({
                id: detail.produk_id,
                nama_produk: detail.produk.nama_produk,
                gambar: detail.produk.gambar,
                harga: detail.harga,
                jumlah: detail.jumlah,
                subtotal: detail.subtotal
            }))
        };
        if (formattedOrder.status === 'PENDING' && formattedOrder.metode_pembayaran === 'midtrans') {
            try {
                const midtransStatus = await snap.transaction.status(formattedOrder.kode_pesanan);
                const transactionStatus = midtransStatus.transaction_status;
                const fraudStatus = midtransStatus.fraud_status;
                let newStatus = formattedOrder.status;
                if (transactionStatus === 'capture') {
                    if (fraudStatus === 'accept') {
                        newStatus = 'PROCESSING';
                    }
                }
                else if (transactionStatus === 'settlement') {
                    newStatus = 'PROCESSING';
                }
                else if (transactionStatus === 'cancel' || transactionStatus === 'deny' || transactionStatus === 'expire') {
                    newStatus = 'CANCELLED';
                }
                if (newStatus !== formattedOrder.status) {
                    await prisma.pesanan.update({
                        where: { id: formattedOrder.id },
                        data: { status: newStatus }
                    });
                    formattedOrder.status = newStatus;
                }
            }
            catch (err) {
                if (!err.message?.includes('404')) {
                    console.error(`Failed to sync midtrans status for order ${formattedOrder.kode_pesanan}:`, err.message);
                }
            }
        }
        res.status(200).json(formattedOrder);
    }
    catch (error) {
        console.error('Error fetching order detail:', error);
        res.status(500).json({
            message: 'Gagal mengambil detail pesanan',
            error: error.message || String(error)
        });
    }
};
// Update order status (optional - for admin)
export const updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;
        // Check if user is admin
        if (req.user?.role !== 'ADMIN') {
            res.status(403).json({ message: 'Akses ditolak. Hanya admin yang dapat mengubah status.' });
            return;
        }
        const validStatuses = ['PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED'];
        if (!validStatuses.includes(status)) {
            res.status(400).json({
                message: 'Status tidak valid',
                validStatuses
            });
            return;
        }
        const order = await prisma.pesanan.update({
            where: { id: Number(orderId) },
            data: { status },
            include: {
                detailPesanan: {
                    include: {
                        produk: true
                    }
                }
            }
        });
        res.status(200).json({
            message: 'Status pesanan berhasil diperbarui',
            order
        });
    }
    catch (error) {
        console.error('Error updating order status:', error);
        res.status(500).json({
            message: 'Gagal memperbarui status pesanan',
            error: error.message || String(error)
        });
    }
};
// Update order status by kode_pesanan (for user after payment)
export const updateOrderStatusByKode = async (req, res) => {
    try {
        const userId = req.user?.id;
        const { kode_pesanan, status } = req.body;
        if (!userId) {
            res.status(401).json({ message: 'Pengguna tidak terautentikasi' });
            return;
        }
        if (!kode_pesanan || !status) {
            res.status(400).json({ message: 'kode_pesanan dan status diperlukan' });
            return;
        }
        const validStatuses = ['PROCESSING', 'CANCELLED'];
        if (!validStatuses.includes(status)) {
            res.status(400).json({ message: 'Status tidak valid' });
            return;
        }
        const pesanan = await prisma.pesanan.findFirst({
            where: { kode_pesanan, user_id: userId }
        });
        if (!pesanan) {
            res.status(404).json({ message: 'Pesanan tidak ditemukan' });
            return;
        }
        const updated = await prisma.pesanan.update({
            where: { id: pesanan.id },
            data: { status: status }
        });
        res.status(200).json({ message: 'Status pesanan berhasil diperbarui', order: updated });
    }
    catch (error) {
        console.error('Error updating order status by kode:', error);
        res.status(500).json({
            message: 'Gagal memperbarui status pesanan',
            error: error.message || String(error)
        });
    }
};
// Get order stats for dashboard chart
export const getOrderStats = async (req, res) => {
    try {
        // Check if user is admin
        if (req.user?.role !== 'ADMIN') {
            res.status(403).json({ message: 'Akses ditolak. Hanya admin yang dapat mengakses statistik.' });
            return;
        }
        // Get sold items details
        const orderDetails = await prisma.detailPesanan.findMany({
            where: {
                pesanan: {
                    status: {
                        in: ['PROCESSING', 'SHIPPED', 'DELIVERED']
                    }
                }
            },
            include: {
                produk: {
                    select: {
                        nama_produk: true
                    }
                }
            }
        });
        // Group by product name and sum the quantity
        const statsMap = {};
        orderDetails.forEach(detail => {
            const productName = detail.produk.nama_produk;
            if (!statsMap[productName]) {
                statsMap[productName] = 0;
            }
            statsMap[productName] += detail.jumlah;
        });
        // Convert to array format suitable for recharts
        const chartData = Object.keys(statsMap).map(name => ({
            name,
            terjual: statsMap[name]
        })).sort((a, b) => (b.terjual || 0) - (a.terjual || 0));
        res.status(200).json(chartData);
    }
    catch (error) {
        console.error('Error fetching order stats:', error);
        res.status(500).json({
            message: 'Gagal mengambil statistik pesanan',
            error: error.message || String(error)
        });
    }
};
// Get dashboard summary (real data for stat cards)
export const getDashboardSummary = async (req, res) => {
    try {
        if (req.user?.role !== 'ADMIN') {
            res.status(403).json({ message: 'Akses ditolak. Hanya admin yang dapat mengakses.' });
            return;
        }
        // Total penjualan (sum of total_harga for sold orders: PROCESSING, SHIPPED, DELIVERED)
        const salesResult = await prisma.pesanan.aggregate({
            where: {
                status: {
                    in: ['PROCESSING', 'SHIPPED', 'DELIVERED']
                }
            },
            _sum: {
                total_harga: true
            }
        });
        const totalPenjualan = Number(salesResult._sum.total_harga || 0);
        // Total pesanan (all orders)
        const totalPesanan = await prisma.pesanan.count();
        // Pelanggan aktif (distinct users who have at least one order)
        const pelangganAktif = await prisma.pesanan.findMany({
            select: { user_id: true },
            distinct: ['user_id']
        });
        // Total ulasan
        const totalUlasan = await prisma.testimoni.count();
        res.status(200).json({
            totalPenjualan,
            totalPesanan,
            pelangganAktif: pelangganAktif.length,
            totalUlasan
        });
    }
    catch (error) {
        console.error('Error fetching dashboard summary:', error);
        res.status(500).json({
            message: 'Gagal mengambil ringkasan dashboard',
            error: error.message || String(error)
        });
    }
};
//# sourceMappingURL=orderController.js.map