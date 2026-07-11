"use client";
import { API_URL } from "@/lib/api";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Wallet,
  Truck,
  ShieldCheck,
  Loader2,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useCart, cleanPrice, formatRupiah, type CartItem } from "../context/CartContext"; 
import { getProfile } from "../services/profileService";

type PaymentMethod = "midtrans" | "cod";

export default function CheckoutPage() {
  const { cart, clearCart, checkoutItems, setCheckoutItems, removeFromCart } = useCart();
  const itemsToCheckout = checkoutItems.length > 0 ? checkoutItems : cart;

  const [mounted, setMounted] = useState(false);
  const [payment, setPayment] = useState<PaymentMethod>("midtrans");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Load Midtrans Snap Script
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY || "Mid-client-A0D123UlfylwNc5W";
    
    const existingScript = document.querySelector(`script[src="${midtransScriptUrl}"]`);
    if (!existingScript) {
      const scriptElement = document.createElement("script");
      scriptElement.src = midtransScriptUrl;
      scriptElement.setAttribute("data-client-key", clientKey);
      scriptElement.async = true;
      document.body.appendChild(scriptElement);
    }
    
    // Fetch user profile for address auto-fill
    const fetchUserProfile = async () => {
      try {
        const profile = await getProfile();
        setAddress(prev => ({
          ...prev,
          name: profile.nama || prev.name,
          phone: profile.no_hp || prev.phone,
          fullAddress: profile.alamat || prev.fullAddress,
          city: profile.kota || prev.city,
          postalCode: profile.kode_pos || prev.postalCode,
        }));
      } catch (error) {
        console.error("Failed to fetch profile for auto-fill", error);
      }
    };
    
    fetchUserProfile();
  }, []);

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    fullAddress: "",
    city: "",
    postalCode: "",
    note: "",
  });

  const subtotal = itemsToCheckout.reduce((acc, item) => acc + cleanPrice(item.product.price) * item.quantity, 0);
  const shippingFee = payment === "cod" ? 0 : 15000;
  const total = subtotal + shippingFee;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

