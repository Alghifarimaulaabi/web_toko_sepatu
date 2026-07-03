import Image from "next/image";
import { Heart, ShoppingBag, Star } from "lucide-react";

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
    rating: "5.0",
  },
];

export default function TrendingCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {products.map((product) => (
        <div
          key={product.id}
          className="overflow-hidden bg-[#2e2e2e4b]"
        >
          {/* Image */}
          <div className="relative h-60">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover bg-center"
            />

            {/* Rating */}
            <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
              <Star size={12} fill="yellow" color="yellow" />
              {product.rating}
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-lg text-amber-500">
                  {product.title}
                </h3>

                <p className="text-gray-300">{product.price}</p>
              </div>

              <button className="text-red-500 hover:scale-110 transition">
                <Heart fill="currentColor" size={20} />
              </button>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <button className="flex-1 rounded-lg bg-[#C9975B] py-2 font-semibold text-white hover:bg-[#b4844f] transition">
                Beli Sekarang
              </button>

              <button className="rounded-lg border border-gray-600 p-2 text-white hover:bg-gray-700 transition">
                <ShoppingBag size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}