-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kategori" (
    "id" SERIAL NOT NULL,
    "nama_kategori" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Kategori_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produk" (
    "id" SERIAL NOT NULL,
    "kategori_id" INTEGER NOT NULL,
    "nama_produk" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "harga" DECIMAL(65,30) NOT NULL,
    "stok" INTEGER NOT NULL,
    "gambar" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Produk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pesanan" (
    "id" SERIAL NOT NULL,
    "kode_pesanan" TEXT NOT NULL,
    "nama_penerima" TEXT NOT NULL,
    "email" TEXT,
    "no_hp" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "kota" TEXT NOT NULL,
    "provinsi" TEXT NOT NULL,
    "kode_pos" TEXT NOT NULL,
    "total_harga" DECIMAL(65,30) NOT NULL,
    "metode_pembayaran" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "tanggal_pesanan" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pesanan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetailPesanan" (
    "id" SERIAL NOT NULL,
    "pesanan_id" INTEGER NOT NULL,
    "produk_id" INTEGER NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "harga" DECIMAL(65,30) NOT NULL,
    "subtotal" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "DetailPesanan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Testimoni" (
    "id" SERIAL NOT NULL,
    "pesanan_id" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "komentar" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Testimoni_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pesanan_kode_pesanan_key" ON "Pesanan"("kode_pesanan");

-- AddForeignKey
ALTER TABLE "Produk" ADD CONSTRAINT "Produk_kategori_id_fkey" FOREIGN KEY ("kategori_id") REFERENCES "Kategori"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPesanan" ADD CONSTRAINT "DetailPesanan_pesanan_id_fkey" FOREIGN KEY ("pesanan_id") REFERENCES "Pesanan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPesanan" ADD CONSTRAINT "DetailPesanan_produk_id_fkey" FOREIGN KEY ("produk_id") REFERENCES "Produk"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Testimoni" ADD CONSTRAINT "Testimoni_pesanan_id_fkey" FOREIGN KEY ("pesanan_id") REFERENCES "Pesanan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
