import Image from "next/image";
import { ShieldCheck, Truck, Clock } from "lucide-react";

export default function WhyUs() {
  return (
    <section className="py-20 bg-white" id="whyUs">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#3E2723] mb-6 leading-tight">
              Kenapa Memilih <br/>
              <span className="text-[#8D6E63]">Layanan Kami?</span>
            </h2>
            <p className="text-[#5D4037] text-lg mb-8 leading-relaxed">
              Kami berkomitmen untuk memberikan produk sepatu kualitas terbaik dengan layanan pelanggan yang tak tertandingi. Kepercayaan Anda adalah prioritas utama kami.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#EFECE7] flex items-center justify-center text-[#5D4037]">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3E2723] mb-2">Kualitas Terjamin</h3>
                  <p className="text-[#8D6E63]">Semua produk kami dijamin 100% original dan telah melewati quality control yang ketat.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#EFECE7] flex items-center justify-center text-[#5D4037]">
                  <Truck size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3E2723] mb-2">Pengiriman Cepat</h3>
                  <p className="text-[#8D6E63]">Bekerja sama dengan kurir terpercaya untuk memastikan pesanan Anda tiba tepat waktu.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#EFECE7] flex items-center justify-center text-[#5D4037]">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3E2723] mb-2">Layanan 24/7</h3>
                  <p className="text-[#8D6E63]">Tim support kami siap membantu Anda kapan saja melalui live chat atau email.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-[#4E342E]/20 group">
              <Image 
                src="/images/toko.jpg" 
                alt="Kenapa Memilih Kami" 
                fill 
                className="object-cover group-hover:scale-105 transition duration-700 ease-in-out"
              />
              {/* Overlay styling for extra premium feel */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3E2723]/40 to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#5D4037] flex items-center justify-center text-white font-bold text-lg">
                  5+
                </div>
                <div>
                  <p className="font-bold text-[#3E2723]">Tahun Pengalaman</p>
                  <p className="text-sm text-[#8D6E63]">Melayani Pelanggan</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
