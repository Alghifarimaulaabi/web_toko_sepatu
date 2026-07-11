"use client";
import { API_URL } from "@/lib/api";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartData {
  name: string;
  terjual: number;
}

export default function SalesChart() {
  const [data, setData] = useState<ChartData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Tidak ada token otentikasi");
          setIsLoading(false);
          return;
        }

        const response = await fetch(`${API_URL}/api/orders/admin/stats`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Gagal mengambil data statistik");
        }

        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || "Terjadi kesalahan");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[300px] bg-gray-50 rounded-lg border border-dashed border-gray-200">
        <div className="w-8 h-8 border-4 border-[#D7CCC8] border-t-[#5D4037] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[300px] bg-gray-50 rounded-lg border border-dashed border-gray-200">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-[300px] bg-gray-50 rounded-lg border border-dashed border-gray-200">
        <p className="text-gray-400">Belum ada data barang yang terjual</p>
      </div>
    );
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EFECE7" />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#8D6E63', fontSize: 12 }}
            dy={10}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#8D6E63', fontSize: 12 }}
            dx={-10}
          />
          <Tooltip
            cursor={{ fill: '#F9F7F5' }}
            contentStyle={{ 
              backgroundColor: '#fff', 
              borderRadius: '12px',
              border: '1px solid #D7CCC8',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
          />
          <Bar 
            dataKey="terjual" 
            name="Terjual"
            fill="#5D4037" 
            radius={[4, 4, 0, 0]}
            barSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
