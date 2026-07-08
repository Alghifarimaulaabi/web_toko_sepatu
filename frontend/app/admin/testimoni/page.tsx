"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Star, 
  Search, 
  ChevronRight,
  Loader2,
  MessageSquare,
  StarHalf
} from 'lucide-react';
import { getAdminTestimoni, AdminTestimoniProduct } from '../../services/testimoniService';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function AdminTestimoni() {
  const [products, setProducts] = useState<AdminTestimoniProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    fetchData();
  }, [currentPage, search]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getAdminTestimoni(currentPage, 10, search || undefined);
      setProducts(data.products);
      setTotalPages(data.pagination.totalPages);
      setTotalItems(data.pagination.total);
    } catch (error: any) {
      console.error('Error fetching testimoni:', error);
      alert(error.message || 'Gagal mengambil data testimoni');
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    return (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} size={16} className="fill-[#FFB300] text-[#FFB300]" />
        ))}
        {hasHalf && <StarHalf size={16} className="fill-[#FFB300] text-[#FFB300]" />}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`empty-${i}`} size={16} className="text-gray-300" />
        ))}
        <span className="ml-1 text-sm font-medium text-[#3E2723]">{rating.toFixed(1)}</span>
      </div>
    );
  };

  if (loading && currentPage === 1) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="animate-spin text-[#5D4037]" size={48} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#3E2723] flex items-center gap-3">
            <MessageSquare className="text-[#5D4037]" size={28} />
            Manajemen Ulasan
          </h1>
          <p className="text-[#8D6E63] mt-1">
            {totalItems > 0 ? `${totalItems} produk memiliki ulasan` : 'Belum ada ulasan'}
          </p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8D6E63]" size={18} />
          <input
            type="text"
            placeholder="Cari produk..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full md:w-64 pl-10 pr-4 py-2 rounded-full border border-[#D7CCC8] bg-white focus:outline-none focus:ring-2 focus:ring-[#5D4037]/40 text-[#3E2723] placeholder:text-[#8D6E63]/60"
          />
        </div>
      </div>

      {/* Products List */}
      {loading && currentPage > 1 ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="animate-spin text-[#5D4037]" size={48} />
        </div>
      ) : products.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-[#D7CCC8]/50">
          <MessageSquare className="mx-auto text-[#D7CCC8] mb-4" size={64} />
          <h3 className="text-xl font-bold text-[#3E2723] mb-2">Belum Ada Ulasan</h3>
          <p className="text-[#8D6E63]">
            {search ? 'Tidak ada produk dengan kata kunci tersebut' : 'Belum ada produk yang mendapatkan ulasan'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/admin/testimoni/${product.id}`}
              className="bg-white rounded-2xl p-4 shadow-sm border border-[#D7CCC8]/50 hover:shadow-md transition group"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#F5F5F5] flex-shrink-0">
                  <Image
                    src={product.gambar.startsWith('http') ? product.gambar : `${API_URL}${product.gambar}`}
                    alt={product.nama_produk}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#3E2723] line-clamp-1 group-hover:text-[#5D4037] transition">
                    {product.nama_produk}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    {renderStars(product.averageRating)}
                    <span className="text-xs text-[#8D6E63]">
                      ({product.totalReviews} ulasan)
                    </span>
                  </div>
                </div>
                <ChevronRight className="text-[#8D6E63] group-hover:text-[#5D4037] transition" size={20} />
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-full border border-[#D7CCC8] bg-white hover:bg-[#F5F0EB] transition disabled:opacity-50 disabled:cursor-not-allowed text-[#5D4037]"
          >
            Sebelumnya
          </button>
          <span className="text-[#5D4037]">
            Halaman {currentPage} dari {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-full border border-[#D7CCC8] bg-white hover:bg-[#F5F0EB] transition disabled:opacity-50 disabled:cursor-not-allowed text-[#5D4037]"
          >
            Selanjutnya
          </button>
        </div>
      )}
    </div>
  );
}