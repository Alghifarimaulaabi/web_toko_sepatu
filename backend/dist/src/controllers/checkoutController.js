import { PrismaClient } from "@prisma/client";
import crypto from 'crypto';
// @ts-ignore - midtrans-client doesn't have type definitions
import midtransClient from 'midtrans-client';
const prisma = new PrismaClient();
// Inisialisasi Midtrans Snap dengan konfigurasi yang benar
const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY || '',
    clientKey: process.env.MIDTRANS_CLIENT_KEY || process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY || ''
});
export const createCheckout = async (req, res) => {
    try {
        const { items, address, payment, total } = req.body;
        const userId = req.user?.id;
        console.log('Checkout request received:', {
            userId,
            itemsCount: items?.length,
            payment,
            total
        });
        if (!userId) {
            res.status(401).json({ message: 'Pengguna tidak terautentikasi' });
            return;
        }
        if (!items || items.length === 0) {
            res.status(400).json({ message: 'Keranjang belanja kosong' });
            return;
        }
        if (!address || !address.name || !address.phone || !address.fullAddress || !address.city || !address.postalCode) {
            res.status(400).json({
                message: 'Alamat pengiriman belum lengkap',
                required: ['name', 'phone', 'fullAddress', 'city', 'postalCode'],
                received: address ? Object.keys(address) : null
            });
            return;
        }
        // Validasi total
        const calculatedTotal = items.reduce((acc, item) => {
            return acc + (Number(item.product.price) * Number(item.quantity));
        }, 0);
        if (Math.abs(calculatedTotal - Number(total)) > 1) {
            console.warn('Total mismatch:', { calculatedTotal, receivedTotal: total });
        }
        // Cek Stok Varian
        for (const item of items) {
            if (item.warna && item.ukuran) {
                const varian = await prisma.produkVarian.findFirst({
                    where: { produk_id: Number(item.product.id), warna: item.warna, ukuran: item.ukuran }
                });
                if (!varian || varian.stok < item.quantity) {
                    res.status(400).json({ message: `Stok untuk produk ${item.product.nama_produk || item.product.title} varian ${item.warna} - ${item.ukuran} tidak mencukupi.` });
                    return;
                }
            }
            else {
                const varian = await prisma.produkVarian.findFirst({
                    where: { produk_id: Number(item.product.id) }
                });
                if (!varian || varian.stok < item.quantity) {
                    res.status(400).json({ message: `Stok untuk produk ${item.product.nama_produk || item.product.title} tidak mencukupi.` });
                    return;
                }
            }
        }
        // Buat kode_pesanan unik
        const kodePesanan = `ORD-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
        console.log('Creating order with code:', kodePesanan);
        // Buat data pesanan di Database
        const pesanan = await prisma.pesanan.create({
            data: {
                user_id: userId,
                kode_pesanan: kodePesanan,
                nama_penerima: address.name,
                email: req.user?.email || '',
                no_hp: address.phone,
                alamat: address.fullAddress,
                kota: address.city,
                provinsi: address.province || '-',
                kode_pos: address.postalCode,
                catatan: address.note || '',
                total_harga: Number(total),
                metode_pembayaran: payment,
                status: 'PENDING',
                detailPesanan: {
                    create: items.map((item) => ({
                        produk_id: Number(item.product.id),
                        jumlah: Number(item.quantity),
                        harga: Number(item.product.price),
                        subtotal: Number(item.product.price) * Number(item.quantity),
                        warna: item.warna || null,
                        ukuran: item.ukuran || null
                    }))
                }
            },
            include: {
                detailPesanan: true
            }
        });
        console.log('Order created:', pesanan.id);
        // Kurangi stok varian
        for (const item of items) {
            if (item.warna && item.ukuran) {
                await prisma.produkVarian.updateMany({
                    where: { produk_id: Number(item.product.id), warna: item.warna, ukuran: item.ukuran },
                    data: { stok: { decrement: Number(item.quantity) } }
                });
            }
            else {
                const v = await prisma.produkVarian.findFirst({
                    where: { produk_id: Number(item.product.id) }
                });
                if (v) {
                    await prisma.produkVarian.update({
                        where: { id: v.id },
                        data: { stok: { decrement: Number(item.quantity) } }
                    });
                }
            }
        }
        if (payment === 'midtrans') {
            // Hitung item subtotal dengan pembulatan
            const itemSubtotal = items.reduce((acc, item) => {
                return acc + (Math.round(Number(item.product.price)) * Number(item.quantity));
            }, 0);
            // Hitung shipping fee
            const shippingFee = Math.round(Number(total)) - itemSubtotal;
            // Siapkan item_details untuk Midtrans
            const midtransItems = items.map((item) => ({
                id: String(item.product.id).substring(0, 50),
                price: Math.round(Number(item.product.price)),
                quantity: Number(item.quantity),
                name: String(item.product.title || item.product.nama_produk || 'Produk').substring(0, 50)
            }));
            // Tambahkan shipping fee jika ada
            if (shippingFee > 0) {
                midtransItems.push({
                    id: 'SHIPPING',
                    price: shippingFee,
                    quantity: 1,
                    name: 'Ongkos Kirim'
                });
            }
            const parameter = {
                transaction_details: {
                    order_id: kodePesanan,
                    gross_amount: itemSubtotal + Math.max(0, shippingFee)
                },
                item_details: midtransItems,
                customer_details: {
                    first_name: address.name.split(' ')[0] || address.name,
                    last_name: address.name.split(' ').slice(1).join(' ') || '',
                    email: req.user?.email || 'customer@example.com',
                    phone: address.phone,
                    billing_address: {
                        first_name: address.name,
                        phone: address.phone,
                        address: address.fullAddress,
                        city: address.city,
                        postal_code: address.postalCode,
                        country_code: "IDN"
                    },
                    shipping_address: {
                        first_name: address.name,
                        phone: address.phone,
                        address: address.fullAddress,
                        city: address.city,
                        postal_code: address.postalCode,
                        country_code: "IDN"
                    }
                },
                // Tambahkan callbacks untuk redirect
                callbacks: {
                    finish: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/riwayat`,
                    error: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/riwayat`,
                    pending: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/riwayat`
                }
            };
            console.log('Creating Midtrans transaction with params:', JSON.stringify(parameter, null, 2));
            try {
                const transaction = await snap.createTransaction(parameter);
                console.log('Midtrans transaction created:', {
                    token: transaction.token,
                    redirect_url: transaction.redirect_url
                });
                res.status(200).json({
                    message: 'Checkout berhasil',
                    token: transaction.token,
                    redirectUrl: transaction.redirect_url,
                    kodePesanan
                });
            }
            catch (midtransError) {
                console.error('Midtrans API Error:', {
                    message: midtransError.message,
                    httpStatusCode: midtransError.httpStatusCode,
                    apiResponse: midtransError.ApiResponse,
                    rawHttpClientData: midtransError.rawHttpClientData
                });
                // Hapus pesanan yang gagal
                try {
                    await prisma.detailPesanan.deleteMany({
                        where: { pesanan_id: pesanan.id }
                    });
                    await prisma.pesanan.delete({
                        where: { id: pesanan.id }
                    });
                }
                catch (delErr) {
                    console.error('Gagal menghapus pesanan setelah Midtrans error:', delErr);
                }
                res.status(500).json({
                    message: 'Gagal membuat transaksi pembayaran',
                    error: midtransError.message || 'Midtrans error',
                    details: process.env.NODE_ENV === 'development' ? midtransError.ApiResponse : undefined
                });
                return;
            }
        }
        else {
            // COD
            res.status(200).json({
                message: 'Checkout COD berhasil',
                kodePesanan
            });
        }
    }
    catch (error) {
        console.error('Checkout error:', {
            message: error.message,
            stack: error.stack,
            code: error.code
        });
        // Cek apakah error dari Prisma
        if (error.code && error.code.startsWith('P')) {
            res.status(500).json({
                message: 'Gagal menyimpan data pesanan',
                error: 'Database error'
            });
            return;
        }
        res.status(500).json({
            message: 'Gagal memproses checkout',
            error: error.message || String(error)
        });
    }
};
// Webhook for Midtrans Notifications
export const midtransNotification = async (req, res) => {
    try {
        const notificationJson = req.body;
        // Verifikasi signature dari Midtrans
        const { signature_key, order_id, status_code, gross_amount } = notificationJson;
        const serverKey = process.env.MIDTRANS_SERVER_KEY || '';
        const hash = crypto.createHash('sha512').update(order_id + status_code + gross_amount + serverKey).digest('hex');
        if (hash !== signature_key) {
            console.error(`Invalid Midtrans signature key for order: ${order_id}`);
            res.status(403).json({ message: 'Invalid signature' });
            return;
        }
        const transactionStatus = notificationJson.transaction_status;
        const fraudStatus = notificationJson.fraud_status;
        const orderId = notificationJson.order_id;
        console.log(`Notification received for order: ${orderId}, status: ${transactionStatus}, fraud: ${fraudStatus}`);
        const pesanan = await prisma.pesanan.findUnique({
            where: { kode_pesanan: orderId }
        });
        if (!pesanan) {
            console.error(`Pesanan not found for orderId: ${orderId}`);
            res.status(404).json({ message: 'Pesanan tidak ditemukan' });
            return;
        }
        let newStatus = pesanan.status;
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
        else if (transactionStatus === 'pending') {
            newStatus = 'PENDING';
        }
        if (newStatus !== pesanan.status) {
            await prisma.pesanan.update({
                where: { id: pesanan.id },
                data: { status: newStatus }
            });
            console.log(`Status for order ${orderId} updated to ${newStatus}`);
        }
        res.status(200).json({ status: 'success' });
    }
    catch (error) {
        console.error('Error handling midtrans notification:', error);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
};
//# sourceMappingURL=checkoutController.js.map