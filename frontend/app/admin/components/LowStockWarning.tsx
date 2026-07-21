'use client';

import { useState, useEffect } from 'react';
import { API_URL } from '@/lib/api';
import { AlertTriangle, Package } from 'lucide-react';
import Image from 'next/image';

interface LowStockVariant {
  id: number;
  produk_id: number;
  warna: string;
  ukuran: string;
  stok: number;
  gambar: string | null;
  produk: {
    nama_produk: string;
    gambar: string;
  };
}

export default function LowStockWarning() {
  const [lowStockItems, setLowStockItems] = useState<LowStockVariant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLowStock = async () => {
      try {
        const response = await fetch(`${API_URL}/api/products/low-stock`, {
          cache: 'no-store'
        });
        if (response.ok) {
          const data = await response.json();
          setLowStockItems(data);
        }
      } catch (error) {
        console.error('Error fetching low stock:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLowStock();
  }, []);

  if (loading) {
    return <div className="p-4 bg-white rounded-xl border border-[#D7CCC8] shadow-sm animate-pulse h-64 mt-6"></div>;
  }

  if (lowStockItems.length === 0) {
    return null; // Don't show anything if no low stock items
  }

  return (
    <div className="bg-red-50 p-6 rounded-xl border border-red-200 shadow-sm mt-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600">
          <AlertTriangle size={20} />
        </div>
        <h2 className="text-xl font-bold text-red-800">Peringatan Stok Hampir Habis</h2>
      </div>

      <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
        {lowStockItems.map((item) => {
          const imgSrc = item.gambar || item.produk.gambar;
          const fullImgSrc = imgSrc.startsWith('http') ? imgSrc : `${API_URL}/${imgSrc.replace(/\\/g, '/')}`;

          return (
            <div key={item.id} className="flex items-center gap-4 p-3 bg-white rounded-lg border border-red-100 shadow-sm">
              <div className="relative w-12 h-12 rounded bg-gray-100 flex-shrink-0">
                <Image 
                  src={fullImgSrc} 
                  alt={item.produk.nama_produk}
                  fill sizes="48px"
                  className="object-cover rounded"
                  unoptimized
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-800 text-sm truncate">{item.produk.nama_produk}</h3>
                <p className="text-xs text-gray-500">
                  Warna: {item.warna}, Ukuran: {item.ukuran}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs font-semibold text-gray-500 uppercase">Sisa Stok</span>
                <span className="text-lg font-bold text-red-600">{item.stok}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
