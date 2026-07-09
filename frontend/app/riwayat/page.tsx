"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Package, 
  Clock, 
  Truck, 
  CheckCircle, 
  XCircle,
  ChevronDown,
  ChevronRight,
  Calendar,
  ShoppingBag,
  Loader2,
  Star,
  MessageSquare
} from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { getOrders, Order } from '../services/orderService';
import { formatRupiah } from '../context/CartContext';
import TestimoniForm from '../components/TestimoniForm';
import { checkUserReview } from '../services/testimoniService';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const STATUS_MAP = {
  PENDING: { label: 'Menunggu Pembayaran', icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-100' },
  PROCESSING: { label: 'Dikemas', icon: Package, color: 'text-blue-600', bg: 'bg-blue-100' },
  SHIPPED: { label: 'Dikirim', icon: Truck, color: 'text-purple-600', bg: 'bg-purple-100' },
  DELIVERED: { label: 'Diterima', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100' },
  CANCELLED: { label: 'Dibatalkan', icon: XCircle, color: 'text-red-600', bg: 'bg-red-100' }
};

const STATUS_OPTIONS = [
  { value: 'all', label: 'Semua Pesanan' },
  { value: 'PENDING', label: 'Menunggu Pembayaran' },
  { value: 'PROCESSING', label: 'Dikemas' },
  { value: 'SHIPPED', label: 'Dikirim' },
  { value: 'DELIVERED', label: 'Diterima' },
  { value: 'CANCELLED', label: 'Dibatalkan' }
];

export default function RiwayatPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalOrders, setTotalOrders] = useState(0);
  const [expandedOrder, setExpandedOrder] = useState<number | null>(null);
  const [showReviewForm, setShowReviewForm] = useState<{
    pesananId: number;
    produkId: number;
    produkNama: string;
    produkGambar: string;
  } | null>(null);
  const [reviewedItems, setReviewedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchOrders();
  }, [currentPage, selectedStatus]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const data = await getOrders(currentPage, 10, selectedStatus);
      setOrders(data.orders);
      setTotalPages(data.pagination.totalPages);
      setTotalOrders(data.pagination.total);
      
      // Check review status for delivered orders
      const deliveredOrders = data.orders.filter(o => o.status === 'DELIVERED');
      for (const order of deliveredOrders) {
        for (const item of order.items) {
          await checkReviewStatus(order.id, item.id);
        }
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      alert('Gagal mengambil riwayat pesanan. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  const checkReviewStatus = async (pesananId: number, produkId: number) => {
    const key = `${pesananId}-${produkId}`;
    if (reviewedItems.has(key)) return true;
    
    try {
      const result = await checkUserReview(pesananId, produkId);
      if (result.reviewed) {
        setReviewedItems(prev => new Set(prev).add(key));
      }
      return result.reviewed;
    } catch {
      return false;
    }
  };

  const toggleExpand = (orderId: number) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const getStatusInfo = (status: string) => {
    return STATUS_MAP[status as keyof typeof STATUS_MAP] || STATUS_MAP.PENDING;
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

  return (
    <main className="min-h-screen bg-[#EFECE7] font-sans">
      <Navbar />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-2 flex items-center gap-3">
              <ShoppingBag className="text-[#5D4037]" size={32} />
              Riwayat Pembelian
            </h1>
            <p className="text-[#8D6E63]">
              {totalOrders > 0 
                ? `Anda memiliki ${totalOrders} pesanan` 
                : 'Belum ada pesanan'}
            </p>
          </div>

          {/* Filter Status */}
          <div className="mb-8 flex flex-wrap gap-2">
            {STATUS_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  setSelectedStatus(option.value);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
                  selectedStatus === option.value
                    ? 'bg-[#5D4037] text-white border-[#5D4037]'
                    : 'bg-white text-[#5D4037] border-[#D7CCC8] hover:bg-[#F5F0EB]'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Orders List */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="animate-spin text-[#5D4037]" size={48} />
            </div>
          ) : orders.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-[#D7CCC8]/50">
              <Package className="mx-auto text-[#D7CCC8] mb-4" size={64} />
              <h3 className="text-xl font-bold text-[#3E2723] mb-2">Belum Ada Pesanan</h3>
              <p className="text-[#8D6E63] mb-6">
                {selectedStatus === 'all' 
                  ? 'Kamu belum melakukan pemesanan apapun' 
                  : `Tidak ada pesanan dengan status ${getStatusInfo(selectedStatus).label}`}
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#5D4037] text-white px-6 py-3 rounded-full hover:bg-[#3E2723] transition font-medium"
              >
                Mulai Belanja
                <ChevronRight size={18} />
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order, index) => {
                const StatusIcon = getStatusInfo(order.status).icon;
                const statusInfo = getStatusInfo(order.status);
                
                return (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-2xl shadow-sm border border-[#D7CCC8]/50 overflow-hidden"
                  >
                    {/* Order Header */}
                    <div 
                      className="p-4 md:p-6 cursor-pointer hover:bg-[#F9F7F5] transition"
                      onClick={() => toggleExpand(order.id)}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full ${statusInfo.bg} flex items-center justify-center flex-shrink-0`}>
                            <StatusIcon className={statusInfo.color} size={24} />
                          </div>
                          <div>
                            <div className="font-bold text-[#3E2723] text-sm md:text-base">
                              {order.kode_pesanan}
                            </div>
                            <div className="text-xs md:text-sm text-[#8D6E63] flex items-center gap-2">
                              <Calendar size={14} />
                              {formatDate(order.tanggal_pesanan)}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 md:gap-6 ml-16 md:ml-0">
                          <div className="text-right">
                            <div className="text-sm text-[#8D6E63]">Total</div>
                            <div className="font-bold text-[#3E2723]">
                              {formatRupiah(order.total_harga)}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-[#8D6E63]">Status</div>
                            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${statusInfo.bg} ${statusInfo.color}`}>
                              <StatusIcon size={14} />
                              {statusInfo.label}
                            </span>
                          </div>
                          <button className="text-[#8D6E63] hover:text-[#5D4037] transition p-2">
                            <ChevronDown 
                              size={20} 
                              className={`transition-transform duration-300 ${
                                expandedOrder === order.id ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Order Detail - Expanded */}
                    {expandedOrder === order.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-[#D7CCC8]/30"
                      >
                        <div className="p-4 md:p-6 space-y-4">
                          {/* Order Items */}
                          <div>
                            <h4 className="text-sm font-semibold text-[#5D4037] mb-3 flex items-center gap-2">
                              <Package size={16} />
                              Produk yang dipesan
                            </h4>
                            <div className="space-y-3">
                              {order.items.map((item) => {
                                const isReviewed = reviewedItems.has(`${order.id}-${item.id}`);
                                return (
                                  <div key={item.id} className="flex flex-col gap-2">
                                    <div className="flex gap-4 items-center">
                                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#F5F5F5] flex-shrink-0">
                                        <Image
                                          src={item.gambar.startsWith('http') ? item.gambar : `${API_URL}${item.gambar}`}
                                          alt={item.nama_produk}
                                          fill
                                          unoptimized
                                          className="object-cover"
                                        />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="font-medium text-[#3E2723] text-sm line-clamp-1">
                                          {item.nama_produk}
                                        </div>
                                        <div className="text-xs text-[#8D6E63]">
                                          {item.jumlah} x {formatRupiah(item.harga)}
                                        </div>
                                      </div>
                                      <div className="font-bold text-[#3E2723] text-sm">
                                        {formatRupiah(item.subtotal)}
                                      </div>
                                    </div>
                                    
                                    {/* Review Button - Only for DELIVERED orders */}
                                    {order.status === 'DELIVERED' && (
                                      <div className="flex justify-end">
                                        {!isReviewed ? (
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setShowReviewForm({
                                                pesananId: order.id,
                                                produkId: item.id,
                                                produkNama: item.nama_produk,
                                                produkGambar: item.gambar.startsWith('http') ? item.gambar : `${API_URL}${item.gambar}`
                                              });
                                            }}
                                            className="text-xs flex items-center gap-1 text-[#5D4037] hover:text-[#3E2723] font-medium transition px-3 py-1.5 border border-[#5D4037]/30 rounded-full hover:bg-[#5D4037"
                                          >
                                            <MessageSquare size={14} />
                                            Beri Ulasan
                                          </button>
                                        ) : (
                                          <span className="text-xs flex items-center gap-1 text-green-600 px-3 py-1.5 bg-green-50 rounded-full">
                                            <Star size={14} className="fill-green-600 text-green-600" />
                                            Sudah diulas
                                          </span>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Shipping Address */}
                          <div>
                            <h4 className="text-sm font-semibold text-[#5D4037] mb-2">
                              Alamat Pengiriman
                            </h4>
                            <div className="bg-[#F9F7F5] rounded-xl p-4 text-sm text-[#5D4037]">
                              <p className="font-medium">{order.alamat.nama_penerima}</p>
                              <p>{order.alamat.alamat}</p>
                              <p>{order.alamat.kota}, {order.alamat.provinsi}</p>
                              <p>Kode Pos: {order.alamat.kode_pos}</p>
                              <p>Telp: {order.alamat.no_hp}</p>
                              {order.alamat.catatan && (
                                <p className="mt-2 text-[#8D6E63] text-xs">
                                  Catatan: {order.alamat.catatan}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Payment Method */}
                          <div className="flex justify-between items-center pt-2 border-t border-[#D7CCC8]/30">
                            <div>
                              <span className="text-sm text-[#8D6E63]">Metode Pembayaran</span>
                              <p className="font-medium text-[#3E2723]">
                                {order.metode_pembayaran === 'midtrans' ? 'Midtrans' : 'COD'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 pt-6">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-full border border-[#D7CCC8] bg-white hover:bg-[#F5F0EB] transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Sebelumnya
                  </button>
                  <span className="text-[#5D4037]">
                    Halaman {currentPage} dari {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-full border border-[#D7CCC8] bg-white hover:bg-[#F5F0EB] transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Selanjutnya
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />

      {/* Review Form Modal */}
      {showReviewForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg">
            <TestimoniForm
              pesananId={showReviewForm.pesananId}
              produkId={showReviewForm.produkId}
              produkNama={showReviewForm.produkNama}
              produkGambar={showReviewForm.produkGambar}
              onSuccess={() => {
                setShowReviewForm(null);
                const key = `${showReviewForm.pesananId}-${showReviewForm.produkId}`;
                setReviewedItems(prev => new Set(prev).add(key));
                fetchOrders();
              }}
              onCancel={() => setShowReviewForm(null)}
            />
          </div>
        </div>
      )}
    </main>
  );
}