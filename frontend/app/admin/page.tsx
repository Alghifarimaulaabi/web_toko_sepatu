import Link from 'next/link';
import { Package, ShoppingBag, Users, MessageSquare, ChevronRight } from 'lucide-react';
import SalesChart from './SalesChart';
import DashboardStats from './DashboardStats';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#3E2723]">Dashboard Overview</h1>
      
      <DashboardStats />
      
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {/* Grafik Penjualan */}
        <div className="bg-white p-6 rounded-xl border border-[#D7CCC8] shadow-sm min-h-[300px]">
          <h2 className="text-xl font-bold text-[#3E2723] mb-4">Grafik Penjualan</h2>
          <SalesChart />
        </div>

        {/* Menu Manajemen */}
        <div className="bg-white p-6 rounded-xl border border-[#D7CCC8] shadow-sm">
          <h2 className="text-xl font-bold text-[#3E2723] mb-4">Menu Manajemen</h2>
          <div className="space-y-3">
            <Link
              href="/admin/testimoni"
              className="flex items-center gap-3 p-3 bg-[#F9F7F5] rounded-xl hover:bg-[#EFECE7] transition group"
            >
              <div className="w-10 h-10 bg-[#5D4037]/10 rounded-full flex items-center justify-center">
                <MessageSquare className="text-[#5D4037]" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#3E2723]">Manajemen Ulasan</h3>
                <p className="text-xs text-[#8D6E63]">Kelola ulasan produk dari pembeli</p>
              </div>
              <ChevronRight className="text-[#8D6E63] group-hover:text-[#5D4037] transition" size={20} />
            </Link>

            <Link
              href="/admin/orders"
              className="flex items-center gap-3 p-3 bg-[#F9F7F5] rounded-xl hover:bg-[#EFECE7] transition group"
            >
              <div className="w-10 h-10 bg-[#5D4037]/10 rounded-full flex items-center justify-center">
                <ShoppingBag className="text-[#5D4037]" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#3E2723]">Manajemen Pesanan</h3>
                <p className="text-xs text-[#8D6E63]">Kelola semua pesanan pelanggan</p>
              </div>
              <ChevronRight className="text-[#8D6E63] group-hover:text-[#5D4037] transition" size={20} />
            </Link>

            <Link
              href="/admin/products"
              className="flex items-center gap-3 p-3 bg-[#F9F7F5] rounded-xl hover:bg-[#EFECE7] transition group"
            >
              <div className="w-10 h-10 bg-[#5D4037]/10 rounded-full flex items-center justify-center">
                <Package className="text-[#5D4037]" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#3E2723]">Manajemen Produk</h3>
                <p className="text-xs text-[#8D6E63]">Kelola produk yang dijual</p>
              </div>
              <ChevronRight className="text-[#8D6E63] group-hover:text-[#5D4037] transition" size={20} />
            </Link>

            <Link
              href="/admin/users"
              className="flex items-center gap-3 p-3 bg-[#F9F7F5] rounded-xl hover:bg-[#EFECE7] transition group"
            >
              <div className="w-10 h-10 bg-[#5D4037]/10 rounded-full flex items-center justify-center">
                <Users className="text-[#5D4037]" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#3E2723]">Manajemen Pengguna</h3>
                <p className="text-xs text-[#8D6E63]">Kelola data pelanggan</p>
              </div>
              <ChevronRight className="text-[#8D6E63] group-hover:text-[#5D4037] transition" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}