"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import type { Product } from "../data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const getStorageKey = (email: string | null) => {
    return email ? `cart_${email}` : "cart_guest";
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
    } catch (error) {
      console.error("Failed to load cart", error);
    }
    setIsLoaded(true);
  }, []);

  // Initial load
  useEffect(() => {
    loadCart();

    const handleAuthChange = () => {
      loadCart();
    };

    window.addEventListener("user-auth-change", handleAuthChange);
    return () => window.removeEventListener("user-auth-change", handleAuthChange);
  }, [loadCart]);

  // Save cart whenever it changes
  useEffect(() => {
    if (isLoaded) {
      const key = getStorageKey(userEmail);
      localStorage.setItem(key, JSON.stringify(cart));
    }
  }, [cart, isLoaded, userEmail]);

  const addToCart = (product: Product, quantity: number = 1) => {
    const cleanedProduct = {
      ...product,
      price: cleanPrice(product.price),
    };
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === cleanedProduct.id);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }
      return [...prev, { product: cleanedProduct, quantity }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const increaseQuantity = (productId: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.quantity > 1
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
