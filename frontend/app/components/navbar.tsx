import Link from "next/link";
import { ShoppingBag, User, Menu } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full bg-[#3E2723]/95 backdrop-blur-md border-b border-[#5D4037] shadow-sm transition-all duration-300">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center text-[#EFECE7]">
                
                {/* Logo */}
                <div className="logo flex-shrink-0">
                    <Link href="/">
                        <h3 className="text-2xl font-black tracking-tighter text-white">
                            LOGO<span className="text-[#D7CCC8]">WEBSITE</span>
                        </h3>
                    </Link>
                </div>
                
                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-8 font-medium text-[15px]">
                    <li>
                        <Link href="#" className="hover:text-white transition relative group py-2">
                            Beranda
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D7CCC8] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white transition relative group py-2">
                            Produk Pilihan
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D7CCC8] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white transition relative group py-2">
                            Kenapa Kami
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D7CCC8] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                </ul>

                {/* Actions */}
                <div className="flex items-center gap-5">
                    <Link href="/login">
                    <button className="hidden md:flex items-center justify-center transition w-[100px] rounded-xl bg-white text-[#1b191a] cursor-pointer p-2">
                        Login
                    </button>
                    </Link>
                </div>
                
            </div>
        </nav>
    );
}

export default Navbar;