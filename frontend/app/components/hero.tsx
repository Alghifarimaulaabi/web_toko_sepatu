"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Search, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useProductList } from "@/app/hooks/useProductList";
import RatingStars from "./RatingStars";

const SLIDES = [
  { id: 1, src: "/images/hero.jpeg", alt: "Koleksi Sepatu Premium 1" },
  { id: 2, src: "/images/slider1.jpg", alt: "Koleksi Sepatu Premium 2" },
  { id: 3, src: "/images/slider2.jpg", alt: "Koleksi Sepatu Premium 3" },
  { id: 4, src: "/images/slider3.jpg", alt: "Koleksi Sepatu Premium 4" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  const { allProducts, searchQuery, setSearchQuery, loading } = useProductList({ itemsPerPage: 100 });

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextSlide, 4000);
      return () => clearInterval(timer);
    }
  }, [isHovered, nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const handleDragEnd = (e: any, { offset }: any) => {
    const swipeThreshold = 50;
    if (offset.x < -swipeThreshold) {
      nextSlide();
    } else if (offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  return (
    <section
      className="relative w-full h-[100dvh] px-7 sm:h-[450px] md:h-[500px] lg:h-[700px] flex items-center justify-center overflow-hidden bg-brand-darkest"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-roledescription="carousel"
      aria-label="Hero Image Slider"
    >
      {/* Background Slider */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 h-full w-full cursor-grab active:cursor-grabbing"
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${currentIndex + 1} of ${SLIDES.length}`}
          >
            <Image
              src={SLIDES[currentIndex].src}
              alt={SLIDES[currentIndex].alt}
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority={currentIndex === 0}
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 z-20 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-light"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="md:w-8 md:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 z-20 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-light"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="md:w-8 md:h-8" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 md:bottom-10 z-20 flex gap-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-light ${
              index === currentIndex
                ? "bg-white w-8 md:w-10"
                : "bg-white/50 hover:bg-white/80 w-2.5 md:w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>

      {/* Hero Content (Centered) */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center pointer-events-none pt-12 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-md w-full mb-6 md:mb-10 pointer-events-auto z-50"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="text-white/60" size={20} />
            </div>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowResults(true);
              }}
              onFocus={() => setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 200)}
              placeholder="Cari sepatu favoritmu..."
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 py-3 md:py-4 pl-12 pr-6 rounded-full outline-none focus:ring-4 focus:ring-brand-light/30 transition-all shadow-lg hover:bg-white/20 focus:bg-white/30"
            />
          </div>
          
          {/* Floating Search Results */}
          <AnimatePresence>
            {showResults && searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[400px] overflow-y-auto z-50 text-left border border-gray-100"
              >
                {loading ? (
                  <div className="p-6 text-center text-gray-500 font-medium">Mencari...</div>
                ) : allProducts.length > 0 ? (
                  <div className="flex flex-col">
                    {allProducts.slice(0, 5).map((product) => (
                      <Link
                        key={product.id}
                        href={`/produk/${product.id}`}
                        className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                        onClick={() => setShowResults(false)}
                      >
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                          <Image
                            src={product.image.startsWith('http') ? product.image : `/images/${product.image}`}
                            alt={product.title}
                            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-900 truncate">{product.title}</h4>
                          <div className="flex items-center gap-1 mt-1">
                            <RatingStars rating={product.rating} size={14} />
                            <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                          </div>
                          <p className="font-bold text-brand mt-1">{product.price}</p>
                        </div>
                      </Link>
                    ))}
                    {allProducts.length > 5 && (
                      <Link href={`/produk-pilihan?search=${searchQuery}`} className="p-3 text-center text-sm font-bold text-brand hover:bg-brand/5 transition-colors border-t border-gray-100">
                        Lihat semua hasil ({allProducts.length})
                      </Link>
                    )}
                  </div>
                ) : (
                  <div className="p-6 text-center text-gray-500 font-medium">Tidak ada produk ditemukan</div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black leading-tight text-white mb-4 md:mb-6 tracking-tight text-glow drop-shadow-lg"
        >
          Langkah <span className="text-brand-light">Elegan,</span>
          <br />
          Gaya <span className="text-brand-light">Maksimal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/90 text-sm sm:text-base md:text-xl mb-8 md:mb-10 leading-relaxed max-w-2xl font-sans drop-shadow"
        >
          Temukan koleksi sepatu premium yang memadukan desain modern, kenyamanan sempurna, dan kualitas tak tertandingi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto w-full sm:w-auto"
        >

          <Link href="/produk-pilihan" className="w-full sm:w-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-full sm:w-auto gap-2 rounded-full bg-brand hover:bg-brand-dark px-6 py-3 md:px-8 md:py-4 font-bold text-white transition-all duration-300 shadow-lg shadow-brand/40 group font-display tracking-wide"
          >
            Belanja Sekarang
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
          </Link>

        <Link href="/produk-pilihan" className="w-full sm:w-auto">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 md:px-8 md:py-4 font-bold text-white transition-all duration-300 font-display tracking-wide"
          >
            Lihat Katalog
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}