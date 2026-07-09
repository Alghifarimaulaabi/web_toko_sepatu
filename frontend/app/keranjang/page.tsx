"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  ArrowLeft,
  Trash2,
  Plus,
  Minus,
  CreditCard,
  Wallet,
  Building2,
  ShieldCheck,
  Truck,
  Tag,
  ChevronDown,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import { useCart, formatRupiah, cleanPrice } from "../context/CartContext";

type PaymentMethod = "transfer" | "ewallet" | "cod";

const paymentMethods: { id: PaymentMethod; label: string; icon: React.ReactNode; description: string }[] = [
  {
    id: "transfer",
    label: "Transfer Bank",
    icon: <Building2 size={20} />,
    description: "BCA, BNI, BRI, Mandiri",
  },
  {
    id: "ewallet",
    label: "E-Wallet",
    icon: <Wallet size={20} />,
    description: "GoPay, OVO, Dana, ShopeePay",
  },
  {
    id: "cod",
    label: "COD (Bayar di Tempat)",
    icon: <CreditCard size={20} />,
    description: "Bayar saat barang diterima",
  },
];

export default function KeranjangPage() {
  const router = useRouter();
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, getCartTotal, setCheckoutItems } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>("transfer");
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [removingId, setRemovingId] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
      setShowLoginModal(true);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  const handleRemove = (productId: number, warna?: string, ukuran?: string) => {
    const idStr = `${productId}-${warna}-${ukuran}`;
    setRemovingId(idStr);
    setTimeout(() => {
      removeFromCart(productId, warna, ukuran);
      setRemovingId(null);
    }, 300);
  };

  const subtotal = getCartTotal();
  const shippingCost = subtotal > 0 ? (subtotal >= 3000000 ? 0 : 25000) : 0;
  const total = subtotal + shippingCost;

  const selectedPaymentData = paymentMethods.find((p) => p.id === selectedPayment);

  // Loading state
  if (isLoggedIn === null) {
    return (
      <main className="min-h-screen bg-[#EFECE7] font-sans flex flex-col">
        <Navbar />
        <section className="py-16 md:py-24 flex-grow flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-[#D7CCC8] border-t-[#5D4037] rounded-full animate-spin"></div>
            <p className="text-[#8D6E63] font-medium">Memuat keranjang...</p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#EFECE7] font-sans selection:bg-[#8D6E63] selection:text-white flex flex-col">
      <Navbar />

      <section className="py-12 md:py-20 flex-grow">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {/* Back Link */}
          <Link
            href="/produk-pilihan"
            className="inline-flex items-center gap-2 text-[#8D6E63] hover:text-[#5D4037] mb-8 font-semibold transition group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Lanjut Belanja
          </Link>

          {/* Page Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-2">
              Keranjang Belanja
            </h1>
            <p className="text-[#8D6E63]">
              {cart.length > 0
                ? `Anda memiliki ${cart.length} produk di keranjang`
                : "Keranjang belanja Anda kosong"}
            </p>
          </div>

          {cart.length === 0 ? (
            /* Empty Cart State */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-12 md:p-16 text-center shadow-sm border border-[#D7CCC8]/50 flex flex-col items-center justify-center"
            >
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#D7CCC8]/30 to-[#EFECE7] flex items-center justify-center mb-8">
                <ShoppingCart size={56} className="text-[#D7CCC8]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#3E2723] mb-3">
                Keranjang Masih Kosong
              </h3>
              <p className="text-[#8D6E63] mb-8 max-w-md mx-auto leading-relaxed">
                Sepertinya Anda belum menambahkan produk apapun ke keranjang. Yuk, mulai belanja
                sekarang!
              </p>
              <Link
                href="/"
                className="bg-[#5D4037] text-white px-10 py-4 rounded-full hover:bg-[#3E2723] transition font-bold shadow-lg shadow-[#5D4037]/20 text-lg"
              >
                Mulai Belanja
              </Link>
            </motion.div>
          ) : (
            /* Cart Content */
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column: Cart Items */}
              <div className="flex-1 flex flex-col gap-4">
                <AnimatePresence mode="popLayout">
                  {cart.map((item, index) => {
                    const itemKey = `${item.product.id}-${item.warna}-${item.ukuran}`;
                    return (
                    <motion.div
                      key={itemKey}
                      layout
                      initial={{ opacity: 0, x: -30 }}
                      animate={{
                        opacity: removingId === itemKey ? 0 : 1,
                        x: removingId === itemKey ? 80 : 0,
                        scale: removingId === itemKey ? 0.95 : 1,
                      }}
                      exit={{ opacity: 0, x: 80, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm border border-[#D7CCC8]/50 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                        {/* Product Image */}
                        <div className="relative w-full sm:w-32 md:w-36 h-32 md:h-36 rounded-xl md:rounded-2xl overflow-hidden bg-[#F5F5F5] flex-shrink-0 group">
                          <Image
                            src={item.product.image}
                            alt={item.product.title}
                            fill
                            unoptimized
                            className="object-cover group-hover:scale-110 transition duration-500"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div>
                            <Link
                              href={`/produk/${item.product.id}`}
                              className="font-bold text-lg md:text-xl text-[#3E2723] hover:text-[#5D4037] transition line-clamp-2"
                            >
                              {item.product.title}
                            </Link>
                            <p className="text-[#8D6E63] text-sm mt-1 line-clamp-1">
                              {item.product.description}
                            </p>
                            {(item.warna || item.ukuran) && (
                                <p className="text-[#5D4037] text-sm mt-1 font-semibold">
                                  Varian: {item.warna || '-'} / {item.ukuran || '-'}
                                </p>
                            )}
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-4">
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-medium text-[#8D6E63]">Jumlah:</span>
                              <div className="flex items-center bg-[#F5F5F5] rounded-xl border border-[#D7CCC8]/50 overflow-hidden">
                                <button
                                  onClick={() => decreaseQuantity(item.product.id, item.warna, item.ukuran)}
                                  disabled={item.quantity <= 1}
                                  className="w-10 h-10 flex items-center justify-center text-[#5D4037] hover:bg-[#EFECE7] transition disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                  <Minus size={16} />
                                </button>
                                <span className="w-12 text-center font-bold text-[#3E2723] text-lg">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => increaseQuantity(item.product.id, item.warna, item.ukuran)}
                                  className="w-10 h-10 flex items-center justify-center text-[#5D4037] hover:bg-[#EFECE7] transition"
                                >
                                  <Plus size={16} />
                                </button>
                              </div>
                            </div>

                            {/* Price & Delete */}
                            <div className="flex items-center justify-between sm:justify-end gap-4">
                              <p className="text-xl md:text-2xl font-bold text-[#3E2723]">
                                {formatRupiah(cleanPrice(item.product.price) * item.quantity)}
                              </p>
                              <button
                                onClick={() => handleRemove(item.product.id, item.warna, item.ukuran)}
                                className="p-2.5 rounded-xl text-red-400 hover:text-red-600 hover:bg-red-50 transition group"
                                title="Hapus dari keranjang"
                              >
                                <Trash2 size={20} className="group-hover:scale-110 transition" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Right Column: Payment Summary */}
              <div className="lg:w-[420px] flex-shrink-0">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-[#D7CCC8]/50 sticky top-28">
                  <h2 className="text-xl font-bold text-[#3E2723] mb-6">Ringkasan Pembayaran</h2>

                  {/* Payment Method Selector */}
                  <div className="mb-6">
                    <label className="text-sm font-semibold text-[#3E2723] mb-3 block">
                      Metode Pembayaran
                    </label>
                    <div className="relative">
                      <button
                        onClick={() => setIsPaymentOpen(!isPaymentOpen)}
                        className="w-full flex items-center justify-between gap-3 bg-[#F5F5F5] border border-[#D7CCC8]/50 rounded-xl px-4 py-3.5 hover:border-[#8D6E63] transition text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8D6E63] to-[#5D4037] flex items-center justify-center text-white">
                            {selectedPaymentData?.icon}
                          </div>
                          <div>
                            <p className="font-semibold text-[#3E2723] text-sm">
                              {selectedPaymentData?.label}
                            </p>
                            <p className="text-xs text-[#8D6E63]">
                              {selectedPaymentData?.description}
                            </p>
                          </div>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`text-[#8D6E63] transition-transform ${isPaymentOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {isPaymentOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                            animate={{ opacity: 1, y: 0, scaleY: 1 }}
                            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-[#D7CCC8]/50 shadow-lg z-20 overflow-hidden origin-top"
                          >
                            {paymentMethods.map((method) => (
                              <button
                                key={method.id}
                                onClick={() => {
                                  setSelectedPayment(method.id);
                                  setIsPaymentOpen(false);
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-3.5 hover:bg-[#F5F5F5] transition text-left ${
                                  selectedPayment === method.id ? "bg-[#EFECE7]" : ""
                                }`}
                              >
                                <div
                                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                    selectedPayment === method.id
                                      ? "bg-gradient-to-br from-[#8D6E63] to-[#5D4037] text-white"
                                      : "bg-[#F5F5F5] text-[#8D6E63]"
                                  }`}
                                >
                                  {method.icon}
                                </div>
                                <div>
                                  <p className="font-semibold text-[#3E2723] text-sm">
                                    {method.label}
                                  </p>
                                  <p className="text-xs text-[#8D6E63]">{method.description}</p>
                                </div>
                                {selectedPayment === method.id && (
                                  <div className="ml-auto w-5 h-5 rounded-full bg-[#5D4037] flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                  </div>
                                )}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-[#D7CCC8]/40 mb-6"></div>

                  {/* Price Breakdown */}
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-[#8D6E63] text-sm">
                        Subtotal ({cart.reduce((acc, item) => acc + item.quantity, 0)} item)
                      </span>
                      <span className="font-semibold text-[#3E2723]">{formatRupiah(subtotal)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#8D6E63] text-sm flex items-center gap-1.5">
                        <Truck size={14} />
                        Ongkos Kirim
                      </span>
                      <span
                        className={`font-semibold ${shippingCost === 0 ? "text-green-600" : "text-[#3E2723]"}`}
                      >
                        {shippingCost === 0 ? "GRATIS" : formatRupiah(shippingCost)}
                      </span>
                    </div>
                    {shippingCost === 0 && subtotal > 0 && (
                      <div className="flex items-center gap-2 bg-green-50 text-green-700 text-xs font-medium px-3 py-2 rounded-lg">
                        <Tag size={14} />
                        Gratis ongkir untuk belanja di atas Rp3.000.000
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-[#D7CCC8]/40 mb-6"></div>

                  {/* Total */}
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-lg font-bold text-[#3E2723]">Total</span>
                    <span className="text-2xl font-bold text-[#3E2723]">
                      {formatRupiah(total)}
                    </span>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={() => {
                      setCheckoutItems(cart);
                      router.push("/checkout");
                    }}
                    className="w-full bg-gradient-to-r from-[#5D4037] to-[#3E2723] text-white py-4 rounded-xl hover:from-[#3E2723] hover:to-[#3E2723] transition-all duration-300 font-bold text-lg shadow-lg shadow-[#5D4037]/20 hover:shadow-xl hover:shadow-[#5D4037]/30 active:scale-[0.98]"
                  >
                    Bayar Sekarang
                  </button>

                  {/* Trust Badges */}
                  <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-[#D7CCC8]/30">
                    <div className="flex items-center gap-1.5 text-xs text-[#8D6E63]">
                      <ShieldCheck size={16} />
                      <span>Transaksi Aman</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#8D6E63]">
                      <Truck size={16} />
                      <span>Pengiriman Cepat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />

      {/* Login Required Modal */}
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </main>
  );
}
