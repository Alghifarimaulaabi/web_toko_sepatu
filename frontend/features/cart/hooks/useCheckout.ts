import { useState, useEffect } from "react";
import { API_URL } from "@/lib/api";
import { useCart, cleanPrice } from "@/features/cart/context/CartContext";
import { getProfile } from "@/features/profile/services/profileService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export type PaymentMethod = "midtrans" | "cod";

export const useCheckout = () => {
  const router = useRouter();
  const { cart, checkoutItems, setCheckoutItems, removeFromCart } = useCart();
  const itemsToCheckout = checkoutItems.length > 0 ? checkoutItems : cart;

  const [mounted, setMounted] = useState(false);
  const [payment, setPayment] = useState<PaymentMethod>("midtrans");
  const [submitting, setSubmitting] = useState(false);
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    fullAddress: "",
    city: "",
    postalCode: "",
    note: "",
  });

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

  const subtotal = itemsToCheckout.reduce((acc, item) => acc + cleanPrice(item.product.price) * item.quantity, 0);
  const shippingFee = payment === "cod" ? 0 : 25000;
  const total = subtotal + shippingFee;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    if (name === "phone" || name === "postalCode") {
      // Only allow numbers
      sanitizedValue = value.replace(/\D/g, "");
    } else if (name === "name" || name === "city") {
      // Allow letters, numbers, spaces, and dot/comma (no weird symbols)
      sanitizedValue = value.replace(/[^a-zA-Z0-9\s.,]/g, "");
    }

    setAddress((prev) => ({ ...prev, [name]: sanitizedValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (!token) {
      toast.error("Silakan login terlebih dahulu untuk melakukan checkout.");
      setSubmitting(false);
      return;
    }

    try {
      console.log('Sending checkout request:', {
        items: itemsToCheckout,
        address,
        payment,
        total
      });

      const res = await fetch(`${API_URL}/api/checkout`, {
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
        if (!(window as any).snap) {
          throw new Error("Midtrans Snap tidak tersedia. Silakan refresh halaman.");
        }

        (window as any).snap.pay(data.token, {
          onSuccess: async function (result: any) {
            console.log('Payment success:', result);
            try {
              await fetch(`${API_URL}/api/orders/update-status`, {
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
            toast.success("Pembayaran berhasil!");
            router.push(`/riwayat`);
          },
          onPending: function (result: any) {
            console.log('Payment pending:', result);
            itemsToCheckout.forEach((item) => {
              removeFromCart(item.product.id, item.warna, item.ukuran);
            });
            setCheckoutItems([]);
            toast.info("Pembayaran sedang diproses. Silakan selesaikan pembayaran.");
            router.push(`/riwayat`);
          },
          onError: function (result: any) {
            console.error('Payment error:', result);
            toast.error("Pembayaran gagal! Silakan coba lagi.");
          },
          onClose: function () {
            console.log('Payment popup closed');
            toast.warning("Anda menutup popup pembayaran. Pesanan tetap bisa dibayar nanti.");
          }
        });
      } else if (payment === "cod") {
        itemsToCheckout.forEach((item) => {
          removeFromCart(item.product.id, item.warna, item.ukuran);
        });
        setCheckoutItems([]);
        toast.success("Pesanan COD berhasil dibuat!");
        router.push(`/riwayat`);
      }
    } catch (err: any) {
      console.error('Checkout error:', err);
      toast.error(err.message || "Terjadi kesalahan saat memproses pesanan. Silakan coba lagi.");
    } finally {
      setSubmitting(false);
    }
  };

  return {
    itemsToCheckout,
    mounted,
    payment,
    setPayment,
    submitting,
    address,
    handleChange,
    handleSubmit,
    subtotal,
    shippingFee,
    total,
  };
};
