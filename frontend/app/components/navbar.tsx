"use client";

import Link from "next/link";
import { ShoppingCart, LogOut, Heart, History } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import LogoutModal from "./LogoutModal";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [user, setUser] = useState<{ nama: string; email: string } | null>(null);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const { wishlist } = useWishlist();
    const { getCartCount } = useCart();
    const cartCount = getCartCount();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Failed to parse user data", error);
            }
        }
        
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const confirmLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        window.dispatchEvent(new Event("user-auth-change"));
        setIsLogoutModalOpen(false);
        toast.success("Berhasil logout");
        router.push("/");
    };

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}
        >
            <div className={`container mx-auto px-6 transition-all duration-500 ${scrolled ? 'max-w-5xl' : ''}`}>
                <div className={`flex justify-between items-center px-6 py-3 rounded-2xl ${scrolled ? 'glass-dark' : 'bg-transparent'} transition-all duration-500`}>
                    {/* Logo */}
                    <div className="logo flex-shrink-0">
                        <Link href="/">
                            <motion.h3 
                                whileHover={{ scale: 1.05 }}
                                className="text-2xl font-display font-black tracking-tighter text-white"
                            >
                                L<span className="text-brand-light">W</span>
                            </motion.h3>
                        </Link>
                    </div>
                    
                    {/* Desktop Nav */}
                    <ul className="hidden md:flex gap-8 font-medium text-[15px] text-white/90">
                        {['Beranda', 'Produk Pilihan', 'Sedang Tren', 'Kenapa Kami'].map((item, index) => {
                            const paths = ['/', '/produk-pilihan', '#Trending', '#whyUs'];
                            return (
                                <li key={item}>
                                    <Link href={paths[index]} className="relative group py-2 font-display tracking-wide">
                                        <span className="relative z-10 group-hover:text-white transition-colors">{item}</span>
                                        <motion.span 
                                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-light group-hover:w-full transition-all duration-300"
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Actions */}
                    <div className="flex items-center gap-5 text-white/90">
                        <Link href="/wishlist" className="relative hover:text-white transition group">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Heart size={22} className="group-hover:fill-brand-light group-hover:text-brand-light transition-all" />
                                <AnimatePresence>
                                    {wishlist.length > 0 && (
                                        <motion.span 
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0, opacity: 0 }}
                                            className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-lg"
                                        >
                                            {wishlist.length}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </Link>

                        <Link href="/riwayat" className="relative hover:text-white transition group">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <History size={22} className="group-hover:text-brand-light transition-all" />
                            </motion.div>
                        </Link>


                        <Link href="/keranjang" className="relative hover:text-white transition group">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <ShoppingCart size={22} className="group-hover:text-brand-light transition-all" />
                                <AnimatePresence>
                                    {cartCount > 0 && (
                                        <motion.span 
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0, opacity: 0 }}
                                            className="absolute -top-1.5 -right-2 bg-brand text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-lg"
                                        >
                                            {cartCount}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </Link>

                        {user ? (
                            <div className="flex items-center gap-4">
                                <Link href="/profile" className="hidden md:flex group cursor-pointer relative" title={user.nama}>
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-light to-brand flex items-center justify-center text-white font-bold font-display text-sm uppercase shadow-lg ring-2 ring-white/20 group-hover:ring-brand-light/50 transition-all"
                                    >
                                        {user.nama.charAt(0)}
                                    </motion.div>
                                </Link>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsLogoutModalOpen(true)} 
                                    className="hidden md:flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white p-2 px-4 shadow-lg transition-colors"
                                >
                                    <LogOut size={16} /> <span className="text-sm font-medium">Logout</span>
                                </motion.button>
                            </div>
                        ) : (
                            <Link href="/auth/login">
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="hidden md:flex items-center justify-center rounded-xl bg-white text-brand-darkest hover:bg-brand-light p-2 px-6 shadow-lg transition-colors font-bold font-display tracking-wide"
                                >
                                    Login
                                </motion.button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            
            <LogoutModal 
                isOpen={isLogoutModalOpen} 
                onClose={() => setIsLogoutModalOpen(false)} 
                onConfirm={confirmLogout} 
            />
        </motion.nav>
    );
}

export default Navbar;