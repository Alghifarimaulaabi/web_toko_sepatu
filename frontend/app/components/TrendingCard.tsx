'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart, ShoppingBag, Star, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useWishlist } from "../context/WishlistContext";

export default function TrendingCard() {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [trendingProducts, setTrendingProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products", { cache: 'no-store' })
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
              description: p.deskripsi || "",
            }))
            .sort((a, b) => (b.rating - a.rating) || (b.terjual - a.terjual) || b.id - a.id)
            .slice(0, 4);

          setTrendingProducts(formatted);
        }
      })
      .catch(err => console.error("Error fetching trending products:", err));
  }, []);

  return (
    <section className="py-16 bg-[#EFECE7]" id="trending">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 text-[#5D4037] font-bold mb-2">
              <TrendingUp size={20} />
              <span className="uppercase tracking-widest text-sm">Sedang Tren</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] text-center md:text-left">Trending Produk</h2>
          </div>
          <Link href="/trending" className="bg-white px-6 py-3 rounded-full shadow-sm text-[#5D4037] hover:bg-[#3E2723] hover:text-white transition font-medium border border-[#D7CCC8]/50">
            Lihat Lebih banyak
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="relative h-[400px] md:h-[450px] rounded-3xl overflow-hidden group shadow-lg shadow-[#4E342E]/10"
            >
              {/* Image Container */}
              <Image
                src={product.image}
                alt={product.title}
                fill
                unoptimized
                className="object-cover group-hover:scale-110 transition duration-700 ease-out"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B15]/90 via-[#2D1B15]/40 to-transparent"></div>

              {/* Rating */}
              <div className="absolute top-5 right-5 flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-md px-3 py-1.5 text-sm font-bold text-[#3E2723] shadow-md">
                <Star size={16} className="fill-[#FFB300] text-[#FFB300]" />
                {product.rating.toFixed(1)}
              </div>

              {/* Content Box */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform group-hover:-translate-y-2 transition duration-300">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h3 className="font-bold text-2xl text-white mb-1 drop-shadow-md">
                      {product.title}
                    </h3>
                    <p className="text-[#D7CCC8] font-medium text-lg drop-shadow-sm">{product.price}</p>
                    <p className="text-[#D7CCC8]/80 text-sm mt-1 drop-shadow-sm">Terjual {product.terjual}</p>
                  </div>

                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product);
                    }}
                    className={`bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition ${
                      isInWishlist(product.id) ? "text-red-500" : "text-white hover:text-red-500"
                    }`}
                  >
                    <Heart size={24} className={isInWishlist(product.id) ? "fill-red-500" : ""} />
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
      </div>
    </section>
  );
}