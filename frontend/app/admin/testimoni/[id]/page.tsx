"use client";

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  Star, 
  ArrowLeft, 
  Loader2,
  Trash2,
  AlertTriangle,
  User,
  Calendar,
  Package
} from 'lucide-react';
import { getAdminTestimoniByProduk, deleteTestimoni, Testimoni } from '../../../services/testimoniService';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function AdminTestimoniDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [testimonis, setTestimonis] = useState<Testimoni[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<number | null>(null);
  const [productName, setProductName] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getAdminTestimoniByProduk(Number(id));
      setTestimonis(data.testimonis);
      if (data.testimonis.length > 0) {
        // Get product name from first testimoni's produk relation
        // Note: You might need to modify the backend to include produk name
        setProductName(`Produk #${id}`);
      }
    } catch (error: any) {
      console.error('Error fetching testimoni detail:', error);
      alert(error.message || 'Gagal mengambil detail ulasan');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (testimoniId: number) => {
    try {
      setDeletingId(testimoniId);
      await deleteTestimoni(testimoniId);
      setTestimonis(prev => prev.filter(t => t.id !== testimoniId));
      setShowDeleteModal(null);
    } catch (error: any) {
      alert(error.message || 'Gagal menghapus ulasan');
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="animate-spin text-[#5D4037]" size={48} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Link
        href="/admin/testimoni"
        className="inline-flex items-center gap-2 text-[#8D6E63] hover:text-[#5D4037] font-semibold transition group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Kembali ke Daftar Ulasan
      </Link>

      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#D7CCC8]/50">
        <h1 className="text-2xl font-bold text-[#3E2723] flex items-center gap-3">
          <Package className="text-[#5D4037]" size={28} />
          Detail Ulasan Produk
        </h1>
        <p className="text-[#8D6E63] mt-1">
          {testimonis.length > 0 
            ? `${testimonis.length} ulasan untuk produk ini` 
            : 'Belum ada ulasan untuk produk ini'}
        </p>
      </div>

      {/* Testimonis List */}
      {testimonis.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-[#D7CCC8]/50">
          <Star className="mx-auto text-[#D7CCC8] mb-4" size={64} />
          <h3 className="text-xl font-bold text-[#3E2723] mb-2">Belum Ada Ulasan</h3>
          <p className="text-[#8D6E63]">Produk ini belum mendapatkan ulasan dari pembeli</p>
        </div>
      ) : (
        <div className="space-y-4">
          {testimonis.map((testimoni) => (
            <div
              key={testimoni.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#D7CCC8]/50"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* User Info */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                    {testimoni.user?.foto ? (
                      <Image
                        src={testimoni.user.foto}
                        alt={testimoni.user.nama}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <User className="text-[#8D6E63]" size={24} />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3E2723]">
                      {testimoni.user?.nama || testimoni.nama}
                    </h3>
                    <p className="text-xs text-[#8D6E63]">
                      {testimoni.user?.email || 'Email tidak tersedia'}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < testimoni.rating ? 'fill-[#FFB300] text-[#FFB300]' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-[#8D6E63]">
                        {testimoni.rating}/5
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 md:flex-col md:items-end">
                  <span className="text-xs text-[#8D6E63] flex items-center gap-1">
                    <Calendar size={12} />
                    {formatDate(testimoni.created_at)}
                  </span>
                  <button
                    onClick={() => setShowDeleteModal(testimoni.id)}
                    className="text-red-500 hover:text-red-700 transition p-2 hover:bg-red-50 rounded-full"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              {/* Komentar */}
              <div className="mt-4 p-4 bg-[#F9F7F5] rounded-xl">
                <p className="text-[#3E2723] leading-relaxed">{testimoni.komentar}</p>
              </div>

              {/* Order Info */}
              {testimoni.pesanan && (
                <div className="mt-3 text-xs text-[#8D6E63] flex items-center gap-2">
                  <Package size={14} />
                  Pesanan: {testimoni.pesanan.kode_pesanan}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl">
            <div className="flex items-center gap-3 text-red-500 mb-4">
              <AlertTriangle size={28} />
              <h3 className="text-xl font-bold">Hapus Ulasan</h3>
            </div>
            <p className="text-[#5D4037] mb-6">
              Apakah Anda yakin ingin menghapus ulasan ini? Tindakan ini tidak dapat dibatalkan.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(null)}
                className="flex-1 px-4 py-2 rounded-full border border-[#D7CCC8] text-[#5D4037] hover:bg-[#F5F0EB] transition font-medium"
              >
                Batal
              </button>
              <button
                onClick={() => handleDelete(showDeleteModal)}
                disabled={deletingId === showDeleteModal}
                className="flex-1 px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {deletingId === showDeleteModal ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Menghapus...
                  </>
                ) : (
                  'Hapus'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}