// Di bagian handleSubmit, perbaiki response handling:

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitting(true);

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (!token) {
    alert("Silakan login terlebih dahulu untuk melakukan checkout.");
    setSubmitting(false);
    return;
  }

  try {
    // Log request untuk debugging
    console.log('Sending checkout request:', {
      items: itemsToCheckout,
      address,
      payment,
      total
    });

    const res = await fetch(`\${API_URL}/api/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        items: itemsToCheckout,
        address,
        payment,
        total
      }),
    });

    console.log('Response status:', res.status);
    
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Error response:', errorData);
      throw new Error(errorData.message || `Gagal membuat pesanan (Status: ${res.status})`);
    }

    const data = await res.json();
    console.log('Success response:', data);

    if (payment === "midtrans" && data.token) {
      // Pastikan window.snap tersedia
      if (!(window as any).snap) {
        throw new Error("Midtrans Snap tidak tersedia. Silakan refresh halaman.");
      }

      (window as any).snap.pay(data.token, {
        onSuccess: async function (result: any) {
          console.log('Payment success:', result);
          // Update status pesanan ke PROCESSING
          try {
            await fetch(`\${API_URL}/api/orders/update-status`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
              },
              body: JSON.stringify({
                kode_pesanan: data.kodePesanan,
                status: "PROCESSING"
              })
            });
          } catch (err) {
            console.error('Failed to update order status:', err);
          }
          itemsToCheckout.forEach((item) => {
            removeFromCart(item.product.id, item.warna, item.ukuran);
          });
          setCheckoutItems([]);
          alert("Pembayaran berhasil!");
          window.location.href = `/riwayat`;
        },
        onPending: function (result: any) {
          console.log('Payment pending:', result);
          itemsToCheckout.forEach((item) => {
            removeFromCart(item.product.id, item.warna, item.ukuran);
          });
          setCheckoutItems([]);
          alert("Pembayaran sedang diproses. Silakan selesaikan pembayaran.");
          window.location.href = `/riwayat`;
        },
        onError: function (result: any) {
          console.error('Payment error:', result);
          alert("Pembayaran gagal! Silakan coba lagi.");
        },
        onClose: function () {
          console.log('Payment popup closed');
          // Jangan hapus cart items saat popup ditutup
          alert("Anda menutup popup pembayaran. Pesanan tetap bisa dibayar nanti.");
        }
      });
    } else if (payment === "cod") {
      // COD success
      itemsToCheckout.forEach((item) => {
        removeFromCart(item.product.id, item.warna, item.ukuran);
      });
      setCheckoutItems([]);
      alert("Pesanan COD berhasil dibuat!");
      window.location.href = `/riwayat`;
    }
  } catch (err: any) {
    console.error('Checkout error:', err);
    alert(err.message || "Terjadi kesalahan saat memproses pesanan. Silakan coba lagi.");
  } finally {
    setSubmitting(false);
  }
};

  if (!mounted) {
    return (
      <main className="min-h-screen bg-[#EFECE7] font-sans flex flex-col">
        <Navbar />
        <section className="py-16 md:py-24 flex-grow flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-[#D7CCC8] border-t-[#5D4037] rounded-full animate-spin"></div>
            <p className="text-[#8D6E63] font-medium">Memuat checkout...</p>
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
            href="/"
            className="inline-flex items-center gap-2 text-[#8D6E63] hover:text-[#5D4037] mb-8 font-semibold transition group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Kembali ke pembelian
          </Link>

          {/* Page Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-2">Checkout</h1>
            <p className="text-[#8D6E63]">Selesaikan pesananmu dalam beberapa langkah mudah</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
            {/* LEFT COLUMN */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Product Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-sm border border-[#D7CCC8]/50"
              >
                <h2 className="text-lg md:text-xl font-bold text-[#3E2723] mb-4 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-[#5D4037]" />
                  Ringkasan Produk
                </h2>

                <div className="flex flex-col gap-4">
                  {itemsToCheckout.map((item: CartItem, index) => (
                    <div
                      key={`${item.product.id}-${item.warna}-${item.ukuran}-${index}`}
                      className="flex gap-4 pb-4 border-b border-[#D7CCC8]/40 last:border-0 last:pb-0"
                    >
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-[#F5F5F5] flex-shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.title}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-[#3E2723] line-clamp-1">
                            {item.product.title}
                          </h3>
                          <p className="text-sm text-[#8D6E63] line-clamp-2 mt-0.5">
                            {item.product.description}
                          </p>
                          {(item.warna || item.ukuran) && (
                            <p className="text-xs text-[#5D4037] mt-1 font-semibold">
                              Varian: {item.warna || '-'} / {item.ukuran || '-'}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-[#8D6E63]">
                            {item.quantity} x {formatRupiah(cleanPrice(item.product.price))}
                          </span>
                          <span className="font-bold text-[#3E2723]">
                            {formatRupiah(cleanPrice(item.product.price) * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Shipping Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-sm border border-[#D7CCC8]/50"
              >
                <h2 className="text-lg md:text-xl font-bold text-[#3E2723] mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-[#5D4037]" />
                  Alamat Pengiriman
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-[#5D4037] mb-1 block">
                      Nama Penerima
                    </label>
                    <input
                      required
                      name="name"
                      value={address.name}
                      onChange={handleChange}
                      placeholder="Nama lengkap"
                      className="w-full px-4 py-3 rounded-xl border border-[#D7CCC8] bg-[#F9F7F5] focus:outline-none focus:ring-2 focus:ring-[#5D4037]/40 text-[#3E2723] placeholder:text-[#8D6E63]/60"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#5D4037] mb-1 block">
                      Nomor Telepon
                    </label>
                    <input
                      required
                      name="phone"
                      value={address.phone}
                      onChange={handleChange}
                      placeholder="08xxxxxxxxxx"
                      className="w-full px-4 py-3 rounded-xl border border-[#D7CCC8] bg-[#F9F7F5] focus:outline-none focus:ring-2 focus:ring-[#5D4037]/40 text-[#3E2723] placeholder:text-[#8D6E63]/60"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#5D4037] mb-1 block">
                      Kode Pos
                    </label>
                    <input
                      required
                      name="postalCode"
                      value={address.postalCode}
                      onChange={handleChange}
                      placeholder="Kode pos"
                      className="w-full px-4 py-3 rounded-xl border border-[#D7CCC8] bg-[#F9F7F5] focus:outline-none focus:ring-2 focus:ring-[#5D4037]/40 text-[#3E2723] placeholder:text-[#8D6E63]/60"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-[#5D4037] mb-1 block">
                      Kota / Kabupaten
                    </label>
                    <input
                      required
                      name="city"
                      value={address.city}
                      onChange={handleChange}
                      placeholder="Kota / Kabupaten"
                      className="w-full px-4 py-3 rounded-xl border border-[#D7CCC8] bg-[#F9F7F5] focus:outline-none focus:ring-2 focus:ring-[#5D4037]/40 text-[#3E2723] placeholder:text-[#8D6E63]/60"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-[#5D4037] mb-1 block">
                      Alamat Lengkap
                    </label>
                    <textarea
                      required
                      name="fullAddress"
                      value={address.fullAddress}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Nama jalan, nomor rumah, RT/RW, kecamatan..."
                      className="w-full px-4 py-3 rounded-xl border border-[#D7CCC8] bg-[#F9F7F5] focus:outline-none focus:ring-2 focus:ring-[#5D4037]/40 text-[#3E2723] placeholder:text-[#8D6E63]/60 resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-[#5D4037] mb-1 block">
                      Catatan (opsional)
                    </label>
                    <input
                      name="note"
                      value={address.note}
                      onChange={handleChange}
                      placeholder="Cth: titip di satpam, patokan rumah, dll"
                      className="w-full px-4 py-3 rounded-xl border border-[#D7CCC8] bg-[#F9F7F5] focus:outline-none focus:ring-2 focus:ring-[#5D4037]/40 text-[#3E2723] placeholder:text-[#8D6E63]/60"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Payment Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-sm border border-[#D7CCC8]/50"
              >
                <h2 className="text-lg md:text-xl font-bold text-[#3E2723] mb-4 flex items-center gap-2">
                  <Wallet size={20} className="text-[#5D4037]" />
                  Metode Pembayaran
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Midtrans */}
                  <button
                    type="button"
                    onClick={() => setPayment("midtrans")}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition text-left ${
                      payment === "midtrans"
                        ? "border-[#5D4037] bg-[#5D4037]/5"
                        : "border-[#D7CCC8]/60 hover:border-[#D7CCC8]"
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 ${
                        payment === "midtrans" ? "bg-[#5D4037] text-white" : "bg-[#F5F5F5] text-[#8D6E63]"
                      }`}
                    >
                      <Wallet size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-[#3E2723]">Midtrans</p>
                      <p className="text-xs text-[#8D6E63]">
                        Transfer bank, e-wallet, kartu kredit
                      </p>
                    </div>
                  </button>

                  {/* COD */}
                  <button
                    type="button"
                    onClick={() => setPayment("cod")}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition text-left ${
                      payment === "cod"
                        ? "border-[#5D4037] bg-[#5D4037]/5"
                        : "border-[#D7CCC8]/60 hover:border-[#D7CCC8]"
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 ${
                        payment === "cod" ? "bg-[#5D4037] text-white" : "bg-[#F5F5F5] text-[#8D6E63]"
                      }`}
                    >
                      <Truck size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-[#3E2723]">COD</p>
                      <p className="text-xs text-[#8D6E63]">Bayar di tempat saat barang tiba</p>
                    </div>
                  </button>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Order Summary */}
            <div className="w-full lg:w-96 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="bg-white rounded-2xl md:rounded-3xl p-6 shadow-sm border border-[#D7CCC8]/50 sticky top-24"
              >
                <h2 className="text-lg md:text-xl font-bold text-[#3E2723] mb-4">
                  Rincian Pembayaran
                </h2>

                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between text-[#8D6E63]">
                    <span>Subtotal ({itemsToCheckout.length} produk)</span>
                    <span className="font-medium text-[#3E2723]">{formatRupiah(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-[#8D6E63]">
                    <span>Ongkos Kirim</span>
                    <span className="font-medium text-[#3E2723]">
                      {shippingFee === 0 ? "Gratis" : formatRupiah(shippingFee)}
                    </span>
                  </div>
                  <div className="border-t border-[#D7CCC8]/50 pt-3 flex justify-between items-center">
                    <span className="font-bold text-[#3E2723]">Total</span>
                    <span className="font-bold text-xl text-[#3E2723]">
                      {formatRupiah(total)}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting || itemsToCheckout.length === 0}
                  className="w-full mt-6 bg-[#5D4037] text-white py-4 rounded-full hover:bg-[#3E2723] transition font-bold shadow-lg shadow-[#5D4037]/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Memproses...
                    </>
                  ) : (
                    <>
                      Buat Pesanan
                      <ChevronRight size={18} />
                    </>
                  )}
                </button>

                <p className="text-xs text-[#8D6E63] text-center mt-4 leading-relaxed">
                  Dengan melanjutkan, kamu menyetujui Syarat & Ketentuan serta Kebijakan Privasi kami.
                </p>
              </motion.div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}