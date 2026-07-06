export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#3E2723]">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Simple Stat Cards */}
        <div className="bg-white p-6 rounded-xl border border-[#D7CCC8] shadow-sm">
          <p className="text-sm font-medium text-gray-500 mb-1">Total Penjualan</p>
          <h3 className="text-2xl font-bold text-[#3E2723]">Rp 15.000.000</h3>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-[#D7CCC8] shadow-sm">
          <p className="text-sm font-medium text-gray-500 mb-1">Total Pesanan</p>
          <h3 className="text-2xl font-bold text-[#3E2723]">124</h3>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-[#D7CCC8] shadow-sm">
          <p className="text-sm font-medium text-gray-500 mb-1">Pelanggan Aktif</p>
          <h3 className="text-2xl font-bold text-[#3E2723]">89</h3>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-xl border border-[#D7CCC8] shadow-sm min-h-[400px]">
        <h2 className="text-xl font-bold text-[#3E2723] mb-4">Grafik Penjualan</h2>
        <div className="flex items-center justify-center h-[300px] bg-gray-50 rounded-lg border border-dashed border-gray-200">
          <p className="text-gray-400">Area grafik akan ditampilkan di sini</p>
        </div>
      </div>
    </div>
  );
}
