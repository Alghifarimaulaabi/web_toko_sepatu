"use client";
import { useProductList } from "@/app/hooks/useProductList";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Star, Sparkles, Search, ChevronLeft, ChevronRight } from "lucide-react";

export default function SelectedProductsPage() {
  const {
    products: currentProducts,
    searchQuery,
    setSearchQuery,
    currentPage,
    totalPages,
    selectedCategory,
    setSelectedCategory,
    handlePrevPage,
    handleNextPage,
  } = useProductList({ itemsPerPage: 8 });

  return (
    <main className="min-h-screen bg-[#EFECE7] font-sans selection:bg-[#8D6E63] selection:text-white flex flex-col">
      <Navbar />
      
      <section className="py-24 flex-grow">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-2 text-[#5D4037] font-bold mb-3 bg-white/50 px-4 py-2 rounded-full border border-[#D7CCC8]/50">
              <Sparkles size={20} />
              <span className="uppercase tracking-widest text-sm">Kurasi Spesial</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3E2723] text-center">Produk Pilihan Kami</h1>
            <p className="text-[#8D6E63] mt-4 text-lg text-center max-w-2xl">
              Koleksi sepatu eksklusif yang dikurasi khusus untuk memberikan gaya terbaik dan kenyamanan maksimal untuk setiap langkah Anda.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#8D6E63]" />
            </div>
            <input
              type="text"
              placeholder="Cari sepatu impianmu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-[#D7CCC8]/50 bg-white/70 focus:bg-white focus:outline-none focus:border-[#8D6E63] transition shadow-sm text-[#3E2723] font-medium"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["SEMUA", "RUNNING", "FUTSAL", "CASUAL", "FORMAL", "SANDAL"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#5D4037] text-white shadow-md"
                    : "bg-white text-[#8D6E63] hover:bg-[#D7CCC8]/50 border border-[#D7CCC8]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition duration-300 border border-[#D7CCC8]/50 flex flex-col h-full"
                >
                  <div className="relative h-40 sm:h-56 rounded-2xl overflow-hidden mb-3 sm:mb-5 group shrink-0">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-[#3E2723] shadow-sm">
                      <Star size={14} className="fill-[#FFB300] text-[#FFB300]" />
                      {product.rating}
                    </div>
                    <button className="absolute top-3 left-3 p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-[#8D6E63] hover:text-red-500 transition shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                      <Heart size={18} />
                    </button>
                  </div>

                  <div className="flex flex-col flex-grow">
                    <h3 className="font-bold text-sm sm:text-xl text-[#3E2723] mb-1 line-clamp-1">{product.title}</h3>
                    <p className="text-[#8D6E63] font-semibold text-sm sm:text-lg mb-3 sm:mb-5 flex-grow">{product.price}</p>
                    
                    <Link href={`/produk/${product.id}`} className="w-full flex items-center justify-center gap-2 bg-[#5D4037] hover:bg-[#3E2723] text-white py-3.5 rounded-xl transition duration-300 font-semibold shadow-md shadow-[#5D4037]/20 mt-auto">
                      <ShoppingBag size={20} />
                      Beli Sekarang
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-[#3E2723] mb-2">Produk tidak ditemukan</h3>
              <p className="text-[#8D6E63]">Coba gunakan kata kunci pencarian yang lain.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="p-3 rounded-full bg-white text-[#5D4037] shadow-sm hover:bg-[#3E2723] hover:text-white disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-[#5D4037] transition border border-[#D7CCC8]/50"
              >
                <ChevronLeft size={24} />
              </button>
              <span className="font-semibold text-[#5D4037]">
                Halaman {currentPage} dari {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="p-3 rounded-full bg-white text-[#5D4037] shadow-sm hover:bg-[#3E2723] hover:text-white disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-[#5D4037] transition border border-[#D7CCC8]/50"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
