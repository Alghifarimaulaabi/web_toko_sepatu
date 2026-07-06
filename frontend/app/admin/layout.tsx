"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  MessageSquare, 
  LogOut 
} from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if user is admin
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        if (user.role !== "ADMIN") {
          toast.error("Anda tidak memiliki akses ke halaman ini");
          router.push("/");
        } else {
          setIsAdmin(true);
        }
      } catch (error) {
        router.push("/auth/login");
      }
    } else {
      router.push("/auth/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("user-auth-change"));
    toast.success("Berhasil logout dari Admin");
    router.push("/auth/login");
  };

  if (!isAdmin) return <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center">Loading...</div>;

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Produk", href: "/admin/produk", icon: Package },
    { name: "Pengguna", href: "/admin/pengguna", icon: Users },
    { name: "Testimoni", href: "/admin/testimoni", icon: MessageSquare },
  ];

  return (
    <div className="flex min-h-screen bg-[#FDFBF7] text-[#1A1513]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-[#D7CCC8] shadow-sm flex flex-col">
        <div className="p-6 border-b border-[#D7CCC8]">
          <h2 className="text-2xl font-black tracking-tighter text-[#3E2723]">
            ADMIN<span className="text-[#8D6E63]">PANEL</span>
          </h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive 
                    ? "bg-[#5D4037] text-white shadow-md shadow-[#5D4037]/20" 
                    : "text-[#5D4037] hover:bg-[#EFECE7]"
                }`}
              >
                <Icon size={20} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[#D7CCC8]">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
