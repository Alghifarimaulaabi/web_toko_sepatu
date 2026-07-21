import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    const products = await prisma.produk.findMany({
      include: { varian: true },
      orderBy: { created_at: 'desc' }
    });
    console.log('Products fetched:', products.length);

    const testimonialStats = await prisma.testimoni.groupBy({
      by: ['produk_id'],
      _avg: { rating: true },
      _count: { _all: true }
    });
    console.log('Testimonials fetched');

    const salesStats = await prisma.detailPesanan.groupBy({
      by: ['produk_id'],
      _sum: { jumlah: true }
    });
    console.log('Sales stats fetched');
  } catch (e) {
    console.error('Error:', e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
