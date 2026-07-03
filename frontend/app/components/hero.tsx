import Image from "next/image";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        min-h-[500px]
        bg-[url('/images/hero-1.png')]
        bg-cover
        bg-center
        bg-no-repeat
        flex
        items-center
      "
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          
          {/* Kiri */}
          <div>
            <div className="search">
                <Search color="#000" className="relative top-8 left-1.5" />
            <input type="search" placeholder="Cari Produk" className="w-[300px] p-2 rounded-2xl pl-10 bg-white" />
            </div>

            <h1 className="mt-4 text-5xl font-bold leading-tight text-white">
              Sepatu Berkualitas
              <br />
              Harga Terjangkau
            </h1>

            <p className="mt-6 text-gray-300 text-lg">
              Temukan berbagai pilihan sepatu original dengan desain modern,
              nyaman digunakan, dan cocok untuk aktivitas sehari-hari.
            </p>

            <button className="mt-8 rounded-lg bg-amber-600 px-8 py-3 font-semibold text-white transition hover:bg-amber-700">
              Belanja Sekarang
            </button>
          </div>

          {/* Kanan */}
          <div className="flex justify-center">
            <div className="gambar w-[300px] h-[300px] bg-[url('/images/sepatu-1.jpeg')]
        bg-cover
        bg-center
        bg-no-repeat
        rounded-xl hover:scale-110 transition duration-200  cursor-pointer"></div>
          </div>

        </div>
      </div>
    </section>
  );
}