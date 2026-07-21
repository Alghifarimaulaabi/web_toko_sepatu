import Link from 'next/link';
import { Package, ShoppingBag, Users, MessageSquare, ChevronRight } from 'lucide-react';
import SalesChart from './components/SalesChart';
import DashboardStats from './components/DashboardStats';
import LowStockWarning from './components/LowStockWarning';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#3E2723]">Dashboard Overview</h1>
      
      <DashboardStats />

      <LowStockWarning />
      
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-6">
        {/* Grafik Penjualan */}
        <div className="bg-white p-6 rounded-xl border border-[#D7CCC8] shadow-sm min-h-[300px]">
          <h2 className="text-xl font-bold text-[#3E2723] mb-4">Grafik Penjualan</h2>
          <SalesChart />
        </div>
      </div>
    </div>
  );
}