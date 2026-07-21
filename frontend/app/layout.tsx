import type { Metadata } from "next";
import { Inter, Outfit, Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { WishlistProvider } from "@/features/wishlist/context/WishlistContext";
import { CartProvider } from "@/features/cart/context/CartContext";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Commerce Sepatu",
  description: "Toko sepatu online terbaik dan terlengkap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground selection:bg-brand selection:text-white`}
      >
        <WishlistProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </WishlistProvider>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
