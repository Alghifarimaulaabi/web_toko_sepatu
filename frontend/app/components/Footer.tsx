import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2D1B15] text-[#D7CCC8] pt-16 pb-8 border-t-[6px] border-[#8D6E63]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white mb-6">Shoes Center</h3>
            <p className="leading-relaxed">
              Kami adalah toko sepatu terpercaya yang menyediakan berbagai pilihan sepatu original dengan kualitas terbaik dan harga yang kompetitif.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-[#4E342E] flex items-center justify-center hover:bg-[#8D6E63] hover:text-white transition duration-300 font-bold text-lg">
                F
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#4E342E] flex items-center justify-center hover:bg-[#8D6E63] hover:text-white transition duration-300 font-bold text-lg">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#4E342E] flex items-center justify-center hover:bg-[#8D6E63] hover:text-white transition duration-300 font-bold text-lg">
                X
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-white transition flex items-center gap-2 group">
                  <span className="w-2 h-2 rounded-full bg-[#8D6E63] group-hover:bg-white transition"></span>
                  Beranda
                </Link>
              </li>
              <li>
                <a href="#whyUs" className="hover:text-white transition flex items-center gap-2 group">
                  <span className="w-2 h-2 rounded-full bg-[#8D6E63] group-hover:bg-white transition"></span>
                  Tentang Kami
                </a>
              </li>
              <li>
                <Link href="/produk-pilihan" className="hover:text-white transition flex items-center gap-2 group">
                  <span className="w-2 h-2 rounded-full bg-[#8D6E63] group-hover:bg-white transition"></span>
                  Katalog Produk
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#8D6E63] shrink-0 mt-1" size={20} />
                <span>Jl. Barunagri No. 123, Bandung Barat, 12190</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#8D6E63] shrink-0" size={20} />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#8D6E63] shrink-0" size={20} />
                <span>support@ShoesCenter.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#4E342E] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} ShoesCenter. Hak Cipta Dilindungi.</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Privasi</span>
            <span className="hover:text-white cursor-pointer">Ketentuan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
