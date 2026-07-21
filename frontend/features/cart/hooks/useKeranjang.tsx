import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Building2, Wallet, CreditCard } from "lucide-react";
import { useCart, cleanPrice } from "@/features/cart/context/CartContext";

export type PaymentMethod = "transfer" | "ewallet" | "cod";

export const paymentMethods: { id: PaymentMethod; label: string; icon: React.ReactNode; description: string }[] = [
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

export const useKeranjang = () => {
  const router = useRouter();
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, setCheckoutItems } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>("transfer");
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [removingId, setRemovingId] = useState<string | null>(null);
  const [selectedItemKeys, setSelectedItemKeys] = useState<string[]>([]);

  useEffect(() => {
    if (cart.length > 0 && selectedItemKeys.length === 0) {
      setSelectedItemKeys(cart.map(item => `${item.product.id}-${item.warna}-${item.ukuran}`));
    }
  }, [cart]);

  const toggleItemSelection = (key: string) => {
    setSelectedItemKeys(prev => 
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const toggleSelectAll = () => {
    if (selectedItemKeys.length === cart.length) {
      setSelectedItemKeys([]);
    } else {
      setSelectedItemKeys(cart.map(item => `${item.product.id}-${item.warna}-${item.ukuran}`));
    }
  };

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

  const selectedCartItems = cart.filter(item => selectedItemKeys.includes(`${item.product.id}-${item.warna}-${item.ukuran}`));
  const subtotal = selectedCartItems.reduce((total, item) => total + cleanPrice(item.product.price) * item.quantity, 0);
  const selectedCount = selectedCartItems.reduce((count, item) => count + item.quantity, 0);
  const shippingCost = subtotal > 0 ? (subtotal >= 3000000 ? 0 : 25000) : 0;
  const total = subtotal + shippingCost;

  const selectedPaymentData = paymentMethods.find((p) => p.id === selectedPayment);

  return {
    router,
    cart,
    increaseQuantity,
    decreaseQuantity,
    setCheckoutItems,
    isLoggedIn,
    showLoginModal,
    setShowLoginModal,
    selectedPayment,
    setSelectedPayment,
    isPaymentOpen,
    setIsPaymentOpen,
    removingId,
    selectedItemKeys,
    toggleItemSelection,
    toggleSelectAll,
    handleRemove,
    selectedCartItems,
    subtotal,
    selectedCount,
    shippingCost,
    total,
    selectedPaymentData,
    paymentMethods
  };
};
