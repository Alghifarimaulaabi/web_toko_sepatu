"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Star, TrendingUp, Search, ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 6;

export default function TrendingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [trendingProducts, setTrendingProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch(`\${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/products`, { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const formatted = data
            .map((p: any) => ({
              id: p.id,
              image: p.gambar,
              title: p.nama_produk,
              price: `Rp. ${Number(p.harga).toLocaleString('id-ID')}`,
              rating: Number(p.rating ?? 0),
              terjual: Number(p.terjual ?? 0),
            }))
            .sort((a, b) => (b.rating - a.rating) || (b.terjual - a.terjual) || b.id - a.id);

          setTrendingProducts(formatted);
        }
      })
      .catch(err => console.error("Error fetching trending products:", err));
  }, []);

  const filteredProducts = [...trendingProducts]
    .filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen bg-[#EFECE7] font-sans selection:bg-[#8D6E63] selection:text-white flex flex-col">
      <Navbar />
      
      <section className="py-24 flex-grow">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-2 text-[#5D4037] font-bold mb-3 bg-white/50 px-4 py-2 rounded-full border border-[#D7CCC8]/50">
              <TrendingUp size={20} />
              <span className="uppercase tracking-widest text-sm">Sedang Tren</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3E2723] text-center">Semua Produk Trending</h1>
            <p className="text-[#8D6E63] mt-4 text-lg text-center max-w-2xl">
              Temukan koleksi sepatu paling populer dan banyak dicari saat ini. Tingkatkan gaya Anda dengan produk pilihan terbaik kami.
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
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // Reset to page 1 on search
              }}
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-[#D7CCC8]/50 bg-white/70 focus:bg-white focus:outline-none focus:border-[#8D6E63] transition shadow-sm text-[#3E2723] font-medium"
            />
          </div>

          {/* Cards Grid */}
          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="relative h-[450px] rounded-3xl overflow-hidden group shadow-lg shadow-[#4E342E]/10"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-110 transition duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B15]/90 via-[#2D1B15]/40 to-transparent"></div>
                  <div className="absolute top-5 right-5 flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-md px-3 py-1.5 text-sm font-bold text-[#3E2723] shadow-md">
                    <Star size={16} className="fill-[#FFB300] text-[#FFB300]" />
                    {product.rating.toFixed(1)}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform group-hover:-translate-y-2 transition duration-300">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <h3 className="font-bold text-2xl text-white mb-1 drop-shadow-md">{product.title}</h3>
                        <p className="text-[#D7CCC8] font-medium text-lg drop-shadow-sm">{product.price}</p>
                        <p className="text-[#D7CCC8]/80 text-sm mt-1 drop-shadow-sm">Terjual {product.terjual}</p>
                      </div>
                      <button className="text-white hover:text-red-500 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition">
                        <Heart size={24} />
                      </button>
                    </div>
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition duration-300">
                      <Link href={`/produk/${product.id}`} className="flex-1 flex justify-center items-center rounded-xl bg-[#8D6E63] py-3.5 px-4 font-bold text-white hover:bg-[#5D4037] transition shadow-lg">
                        Beli Sekarang
                      </Link>
                      <button className="rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm p-3.5 text-white hover:bg-white/20 transition">
                        <ShoppingBag size={20} />
                      </button>
                    </div>
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

