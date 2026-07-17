"use client";

import Link from "next/link";
import { ShoppingCart, LogOut, Heart, History, Menu, X, User } from "lucide-react";
import LogoutModal from "./LogoutModal";
import { useWishlist } from "@/app/context/WishlistContext";
import { useCart } from "@/app/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { useNavbar } from "@/app/hooks/useNavbar";

const Navbar = () => {
    const { wishlist } = useWishlist();
    const { getCartCount } = useCart();
    const cartCount = getCartCount();

    const {
        user,
        isLogoutModalOpen,
        setIsLogoutModalOpen,
        scrolled,
        isSidebarOpen,
        setIsSidebarOpen,
        confirmLogout,
        navLinks,
        sidebarLinks
    } = useNavbar();

    return (
        <>
            <motion.nav 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}
            >
                <div className={`container mx-auto px-4 md:px-6 transition-all duration-500 ${scrolled ? 'max-w-5xl' : ''}`}>
                    <div className={`flex justify-between items-center px-4 md:px-6 py-3 rounded-2xl ${scrolled ? 'glass-dark' : 'bg-black/20 backdrop-blur-md'} transition-all duration-500 border border-white/10`}>
                        {/* Logo */}
                        <div className="logo flex-shrink-0">
                            <Link href="/">
                                <motion.h3 
                                    whileHover={{ scale: 1.05 }}
                                    className="text-2xl font-display font-black tracking-tighter text-white"
                                >
                                    S<span className="text-brand-light">C</span>
                                </motion.h3>
                            </Link>
                        </div>
                        
                        {/* Desktop Nav */}
                        <ul className="hidden md:flex gap-8 font-medium text-[15px] text-white/90">
                            {navLinks.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.path} className="relative group py-2 font-display tracking-wide">
                                        <span className="relative z-10 group-hover:text-white transition-colors">{item.name}</span>
                                        <motion.span 
                                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-light group-hover:w-full transition-all duration-300"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Actions */}
                        <div className="flex items-center gap-4 text-white/90">
                            {/* Desktop Icons */}
                            <div className="hidden sm:flex items-center gap-5 mr-2">
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
                            </div>

                            {user ? (
                                <div className="hidden md:flex items-center gap-4">
                                    <Link href="/profile" className="group cursor-pointer relative" title={user.nama}>
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
                                        className="items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white p-2 px-4 shadow-lg transition-colors flex"
                                    >
                                        <LogOut size={16} /> <span className="text-sm font-medium">Logout</span>
                                    </motion.button>
                                </div>
                            ) : (
                                <Link href="/auth/login" className="hidden md:block">
                                    <motion.button 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center justify-center rounded-xl bg-white text-brand-darkest hover:bg-brand-light hover:text-white p-2 px-6 shadow-lg transition-colors font-bold font-display tracking-wide"
                                    >
                                        Login
                                    </motion.button>
                                </Link>
                            )}

                            {/* Mobile Menu Button */}
                            <button 
                                className="md:hidden text-white hover:text-brand-light transition-colors ml-2"
                                onClick={() => setIsSidebarOpen(true)}
                                aria-label="Open Menu"
                            >
                                <Menu size={26} />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Sidebar Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSidebarOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
                        />
                        <motion.div 
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] bg-[#EFECE7] z-50 md:hidden flex flex-col shadow-2xl border-l border-[#D7CCC8]/30"
                        >
                            {/* Sidebar Header */}
                            <div className="flex justify-between items-center p-6 border-b border-[#D7CCC8]/50 bg-white">
                                <Link href="/" onClick={() => setIsSidebarOpen(false)}>
                                    <h3 className="text-2xl font-display font-black tracking-tighter text-[#3E2723]">
                                        L<span className="text-[#8D6E63]">W</span>
                                    </h3>
                                </Link>
                                <button 
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="p-2 bg-[#F9F7F5] rounded-full text-[#5D4037] hover:bg-[#D7CCC8] transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Sidebar User Info */}
                            {user ? (
                                <div className="p-6 bg-[#5D4037] text-white flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                                        {user.nama.charAt(0)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold truncate">{user.nama}</p>
                                        <p className="text-white/70 text-sm truncate">{user.email}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="p-6 bg-[#5D4037] text-white flex flex-col gap-3">
                                    <p className="text-sm text-white/80">Silakan login untuk pengalaman belanja terbaik.</p>
                                    <Link 
                                        href="/auth/login" 
                                        onClick={() => setIsSidebarOpen(false)}
                                        className="bg-white text-[#5D4037] py-2.5 rounded-xl font-bold text-center hover:bg-brand-light transition-colors"
                                    >
                                        Login / Register
                                    </Link>
                                </div>
                            )}

                            {/* Sidebar Links */}
                            <div className="flex-1 overflow-y-auto p-4 py-6">
                                <ul className="flex flex-col gap-2">
                                    {sidebarLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link 
                                                href={link.path}
                                                onClick={() => setIsSidebarOpen(false)}
                                                className="flex items-center gap-4 px-4 py-3 rounded-xl text-[#3E2723] hover:bg-white hover:shadow-sm font-medium transition-all"
                                            >
                                                {link.icon && <link.icon size={20} className="text-[#8D6E63]" />}
                                                {!link.icon && <div className="w-5" />} {/* Spacer for alignment */}
                                                {link.name}
                                                
                                                {link.name === 'Keranjang' && cartCount > 0 && (
                                                    <span className="ml-auto bg-[#5D4037] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                                        {cartCount}
                                                    </span>
                                                )}
                                                {link.name === 'Wishlist' && wishlist.length > 0 && (
                                                    <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                                        {wishlist.length}
                                                    </span>
                                                )}
                                            </Link>
                                        </li>
                                    ))}
                                    
                                    {user && (
                                        <li>
                                            <Link 
                                                href="/profile"
                                                onClick={() => setIsSidebarOpen(false)}
                                                className="flex items-center gap-4 px-4 py-3 rounded-xl text-[#3E2723] hover:bg-white hover:shadow-sm font-medium transition-all"
                                            >
                                                <User size={20} className="text-[#8D6E63]" />
                                                Profil Saya
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>

                            {/* Sidebar Footer */}
                            {user && (
                                <div className="p-6 border-t border-[#D7CCC8]/50 bg-white">
                                    <button 
                                        onClick={() => setIsLogoutModalOpen(true)}
                                        className="w-full flex items-center justify-center gap-2 py-3 border-2 border-[#5D4037] text-[#5D4037] rounded-xl hover:bg-[#5D4037] hover:text-white transition-colors font-bold"
                                    >
                                        <LogOut size={18} />
                                        Logout
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            
            <LogoutModal 
                isOpen={isLogoutModalOpen} 
                onClose={() => setIsLogoutModalOpen(false)} 
                onConfirm={confirmLogout} 
            />
        </>
    );
}

export default Navbar;