"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Star, ArrowLeft, Trash2 } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useWishlist } from "../context/WishlistContext";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <main className="min-h-screen bg-[#EFECE7] font-sans selection:bg-[#8D6E63] selection:text-white flex flex-col">
      <Navbar />

      <section className="py-16 md:py-24 flex-grow">
        <div className="container mx-auto px-6 max-w-6xl">
          
          <Link href="/" className="inline-flex items-center gap-2 text-[#8D6E63] hover:text-[#5D4037] mb-8 font-semibold transition group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Lanjut Belanja
          </Link>

          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-2">Wishlist Anda</h1>
              <p className="text-[#8D6E63]">Koleksi produk yang Anda sukai ada di sini.</p>
            </div>

            {wishlist.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-[#D7CCC8]/50 flex flex-col items-center justify-center">
                <Heart size={64} className="text-[#D7CCC8] mb-6" />
                <h3 className="text-2xl font-bold text-[#3E2723] mb-2">Wishlist Masih Kosong</h3>
                <p className="text-[#8D6E63] mb-8">Anda belum menambahkan produk apapun ke dalam wishlist.</p>
                <Link href="/" className="bg-[#5D4037] text-white px-8 py-3 rounded-full hover:bg-[#3E2723] transition font-semibold shadow-md shadow-[#5D4037]/20">
                  Mulai Belanja
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {wishlist.map((product) => (
                  <div key={product.id} className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition duration-300 border border-[#D7CCC8]/50 flex flex-col">
                    <div className="relative h-56 rounded-2xl overflow-hidden mb-5 group">
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
                      <button 
                        onClick={() => toggleWishlist(product)}
                        className="absolute top-3 left-3 p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-red-500 hover:text-red-700 transition shadow-sm"
                        title="Hapus dari wishlist"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="flex flex-col flex-grow">
                      <h3 className="font-bold text-lg text-[#3E2723] mb-1 line-clamp-2">{product.title}</h3>
                      <p className="text-[#8D6E63] font-semibold text-md mb-5">{product.price}</p>
                      
                      <Link href={`/produk/${product.id}`} className="mt-auto w-full flex items-center justify-center gap-2 bg-[#5D4037] hover:bg-[#3E2723] text-white py-3 rounded-xl transition duration-300 font-semibold shadow-md shadow-[#5D4037]/20">
                        <ShoppingBag size={18} />
                        Beli Sekarang
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
