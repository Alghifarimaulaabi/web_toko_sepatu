"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback, useRef } from "react";
import { API_URL } from "@/lib/api";
export interface Product {
  id: number;
  image: string;
  title: string;
  price: string | number;
  rating?: number | string;
  description?: string;
  [key: string]: any;
}

export interface CartItem {
  product: Product;
  quantity: number;
  warna?: string;
  ukuran?: string;
}

interface CartContextType {
  cart: CartItem[];
  checkoutItems: CartItem[];
  setCheckoutItems: (items: CartItem[]) => void;
  addToCart: (product: Product, quantity?: number, warna?: string, ukuran?: string) => void;
  removeFromCart: (productId: number, warna?: string, ukuran?: string) => void;
  updateQuantity: (productId: number, quantity: number, warna?: string, ukuran?: string) => void;
  increaseQuantity: (productId: number, warna?: string, ukuran?: string) => void;
  decreaseQuantity: (productId: number, warna?: string, ukuran?: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  isInCart: (productId: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function cleanPrice(price: number | string): number {
  if (typeof price === "number") return price;
  const digitsOnly = price.replace(/\D/g, "");
  const num = parseInt(digitsOnly, 10);
  return isNaN(num) ? 0 : num;
}

// Saat user login, dispatch event
const handleLogin = (userData: any) => {
  localStorage.setItem('token', userData.token);
  localStorage.setItem('user', JSON.stringify(userData.user));
  window.dispatchEvent(new Event('user-auth-change'));
};

export function formatRupiah(amount: number | string): string {
  const num = typeof amount === "number" ? amount : cleanPrice(amount);
  if (isNaN(num)) return "Rp 0";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [checkoutItems, setCheckoutItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const getStorageKey = (email: string | null) => {
    return email ? `cart_${email}` : "cart_guest";
  };

  const getCheckoutStorageKey = (email: string | null) => {
    return email ? `checkout_items_${email}` : "checkout_items_guest";
  };

  const mergeGuestCart = (email: string) => {
    try {
      const guestCartStr = localStorage.getItem("cart_guest");
      if (guestCartStr) {
        const guestCart: CartItem[] = JSON.parse(guestCartStr);
        if (guestCart.length > 0) {
          const userKey = `cart_${email}`;
          const userCartStr = localStorage.getItem(userKey);
          let userCart: CartItem[] = userCartStr ? JSON.parse(userCartStr) : [];
          
          // Merge logic
          guestCart.forEach((guestItem) => {
            const existingIndex = userCart.findIndex(item => item.product.id === guestItem.product.id);
            if (existingIndex >= 0) {
              userCart[existingIndex].quantity += guestItem.quantity;
            } else {
              userCart.push(guestItem);
            }
          });
          
          // Save merged cart
          localStorage.setItem(userKey, JSON.stringify(userCart));
          // Clear guest cart after merging
          localStorage.removeItem("cart_guest");
        }
      }
    } catch (error) {
      console.error("Error merging guest cart", error);
    }
  };

  const loadCart = useCallback(() => {
    try {
      const storedUser = localStorage.getItem("user");
      let currentEmail = null;
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        currentEmail = parsed.email || null;
      }
      
      setUserEmail(currentEmail);
      
      if (currentEmail) {
        mergeGuestCart(currentEmail);
      }
      
      // Load cart
      const key = getStorageKey(currentEmail);
      const stored = localStorage.getItem(key);
      if (stored) {
        const parsed: CartItem[] = JSON.parse(stored);
        // Clean prices from localStorage (may be strings like "Rp. 1.200.000")
        const cleaned = parsed.map((item) => ({
          ...item,
          product: {
            ...item.product,
            price: cleanPrice(item.product.price),
          },
        }));
        setCart(cleaned);
      } else {
        setCart([]);
      }

      // Load checkout items
      const checkoutKey = getCheckoutStorageKey(currentEmail);
      const storedCheckout = localStorage.getItem(checkoutKey);
      if (storedCheckout) {
        const parsed: CartItem[] = JSON.parse(storedCheckout);
        const cleaned = parsed.map((item) => ({
          ...item,
          product: {
            ...item.product,
            price: cleanPrice(item.product.price),
          },
        }));
        setCheckoutItems(cleaned);
      } else {
        setCheckoutItems([]);
      }
    } catch (error) {
      console.error("Failed to load cart or checkout items", error);
    }
    setIsLoaded(true);
  }, []);

  // Validasi produk di keranjang — hapus yang sudah tidak ada di backend
  const hasValidated = useRef(false);
  const validateCartProducts = useCallback(async () => {
    if (hasValidated.current) return;
    hasValidated.current = true;
    try {
      const res = await fetch(`${API_URL}/api/products`);
      if (!res.ok) return;
      const products = await res.json();
      if (!Array.isArray(products)) return;
      const validIds = new Set(products.map((p: any) => p.id));

      setCart((prev) => {
        const filtered = prev.filter((item) => validIds.has(item.product.id));
        if (filtered.length !== prev.length) {
          console.log(`Removed ${prev.length - filtered.length} deleted product(s) from cart`);
        }
        return filtered.length !== prev.length ? filtered : prev;
      });

      setCheckoutItems((prev) => {
        const filtered = prev.filter((item) => validIds.has(item.product.id));
        return filtered.length !== prev.length ? filtered : prev;
      });
    } catch (error) {
      console.error("Failed to validate cart products", error);
    }
  }, []);

  // Initial load
  useEffect(() => {
    loadCart();

    const handleAuthChange = () => {
      hasValidated.current = false;
      loadCart();
    };

    window.addEventListener("user-auth-change", handleAuthChange);
    return () => window.removeEventListener("user-auth-change", handleAuthChange);
  }, [loadCart]);

  // Validate cart products after initial load
  useEffect(() => {
    if (isLoaded && cart.length > 0) {
      validateCartProducts();
    }
  }, [isLoaded, validateCartProducts]);

  // Save cart whenever it changes
  useEffect(() => {
    if (isLoaded) {
      const key = getStorageKey(userEmail);
      localStorage.setItem(key, JSON.stringify(cart));
    }
  }, [cart, isLoaded, userEmail]);

  // Save checkout items whenever they change
  useEffect(() => {
    if (isLoaded) {
      const key = getCheckoutStorageKey(userEmail);
      localStorage.setItem(key, JSON.stringify(checkoutItems));
    }
  }, [checkoutItems, isLoaded, userEmail]);

  const addToCart = (product: Product, quantity: number = 1, warna?: string, ukuran?: string) => {
    const cleanedProduct = {
      ...product,
      price: cleanPrice(product.price),
    };
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === cleanedProduct.id && item.warna === warna && item.ukuran === ukuran);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }
      return [...prev, { product: cleanedProduct, quantity, warna, ukuran }];
    });
  };

  const removeFromCart = (productId: number, warna?: string, ukuran?: string) => {
    setCart((prev) => prev.filter((item) => !(item.product.id === productId && item.warna === warna && item.ukuran === ukuran)));
  };

  const updateQuantity = (productId: number, quantity: number, warna?: string, ukuran?: string) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        (item.product.id === productId && item.warna === warna && item.ukuran === ukuran) ? { ...item, quantity } : item
      )
    );
  };

  const increaseQuantity = (productId: number, warna?: string, ukuran?: string) => {
    setCart((prev) =>
      prev.map((item) =>
        (item.product.id === productId && item.warna === warna && item.ukuran === ukuran)
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId: number, warna?: string, ukuran?: string) => {
    setCart((prev) =>
      prev.map((item) =>
        (item.product.id === productId && item.warna === warna && item.ukuran === ukuran && item.quantity > 1)
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + cleanPrice(item.product.price) * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const isInCart = (productId: number) => {
    return cart.some((item) => item.product.id === productId);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        checkoutItems,
        setCheckoutItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
