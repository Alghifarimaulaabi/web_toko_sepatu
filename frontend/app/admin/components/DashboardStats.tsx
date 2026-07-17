"use client";
import { API_URL } from "@/lib/api";

import { useEffect, useState } from "react";

interface DashboardSummary {
  totalPenjualan: number;
  totalPesanan: number;
  pelangganAktif: number;
  totalUlasan: number;
}

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function DashboardStats() {
  const [data, setData] = useState<DashboardSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setIsLoading(false);
          return;
        }

        const response = await fetch(`${API_URL}/api/orders/admin/summary`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Gagal mengambil data");

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching dashboard summary:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSummary();
  }, []);

  const shimmer = (
    <div className="h-8 w-32 bg-gray-200 rounded-lg animate-pulse"></div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-xl border border-[#D7CCC8] shadow-sm">
        <p className="text-sm font-medium text-gray-500 mb-1">Total Penjualan</p>
        {isLoading ? shimmer : (
          <h3 className="text-2xl font-bold text-[#3E2723]">
            {data ? formatRupiah(data.totalPenjualan) : "Rp 0"}
          </h3>
        )}
      </div>

      <div className="bg-white p-6 rounded-xl border border-[#D7CCC8] shadow-sm">
        <p className="text-sm font-medium text-gray-500 mb-1">Total Pesanan</p>
        {isLoading ? shimmer : (
          <h3 className="text-2xl font-bold text-[#3E2723]">
            {data ? data.totalPesanan : 0}
          </h3>
        )}
      </div>

      <div className="bg-white p-6 rounded-xl border border-[#D7CCC8] shadow-sm">
        <p className="text-sm font-medium text-gray-500 mb-1">Pelanggan Aktif</p>
        {isLoading ? shimmer : (
          <h3 className="text-2xl font-bold text-[#3E2723]">
            {data ? data.pelangganAktif : 0}
          </h3>
        )}
      </div>

      <div className="bg-white p-6 rounded-xl border border-[#D7CCC8] shadow-sm">
        <p className="text-sm font-medium text-gray-500 mb-1">Total Ulasan</p>
        {isLoading ? shimmer : (
          <h3 className="text-2xl font-bold text-[#3E2723]">
            {data ? data.totalUlasan : 0}
          </h3>
        )}
      </div>
    </div>
  );
}
