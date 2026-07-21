import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ShoppingCart, Heart, History } from "lucide-react";

export const useNavbar = () => {
    const [user, setUser] = useState<{ nama: string; email: string; foto?: string } | null>(null);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const loadUser = () => {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                try {
                    setUser(JSON.parse(storedUser));
                } catch (error) {
                    console.error("Failed to parse user data", error);
                }
            } else {
                setUser(null);
            }
        };

        loadUser();
        
        const handleAuthChange = () => {
            loadUser();
        };

        window.addEventListener("user-auth-change", handleAuthChange);
        
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("user-auth-change", handleAuthChange);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const confirmLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        window.dispatchEvent(new Event("user-auth-change"));
        setIsLogoutModalOpen(false);
        setIsSidebarOpen(false);
        toast.success("Berhasil logout");
        router.push("/");
    };

    useEffect(() => {
        setIsSidebarOpen(false);
    }, [router]);

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isSidebarOpen]);

    const navLinks = [
        { name: 'Beranda', path: '/' },
        { name: 'Produk Pilihan', path: '/produk-pilihan' },
        { name: 'Sedang Tren', path: '/#Trending' },
        { name: 'Kenapa Kami', path: '/#whyUs' }
    ];

    const sidebarLinks = [
        { name: 'Beranda', path: '/' },
        { name: 'Semua Produk', path: '/produk-pilihan' },
        { name: 'Keranjang', path: '/keranjang', icon: ShoppingCart },
        { name: 'Wishlist', path: '/wishlist', icon: Heart },
        { name: 'Riwayat Pesanan', path: '/riwayat', icon: History }
    ];

    return {
        user,
        isLogoutModalOpen,
        setIsLogoutModalOpen,
        scrolled,
        isSidebarOpen,
        setIsSidebarOpen,
        confirmLogout,
        navLinks,
        sidebarLinks
    };
};
