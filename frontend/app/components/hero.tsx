import Image from "next/image";
import { Search, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[600px]
        flex
        items-center
        overflow-hidden
      "
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-1.png" 
          alt="Hero Background" 
          fill 
          className="object-cover object-center"
          priority
        />
        {/* Dark brown gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D1B15]/90 via-[#3E2723]/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 pt-10">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Search Bar */}
            <div className="relative max-w-md mb-10 group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="text-[#8D6E63] group-focus-within:text-[#5D4037] transition-colors" size={20} />
              </div>
              <input 
                type="search" 
                placeholder="Cari sepatu favoritmu..." 
                className="w-full bg-white/95 backdrop-blur-sm text-[#3E2723] placeholder:text-[#8D6E63] py-4 pl-12 pr-6 rounded-full outline-none focus:ring-4 focus:ring-[#8D6E63]/30 transition-all shadow-lg" 
              />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-white mb-6 tracking-tight">
              Langkah <span className="text-[#D7CCC8]">Elegan,</span>
              <br />
              Gaya <span className="text-[#D7CCC8]">Maksimal</span>
            </h1>

            <p className="text-[#EFECE7] text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
              Temukan koleksi sepatu premium yang memadukan desain modern, kenyamanan sempurna, dan kualitas tak tertandingi.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 rounded-full bg-[#8D6E63] hover:bg-[#5D4037] px-8 py-4 font-bold text-white transition-all duration-300 shadow-lg shadow-[#8D6E63]/30 group">
                Belanja Sekarang
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="rounded-full border-2 border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 backdrop-blur-sm px-8 py-4 font-bold text-white transition-all duration-300">
                Lihat Katalog
              </button>
            </div>
          </div>

          {/* Right Floating Image (Optional/Stylistic) */}
          <div className="hidden lg:flex justify-end relative">
            <div className="relative w-[400px] h-[450px]">
              {/* Decorative background shape */}
              <div className="absolute inset-0 bg-[#8D6E63]/20 rounded-full blur-3xl -z-10 transform translate-x-10 translate-y-10"></div>
              
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-black/40 group border-4 border-white/10">
                <Image 
                  src="/images/sepatu-1.jpeg" 
                  alt="Sepatu Premium" 
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg">
                    <p className="text-sm text-[#8D6E63] font-bold mb-1">New Arrival</p>
                    <p className="text-lg font-black text-[#3E2723]">Nike White Blue Premium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}