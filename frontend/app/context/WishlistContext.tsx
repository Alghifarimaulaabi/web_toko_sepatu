"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import type { Product } from "@/app/data/products";

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  toggleWishlist: (product: Product) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const getStorageKey = (email: string | null) => {
    return email ? `wishlist_${email}` : "wishlist_guest";
  };

  const mergeGuestWishlist = (email: string) => {
    try {
      const guestWishlistStr = localStorage.getItem("wishlist_guest");
      if (guestWishlistStr) {
        const guestWishlist: Product[] = JSON.parse(guestWishlistStr);
        if (guestWishlist.length > 0) {
          const userKey = `wishlist_${email}`;
          const userWishlistStr = localStorage.getItem(userKey);
          let userWishlist: Product[] = userWishlistStr ? JSON.parse(userWishlistStr) : [];
          
          // Merge logic
          guestWishlist.forEach((guestItem) => {
            if (!userWishlist.some(item => item.id === guestItem.id)) {
              userWishlist.push(guestItem);
            }
          });
          
          // Save merged wishlist
          localStorage.setItem(userKey, JSON.stringify(userWishlist));
          // Clear guest wishlist after merging
          localStorage.removeItem("wishlist_guest");
        }
      }
    } catch (error) {
      console.error("Error merging guest wishlist", error);
    }
  };

  const loadWishlist = useCallback(() => {
    try {
      const storedUser = localStorage.getItem("user");
      let currentEmail = null;
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        currentEmail = parsed.email || null;
      }
      
      setUserEmail(currentEmail);

      if (currentEmail) {
        mergeGuestWishlist(currentEmail);
      }
      
      const key = getStorageKey(currentEmail);
      const stored = localStorage.getItem(key);
      if (stored) {
        setWishlist(JSON.parse(stored));
      } else {
        setWishlist([]);
      }
    } catch (error) {
      console.error("Failed to load wishlist", error);
    }
    setIsLoaded(true);
  }, []);

  // Initial load
  useEffect(() => {
    loadWishlist();

    const handleAuthChange = () => {
      loadWishlist();
    };

    window.addEventListener("user-auth-change", handleAuthChange);
    return () => window.removeEventListener("user-auth-change", handleAuthChange);
  }, [loadWishlist]);

  // Save wishlist whenever it changes
  useEffect(() => {
    if (isLoaded) {
      const key = getStorageKey(userEmail);
      localStorage.setItem(key, JSON.stringify(wishlist));
    }
  }, [wishlist, isLoaded, userEmail]);

  const addToWishlist = (product: Product) => {
    setWishlist((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist((prev) => prev.filter((p) => p.id !== productId));
  };

  const isInWishlist = (productId: number) => {
    return wishlist.some((p) => p.id === productId);
  };

  const toggleWishlist = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
