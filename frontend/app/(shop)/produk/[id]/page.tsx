"use client";
import { use } from "react";
import { API_URL } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import LoginModal from "@/app/components/LoginModal";
import ProductCheckoutModal from "@/app/components/ProductCheckoutModal";
import RatingStars from "@/app/components/RatingStars";
import { Heart, ShoppingBag, Star, ArrowLeft, Truck, ShieldCheck, Undo2, Loader2 } from "lucide-react";
import { useProductDetail } from "@/app/hooks/useProductDetail";
export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const {
    product,
    loading,
    testimonis,
    averageRating,
    totalReviews,
    testimoniPage,
    setTestimoniPage,
    testimoniTotalPages,
    loadingTestimonis,
    availableColors,
    availableSizes,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
    availableStock,
    currentImage,
    quantity,
    setQuantity,
    isHovered,
    setIsHovered,
    showLoginModal,
    setShowLoginModal,
    showCheckoutModal,
    setShowCheckoutModal,
    checkoutQuantity,
    setCheckoutQuantity,
    handleAction,
    handleCheckout,
    toggleWishlist,
    isInWishlist
  } = useProductDetail(id);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EFECE7]">
        <div className="text-[#5D4037] font-bold text-xl">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EFECE7]">
        <div className="text-[#5D4037] font-bold text-xl">Produk tidak ditemukan</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#EFECE7] font-sans selection:bg-[#8D6E63] selection:text-white flex flex-col">
      <Navbar />

      <section className="py-16 md:py-24 flex-grow">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#8D6E63] hover:text-[#5D4037] mb-8 font-semibold transition group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-[#D7CCC8]/50">
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div
                className="relative h-[280px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-[#F5F5F5]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Image
                  src={currentImage || product.image}
                  alt={product.title}
                  fill
                  unoptimized
                  className={`object-cover transition duration-700 ease-out ${isHovered ? "scale-110" : "scale-100"}`}
                />

                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`p-3 bg-white/90 backdrop-blur-sm rounded-full transition shadow-sm ${
                      isInWishlist(product.id)
                        ? "text-red-500"
                        : "text-[#8D6E63] hover:text-red-500 hover:scale-110"
                    }`}
                  >
                    <Heart size={24} className={isInWishlist(product.id) ? "fill-red-500" : ""} />
                  </button>
                </div>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {/* {[1, 2, 3, 4].map((thumb) => (
                  <div
                    key={thumb}
                    className={`relative h-24 w-24 rounded-xl overflow-hidden cursor-pointer border-2 transition ${
                      thumb === 1 ? "border-[#5D4037]" : "border-transparent hover:border-[#D7CCC8]"
                    }`}
                  >
                    <Image src={currentImage || product.image} alt={`Thumbnail ${thumb}`} fill unoptimized className="object-cover" />
                  </div>
                ))} */}
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#8D6E63] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Terlaris
                </span>
                <div className="flex items-center gap-1 text-sm font-bold text-[#3E2723]">
                  <Star size={16} className="fill-[#FFB300] text-[#FFB300]" />
                  {averageRating > 0 ? averageRating.toFixed(1) : product.rating}{" "}
                  <span className="text-[#8D6E63] font-medium">({totalReviews || product.reviews} ulasan)</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-2">{product.title}</h1>
              <p className="text-2xl font-bold text-[#8D6E63] mb-6">{product.price}</p>

              <div className="w-full h-px bg-[#D7CCC8]/30 mb-6"></div>

              <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

              <div className="mb-6">
                <div className="flex justify-between items-end mb-3">
                  <h3 className="font-bold text-[#3E2723]">Pilih Warna</h3>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {availableColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-xl font-bold text-sm transition-all border ${
                        selectedColor === color
                          ? "bg-[#8D6E63] text-white border-[#8D6E63] shadow-md"
                          : "bg-white text-[#5D4037] border-[#D7CCC8] hover:border-[#8D6E63] hover:bg-[#F5F5F5]"
                      }`}
                      aria-label={`Pilih warna ${color}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-end mb-3">
                  <h3 className="font-bold text-[#3E2723]">Pilih Ukuran</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-12 rounded-xl font-bold text-sm transition-all border ${
                        selectedSize === size
                          ? "bg-[#5D4037] text-white border-[#5D4037] shadow-md"
                          : "bg-white text-[#5D4037] border-[#D7CCC8] hover:border-[#8D6E63] hover:bg-[#F5F5F5]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                 <p className="text-[#3E2723] font-medium">Stok Tersedia: <span className="font-bold text-[#8D6E63]">{availableStock}</span></p>
              </div>

              <div className="flex items-center gap-6 mb-8">
                <h3 className="font-bold text-[#3E2723]">Kuantitas</h3>
                <div className="flex items-center bg-[#F5F5F5] rounded-xl border border-[#D7CCC8]/50 overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-[#5D4037] hover:bg-[#EFECE7] transition font-bold"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-bold text-[#3E2723]">{quantity}</span>
                  <button
                    onClick={() => {
                       if (quantity < availableStock) setQuantity(quantity + 1);
                    }}
                    className="w-10 h-10 flex items-center justify-center text-[#5D4037] hover:bg-[#EFECE7] transition font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button
                  onClick={() => handleAction("cart")}
                  className="flex-1 flex items-center justify-center gap-2 bg-white text-[#5D4037] border-2 border-[#5D4037] py-4 rounded-xl hover:bg-[#5D4037] hover:text-white transition duration-300 font-bold text-lg shadow-sm"
                >
                  <ShoppingBag size={22} />
                  Tambah ke Keranjang
                </button>
                <button
                  onClick={() => handleAction("buy")}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#5D4037] text-white py-4 rounded-xl hover:bg-[#3E2723] transition duration-300 font-bold text-lg shadow-md shadow-[#5D4037]/20"
                >
                  Beli Sekarang
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#D7CCC8]/30">
                <div className="flex flex-col items-center sm:items-start gap-1">
                  <Truck size={24} className="text-[#8D6E63]" />
                  <span className="text-sm font-semibold text-[#3E2723]">Gratis Ongkir</span>
                  <span className="text-xs text-gray-500 text-center sm:text-left">Untuk member</span>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-1">
                  <ShieldCheck size={24} className="text-[#8D6E63]" />
                  <span className="text-sm font-semibold text-[#3E2723]">100% Original</span>
                  <span className="text-xs text-gray-500 text-center sm:text-left">Garansi uang kembali</span>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-1">
                  <Undo2 size={24} className="text-[#8D6E63]" />
                  <span className="text-sm font-semibold text-[#3E2723]">Retur 30 Hari</span>
                  <span className="text-xs text-gray-500 text-center sm:text-left">Mudah dan cepat</span>
                </div>
              </div>

              {/* Testimonis Section */}
              <div className="mt-8 pt-8 border-t border-[#D7CCC8]/30">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-[#3E2723] text-lg">Ulasan Pembeli</h3>
                    {totalReviews > 0 && (
                      <div className="flex items-center gap-3 mt-1">
                        <RatingStars rating={averageRating} size={18} />
                        <span className="text-sm text-[#8D6E63]">
                          {averageRating.toFixed(1)} dari {totalReviews} ulasan
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {loadingTestimonis ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="animate-spin text-[#8D6E63]" size={28} />
                  </div>
                ) : testimonis.length === 0 ? (
                  <p className="text-[#8D6E63] text-sm py-4">Belum ada ulasan untuk produk ini</p>
                ) : (
                  <div className="space-y-4">
                    {testimonis.map((t) => (
                      <div key={t.id} className="bg-[#F9F7F5] rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#D7CCC8] flex items-center justify-center text-[#5D4037] font-bold">
                              {t.nama.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-medium text-[#3E2723]">{t.nama}</p>
                              <RatingStars rating={t.rating} size={14} />
                            </div>
                          </div>
                          <span className="text-xs text-[#8D6E63]">
                            {new Date(t.created_at).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                        <p className="text-[#5D4037] mt-2 text-sm leading-relaxed">{t.komentar}</p>
                        {t.gambar && (
                          <div className="mt-3 relative w-32 h-32 rounded-xl overflow-hidden border border-[#D7CCC8]">
                            <Image src={t.gambar.startsWith('http') ? t.gambar : `${API_URL}${t.gambar}`} alt="Foto Ulasan" fill unoptimized className="object-cover" />
                          </div>
                        )}
                        {t.balasan && (
                          <div className="mt-4 bg-white rounded-lg p-3 border-l-4 border-[#8D6E63]">
                            <p className="text-xs font-bold text-[#8D6E63] mb-1">Balasan Penjual:</p>
                            <p className="text-sm text-[#3E2723]">{t.balasan}</p>
                          </div>
                        )}
                      </div>
                    ))}

                    {testimoniTotalPages > 1 && (
                      <div className="flex justify-center gap-2 pt-4">
                        <button
                          onClick={() => {
                            const newPage = Math.max(testimoniPage - 1, 1);
                            setTestimoniPage(newPage);
                          }}
                          disabled={testimoniPage === 1}
                          className="px-3 py-1 rounded-full border border-[#D7CCC8] text-sm hover:bg-[#F5F0EB] transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Sebelumnya
                        </button>
                        <span className="text-sm text-[#8D6E63] flex items-center">
                          {testimoniPage} / {testimoniTotalPages}
                        </span>
                        <button
                          onClick={() => {
                            const newPage = Math.min(testimoniPage + 1, testimoniTotalPages);
                            setTestimoniPage(newPage);
                          }}
                          disabled={testimoniPage === testimoniTotalPages}
                          className="px-3 py-1 rounded-full border border-[#D7CCC8] text-sm hover:bg-[#F5F0EB] transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Selanjutnya
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />

      {product && (
        <ProductCheckoutModal
          isOpen={showCheckoutModal}
          onClose={() => setShowCheckoutModal(false)}
          product={{
            id: product.id,
            image: currentImage || product.image,
            title: product.title,
            description: product.description,
            price: Number(product.price.replace(/[^0-9]/g, "")),
          }}
          quantity={checkoutQuantity}
          warna={selectedColor}
          ukuran={selectedSize}
          onIncrease={() => setCheckoutQuantity((prev) => prev + 1)}
          onDecrease={() => setCheckoutQuantity((prev) => Math.max(1, prev - 1))}
          onCheckout={handleCheckout}
        />
      )}
    </main>
  );
}