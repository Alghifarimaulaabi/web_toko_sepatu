import { useState, useEffect } from 'react';
import { getOrders, cancelOrder, Order } from "@/app/services/orderService";
import { checkUserReview } from "@/app/services/testimoniService";
import { toast } from 'sonner';
import { Package, Clock, Truck, CheckCircle, XCircle } from 'lucide-react';

export const STATUS_MAP = {
  PENDING: { label: 'Menunggu Pembayaran', icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-100' },
  PROCESSING: { label: 'Dikemas', icon: Package, color: 'text-blue-600', bg: 'bg-blue-100' },
  SHIPPED: { label: 'Dikirim', icon: Truck, color: 'text-purple-600', bg: 'bg-purple-100' },
  DELIVERED: { label: 'Diterima', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100' },
  CANCELLED: { label: 'Dibatalkan', icon: XCircle, color: 'text-red-600', bg: 'bg-red-100' }
};

export const STATUS_OPTIONS = [
  { value: 'all', label: 'Semua Pesanan' },
  { value: 'PENDING', label: 'Menunggu Pembayaran' },
  { value: 'PROCESSING', label: 'Dikemas' },
  { value: 'SHIPPED', label: 'Dikirim' },
  { value: 'DELIVERED', label: 'Diterima' },
  { value: 'CANCELLED', label: 'Dibatalkan' }
];

export const useOrderHistory = () => {
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
  const [cancellingId, setCancellingId] = useState<number | null>(null);
  const [showCancelModal, setShowCancelModal] = useState<{ id: number; kode: string } | null>(null);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const data = await getOrders(currentPage, 10, selectedStatus);
      setOrders(data.orders);
      setTotalPages(data.pagination.totalPages);
      setTotalOrders(data.pagination.total);
      
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

  useEffect(() => {
    fetchOrders();
  }, [currentPage, selectedStatus]);

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

  const handleCancelOrder = async (orderId: number) => {
    try {
      setCancellingId(orderId);
      await cancelOrder(orderId);
      toast.success('Pesanan berhasil dibatalkan');
      setShowCancelModal(null);
      fetchOrders();
    } catch (error: any) {
      toast.error(error.message || 'Gagal membatalkan pesanan');
    } finally {
      setCancellingId(null);
    }
  };

  const hasUnreviewedItems = (order: Order) => {
    if (order.status !== 'DELIVERED') return false;
    return order.items.some(item => !reviewedItems.has(`${order.id}-${item.id}`));
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

  return {
    orders,
    loading,
    selectedStatus,
    setSelectedStatus,
    currentPage,
    setCurrentPage,
    totalPages,
    totalOrders,
    expandedOrder,
    toggleExpand,
    showReviewForm,
    setShowReviewForm,
    reviewedItems,
    cancellingId,
    showCancelModal,
    setShowCancelModal,
    handleCancelOrder,
    hasUnreviewedItems,
    getStatusInfo,
    formatDate,
    STATUS_MAP,
    STATUS_OPTIONS,
    fetchOrders,
    setReviewedItems
  };
};
