import Image from "next/image";
import { Heart, ShoppingBag, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    image: "/images/nike-2.jpeg",
    title: "Nike Air Jordan Force",
    price: "Rp. 4,500,000",
    rating: "5.0",
  },
  {
    id: 2,
    image: "/images/sepatu-1.jpeg",
    title: "Nike White Blue",
    price: "Rp. 4,500,000",
    rating: "4.8",
  },
  {
    id: 3,
    image: "/images/nike-2.jpeg",
    title: "Nike Classic Brown",
    price: "Rp. 3,200,000",
    rating: "4.9",
  },
  {
    id: 4,
    image: "/images/sepatu-1.jpeg",
    title: "Nike Runner Elevate",
    price: "Rp. 2,800,000",
    rating: "4.7",
  },
];

export default function ProductCarousel() {
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

        {/* Carousel Container */}
        <div className="flex gap-6 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory scrollbar-hide">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[280px] md:min-w-[320px] snap-start bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition duration-300 border border-[#D7CCC8]/50"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-5 group">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
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

              <div>
                <h3 className="font-bold text-xl text-[#3E2723] mb-1 line-clamp-1">{product.title}</h3>
                <p className="text-[#8D6E63] font-semibold text-lg mb-5">{product.price}</p>
                
                <Link href={`/produk/${product.id}`} className="w-full flex items-center justify-center gap-2 bg-[#5D4037] hover:bg-[#3E2723] text-white py-3.5 rounded-xl transition duration-300 font-semibold shadow-md shadow-[#5D4037]/20">
                  <ShoppingBag size={20} />
                  Beli Sekarang
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile See More Link */}
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
