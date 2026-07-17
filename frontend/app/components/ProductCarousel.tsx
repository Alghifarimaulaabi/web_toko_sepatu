"use client";
import { API_URL } from "@/lib/api";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart, ShoppingBag, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useWishlist } from "@/app/context/WishlistContext";

interface CarouselProduct {
  id: number;
  image: string;
  title: string;
  price: string;
  rating: string;
  description: string;
}

interface ProdukListResponse {
  produk: {
    id: number;
    nama_produk: string;
    harga: number;
    gambar: string;
    deskripsi: string;
  }[];
}

export default function ProductCarousel() {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [carouselProducts, setCarouselProducts] = useState<CarouselProduct[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/api/products`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const formatted: CarouselProduct[] = data.slice(0, 8).map((p: any) => ({
            id: p.id,
            image: p.gambar,
            title: p.nama_produk,
            price: `Rp. ${Number(p.harga).toLocaleString("id-ID")}`,
            rating: Number(p.rating ?? 0).toFixed(1),
            description: p.deskripsi,
          }));
          setCarouselProducts(formatted);
        }
      })
      .catch((err) => console.error("Error fetching carousel products:", err));
  }, []);

  return (
    <section className="py-16 bg-[#EFECE7]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723]">Produk Pilihan</h2>
            <p className="text-[#8D6E63] mt-2 text-lg">Koleksi sepatu terbaik untuk gaya dan kenyamanan Anda.</p>
          </div>
          <Link href="/produk-pilihan" className="hidden md:flex items-center gap-2 text-[#5D4037] hover:text-[#3E2723] transition font-semibold group">
            Lihat Lebih banyak
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory scrollbar-hide">
          {carouselProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[250px] w-[calc(50%-8px)] sm:w-auto sm:min-w-[280px] md:min-w-[320px] snap-start bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-sm hover:shadow-xl transition duration-300 border border-[#D7CCC8]/50 flex flex-col"
            >
              <div className="relative h-40 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-5 group shrink-0">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-[#3E2723] shadow-sm">
                  <Star size={14} className="fill-[#FFB300] text-[#FFB300]" />
                  {product.rating}
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist(product);
                  }}
                  className={`absolute top-3 left-3 p-2.5 bg-white/90 backdrop-blur-sm rounded-full transition shadow-sm md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 duration-300 ${
                    isInWishlist(product.id) ? "text-red-500 opacity-100 translate-y-0" : "text-[#8D6E63] hover:text-red-500"
                  }`}
                >
                  <Heart size={18} className={isInWishlist(product.id) ? "fill-red-500" : ""} />
                </button>
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="font-bold text-sm sm:text-xl text-[#3E2723] mb-1 line-clamp-1">{product.title}</h3>
                <p className="text-[#8D6E63] font-semibold text-sm sm:text-lg mb-3 sm:mb-5 flex-grow">{product.price}</p>

                <Link href={`/produk/${product.id}`} className="w-full flex items-center justify-center gap-2 bg-[#5D4037] hover:bg-[#3E2723] text-white py-3.5 rounded-xl transition duration-300 font-semibold shadow-md shadow-[#5D4037]/20">
                  <ShoppingBag size={20} />
                  Beli Sekarang
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center md:hidden">
          <Link href="/produk-pilihan" className="flex items-center gap-2 text-[#5D4037] hover:text-[#3E2723] transition font-semibold group bg-white px-6 py-3 rounded-full shadow-sm">
            Lihat Lebih banyak
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}