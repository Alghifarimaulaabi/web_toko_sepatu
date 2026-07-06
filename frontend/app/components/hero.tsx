"use client";

import Image from "next/image";
import { Search, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
      "
    >
      {/* Background Image & Overlay */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="/images/hero-1.png" 
          alt="Hero Background" 
          fill 
          className="object-cover object-center"
          priority
        />
        {/* Dynamic Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darkest/95 via-brand-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative max-w-md mb-10 group"
            >
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="text-brand group-focus-within:text-brand-dark transition-colors" size={20} />
              </div>
              <input 
                type="search" 
                placeholder="Cari sepatu favoritmu..." 
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 py-4 pl-12 pr-6 rounded-full outline-none focus:ring-4 focus:ring-brand-light/30 transition-all shadow-lg hover:bg-white/20 focus:bg-white/30" 
              />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] text-white mb-6 tracking-tight text-glow"
            >
              Langkah <span className="text-brand-light">Elegan,</span>
              <br />
              Gaya <span className="text-brand-light">Maksimal</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed max-w-lg font-sans"
            >
              Temukan koleksi sepatu premium yang memadukan desain modern, kenyamanan sempurna, dan kualitas tak tertandingi.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full bg-brand hover:bg-brand-dark px-8 py-4 font-bold text-white transition-all duration-300 shadow-lg shadow-brand/40 group font-display tracking-wide"
              >
                Belanja Sekarang
                <motion.div
                   animate={{ x: [0, 5, 0] }}
                   transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 font-bold text-white transition-all duration-300 font-display tracking-wide"
              >
                Lihat Katalog
              </motion.button>
            </motion.div>
          </div>

          {/* Right Floating Image (Stylistic) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:flex justify-end relative"
          >
            <div className="relative w-[400px] h-[500px]">
              {/* Decorative background shape */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-brand/30 rounded-full blur-3xl -z-10 transform translate-x-10 translate-y-10"
              />
              
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 group"
              >
                <Image 
                  src="/images/sepatu-1.jpeg" 
                  alt="Sepatu Premium" 
                  fill
                  className="object-cover group-hover:scale-110 transition duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darkest/90 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="glass p-5 rounded-2xl"
                  >
                    <p className="text-xs uppercase tracking-widest text-brand font-bold mb-1">New Arrival</p>
                    <p className="text-xl font-display font-black text-brand-darkest">Nike Premium X</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}