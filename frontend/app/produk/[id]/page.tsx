"use client";

import { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import LoginModal from "../../components/LoginModal";
import { Heart, ShoppingBag, Star, ArrowLeft, Truck, ShieldCheck, Undo2 } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { toast } from "sonner";

import { getProductById } from "../../data/products";

interface ColorOption {
  name: string;
  code: string;
}

interface ProductDetailData {
  id: number;
  title: string;
  price: string;
  rating: string;
  reviews: number;
  description: string;
  image: string;
  colors: ColorOption[];
  sizes: string[];
}

interface ProdukVarian {
  id: number;
  ukuran: string;
  stok: number;
}

interface ProdukApiResponse {
  produk: {
    id: number;
    nama_produk: string;
    deskripsi: string;
    harga: number;
    gambar: string;
    varian: ProdukVarian[];
  };
}

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const [product, setProduct] = useState<ProductDetailData | null>(null);
  const [loading, setLoading] = useState(true);

  const [selectedColor, setSelectedColor] = useState<ColorOption>({
    name: "Sesuai Gambar",
    code: "bg-gray-500",
  });
  const [selectedSize, setSelectedSize] = useState("42");
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const numId = Number(id);

    // 2. Kalau bukan mock, fetch dari backend
    fetch(`http://localhost:5000/api/products/${numId}`, { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("Produk tidak ditemukan");
        return res.json();
      })
      .then((produk) => {
        setProduct({
          id: produk.id,
          title: produk.nama_produk,
          price: `Rp. ${Number(produk.harga).toLocaleString("id-ID")}`,
          rating: "5.0",
          reviews: 0,
          description: produk.deskripsi,
          image: `http://localhost:5000${produk.gambar}`,
          colors: [{ name: "Sesuai Gambar", code: "bg-gray-500" }],
          sizes: produk.varian ? produk.varian.map((v: any) => v.ukuran) : ["39", "40", "41", "42", "43", "44", "45"],
        });
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAction = (action: string) => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (!token) {
      setShowLoginModal(true);
      return;
    }

    if (!product) return;

    if (action === "cart") {
      addToCart(product, quantity);
      toast.success(`${product.title} ditambahkan ke keranjang!`);
    } else {
      alert("Melanjutkan ke pembayaran...");
    }
  };

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
        <div className="container mx-auto px-6 max-w-6xl">
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
                className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-[#F5F5F5]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Image
                  src={product.image}
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
                {[1, 2, 3, 4].map((thumb) => (
                  <div
                    key={thumb}
                    className={`relative h-24 w-24 rounded-xl overflow-hidden cursor-pointer border-2 transition ${
                      thumb === 1 ? "border-[#5D4037]" : "border-transparent hover:border-[#D7CCC8]"
                    }`}
                  >
                    <Image src={product.image} alt={`Thumbnail ${thumb}`} fill unoptimized className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#8D6E63] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Terlaris
                </span>
                <div className="flex items-center gap-1 text-sm font-bold text-[#3E2723]">
                  <Star size={16} className="fill-[#FFB300] text-[#FFB300]" />
                  {product.rating}{" "}
                  <span className="text-[#8D6E63] font-medium">({product.reviews} ulasan)</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-2">{product.title}</h1>
              <p className="text-2xl font-bold text-[#8D6E63] mb-6">{product.price}</p>

              <div className="w-full h-px bg-[#D7CCC8]/30 mb-6"></div>

              <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

              <div className="mb-6">
                <div className="flex justify-between items-end mb-3">
                  <h3 className="font-bold text-[#3E2723]">Pilih Warna</h3>
                  <span className="text-sm font-medium text-[#8D6E63]">{selectedColor.name}</span>
                </div>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all ${
                        selectedColor.name === color.name ? "border-[#8D6E63] scale-110" : "border-transparent hover:scale-105"
                      } shadow-sm`}
                      aria-label={`Pilih warna ${color.name}`}
                    >
                      <span className={`w-8 h-8 rounded-full ${color.code} shadow-inner`}></span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-end mb-3">
                  <h3 className="font-bold text-[#3E2723]">Pilih Ukuran (EU)</h3>
                  <Link href="#" className="text-sm font-medium text-[#5D4037] hover:underline">
                    Panduan Ukuran
                  </Link>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
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
                    onClick={() => setQuantity(quantity + 1)}
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
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </main>
  );
}