'use client';
import { API_URL } from "@/lib/api";

import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { 
  Users,
  Search,
  RefreshCw,
  Eye,
  Package, 
  Clock, 
  Truck, 
  CheckCircle, 
  XCircle,
  X,
  Trash2
} from 'lucide-react';
import { getAllUsersAdmin, deleteUserAdmin, UserProfile } from "@/app/services/profileService";
import { getAllOrdersAdmin, updateOrderStatusAdmin, Order } from "@/app/services/orderService";
import { formatRupiah } from "@/app/context/CartContext";
import Image from 'next/image';

const STATUS_MAP = {
  PENDING: { label: 'Menunggu Pembayaran', icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-100' },
  PROCESSING: { label: 'Dikemas', icon: Package, color: 'text-blue-600', bg: 'bg-blue-100' },
  SHIPPED: { label: 'Dikirim', icon: Truck, color: 'text-purple-600', bg: 'bg-purple-100' },
  DELIVERED: { label: 'Diterima', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100' },
  CANCELLED: { label: 'Dibatalkan', icon: XCircle, color: 'text-red-600', bg: 'bg-red-100' }
};



export default function AdminPengguna() {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Modal Orders State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null);
  
  // Orders inside Modal State
  const [orders, setOrders] = useState<Order[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [orderSearch, setOrderSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [orderCurrentPage, setOrderCurrentPage] = useState(1);
  const [orderTotalPages, setOrderTotalPages] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getAllUsersAdmin(currentPage, 10, search);
      setUsers(data.users);
      setTotalPages(data.pagination.totalPages);
    } catch (error: any) {
      console.error('Error fetching users:', error);
      toast.error(error.message || 'Gagal mengambil data pengguna');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage, search]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchUsers();
  };

  const fetchUserOrders = async (userId: number, page = 1) => {
    try {
      setLoadingOrders(true);
      const data = await getAllOrdersAdmin(page, 10, statusFilter, userId, orderSearch);
      setOrders(data.orders);
      setOrderTotalPages(data.pagination.totalPages);
    } catch (error: any) {
      console.error('Error fetching orders:', error);
      toast.error(error.message || 'Gagal mengambil data pesanan pengguna');
    } finally {
      setLoadingOrders(false);
    }
  };

  useEffect(() => {
    if (selectedUser && isModalOpen) {
      fetchUserOrders(selectedUser.id, orderCurrentPage);
    }
  }, [orderCurrentPage, statusFilter, orderSearch, selectedUser]);

  const handleOpenOrders = (user: UserProfile) => {
    setSelectedUser(user);
    setIsModalOpen(true);
    setOrderCurrentPage(1);
    setStatusFilter('all');
    setOrderSearch('');
    setSelectedOrder(null);
  };

  const handleStatusChange = async (orderId: number, newStatus: string) => {
    try {
      setUpdatingId(orderId);
      await updateOrderStatusAdmin(orderId, newStatus);
      toast.success('Status pesanan berhasil diperbarui');
      
      setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus as any } : o));
      if (selectedOrder && selectedOrder.id === orderId) {
        setSelectedOrder(prev => prev ? { ...prev, status: newStatus as any } : null);
      }
    } catch (error: any) {
      console.error('Error updating order status:', error);
      toast.error(error.message || 'Gagal memperbarui status');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDeleteUser = async (userId: number, userName: string) => {
    if (!window.confirm(`Apakah Anda yakin ingin menghapus pengguna ${userName} secara permanen? Semua data pesanan terkait juga akan terhapus.`)) {
      return;
    }
    
    try {
      await deleteUserAdmin(userId);
      toast.success('Pengguna berhasil dihapus');
      fetchUsers();
    } catch (error: any) {
      console.error('Error deleting user:', error);
      toast.error(error.message || 'Gagal menghapus pengguna');
    }
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
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#3E2723]">Manajemen Pengguna</h1>
        <button 
          onClick={fetchUsers}
          className="flex items-center gap-2 bg-[#EFECE7] hover:bg-[#D7CCC8] text-[#5D4037] px-4 py-2 rounded-md font-medium transition"
        >
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          Refresh
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl border border-[#D7CCC8] shadow-sm space-y-4">
        <form onSubmit={handleSearch} className="relative max-w-md">
          <input
            type="text"
            placeholder="Cari nama atau email pengguna..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#D7CCC8] focus:outline-none focus:ring-2 focus:ring-[#5D4037]"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </form>

        {loading ? (
          <p className="text-center py-10">Memuat data pengguna...</p>
        ) : users.length === 0 ? (
          <p className="text-center py-10 text-gray-500">Tidak ada pengguna yang ditemukan.</p>
        ) : (
          <div className="overflow-x-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-[#D7CCC8] text-[#8D6E63] text-sm">
                  <th className="pb-3 font-semibold">Nama</th>
                  <th className="pb-3 font-semibold">Email</th>
                  <th className="pb-3 font-semibold">Role</th>
                  <th className="pb-3 font-semibold">No HP</th>
                  <th className="pb-3 font-semibold text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-[#D7CCC8]/30 hover:bg-[#F9F7F5] transition text-sm">
                    <td className="py-4 font-medium text-[#3E2723]">{user.nama}</td>
                    <td className="py-4 text-[#5D4037]">{user.email}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${user.role === 'ADMIN' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="py-4 text-[#5D4037]">{user.no_hp || '-'}</td>
                    <td className="py-4 text-right flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleOpenOrders(user)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#5D4037] hover:bg-[#3E2723] text-white rounded-md text-xs font-medium transition"
                        title="Lihat Pesanan"
                      >
                        <Eye size={14} />
                        Lihat Data
                      </button>
                      {user.role !== 'ADMIN' && (
                        <button
                          onClick={() => handleDeleteUser(user.id, user.nama)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-600 rounded-md text-xs font-medium transition"
                          title="Hapus Pengguna"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 pt-6">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 rounded-md border border-[#D7CCC8] bg-white text-xs hover:bg-[#F5F0EB] transition disabled:opacity-50"
                >
                  Sebelumnya
                </button>
                <span className="text-xs text-[#5D4037]">
                  Halaman {currentPage} dari {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 rounded-md border border-[#D7CCC8] bg-white text-xs hover:bg-[#F5F0EB] transition disabled:opacity-50"
                >
                  Selanjutnya
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Orders Modal */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden">
            <div className="p-4 border-b border-[#D7CCC8] flex justify-between items-center bg-[#F9F7F5]">
              <h2 className="text-xl font-bold text-[#3E2723]">
                Pesanan: {selectedUser.nama}
              </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="flex gap-2 flex-wrap">
                  {['all', 'PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED'].map((st) => (
                    <button
                      key={st}
                      onClick={() => {
                        setStatusFilter(st);
                        setOrderCurrentPage(1);
                      }}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                        statusFilter === st 
                          ? 'bg-[#5D4037] text-white' 
                          : 'bg-[#F9F7F5] text-[#5D4037] border border-[#D7CCC8] hover:bg-[#EFECE7]'
                      }`}
                    >
                      {st === 'all' ? 'Semua' : getStatusInfo(st).label}
                    </button>
                  ))}
                </div>
                
                <form onSubmit={(e) => { e.preventDefault(); setOrderCurrentPage(1); fetchUserOrders(selectedUser.id, 1); }} className="relative">
                  <input
                    type="text"
                    placeholder="Cari kode pesanan..."
                    value={orderSearch}
                    onChange={(e) => setOrderSearch(e.target.value)}
                    className="w-full md:w-64 pl-9 pr-4 py-1.5 text-sm rounded-lg border border-[#D7CCC8] focus:outline-none focus:ring-2 focus:ring-[#5D4037]"
                  />
                  <Search className="absolute left-3 top-2 text-gray-400" size={16} />
                </form>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  {loadingOrders ? (
                    <p className="text-center py-10">Memuat data pesanan...</p>
                  ) : orders.length === 0 ? (
                    <p className="text-center py-10 text-gray-500">Tidak ada pesanan.</p>
                  ) : (
                    <div className="overflow-x-auto border border-[#D7CCC8] rounded-lg">
                      <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                          <tr className="border-b border-[#D7CCC8] bg-[#F9F7F5] text-[#8D6E63] text-sm">
                            <th className="p-3 font-semibold">Kode</th>
                            <th className="p-3 font-semibold">Tanggal</th>
                            <th className="p-3 font-semibold">Total</th>
                            <th className="p-3 font-semibold">Status</th>
                            <th className="p-3 font-semibold text-right">Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order) => {
                            const statusInfo = getStatusInfo(order.status);
                            return (
                              <tr key={order.id} className="border-b border-[#D7CCC8]/30 hover:bg-[#F9F7F5] transition text-sm">
                                <td className="p-3 font-medium text-[#3E2723]">{order.kode_pesanan}</td>
                                <td className="p-3 text-[#5D4037]">{formatDate(order.tanggal_pesanan)}</td>
                                <td className="p-3 font-semibold text-[#3E2723]">{formatRupiah(order.total_harga)}</td>
                                <td className="p-3">
                                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${statusInfo.bg} ${statusInfo.color}`}>
                                    {statusInfo.label}
                                  </span>
                                </td>
                                <td className="p-3 text-right">
                                  <button
                                    onClick={() => setSelectedOrder(order)}
                                    className="text-[#5D4037] hover:text-[#3E2723] p-1 rounded hover:bg-[#EFECE7] transition"
                                  >
                                    <Eye size={16} />
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
            </div>
                    </div>
                  )}

                  {orderTotalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 pt-4">
                      <button
                        onClick={() => setOrderCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={orderCurrentPage === 1}
                        className="px-3 py-1 rounded border border-[#D7CCC8] bg-white text-xs hover:bg-[#F5F0EB] transition disabled:opacity-50"
                      >
                        Prev
                      </button>
                      <span className="text-xs text-[#5D4037]">
                        {orderCurrentPage} / {orderTotalPages}
                      </span>
                      <button
                        onClick={() => setOrderCurrentPage(prev => Math.min(prev + 1, orderTotalPages))}
                        disabled={orderCurrentPage === orderTotalPages}
                        className="px-3 py-1 rounded border border-[#D7CCC8] bg-white text-xs hover:bg-[#F5F0EB] transition disabled:opacity-50"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </div>

                <div className="bg-[#F9F7F5] p-5 rounded-lg border border-[#D7CCC8]">
                  {selectedOrder ? (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-[#3E2723]">{selectedOrder.kode_pesanan}</h3>
                        <p className="text-xs text-[#8D6E63]">{formatDate(selectedOrder.tanggal_pesanan)}</p>
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-[#8D6E63] uppercase tracking-wider mb-2">
                          Ubah Status
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => handleStatusChange(selectedOrder.id, 'PROCESSING')}
                            disabled={updatingId === selectedOrder.id}
                            className={`px-2 py-1.5 rounded text-[10px] font-bold transition ${selectedOrder.status === 'PROCESSING' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}
                          >
                            Kemas
                          </button>
                          <button
                            onClick={() => handleStatusChange(selectedOrder.id, 'SHIPPED')}
                            disabled={updatingId === selectedOrder.id}
                            className={`px-2 py-1.5 rounded text-[10px] font-bold transition ${selectedOrder.status === 'SHIPPED' ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-700 hover:bg-purple-100'}`}
                          >
                            Kirim
                          </button>
                          <button
                            onClick={() => handleStatusChange(selectedOrder.id, 'DELIVERED')}
                            disabled={updatingId === selectedOrder.id}
                            className={`px-2 py-1.5 rounded text-[10px] font-bold transition col-span-2 ${selectedOrder.status === 'DELIVERED' ? 'bg-green-600 text-white' : 'bg-green-50 text-green-700 hover:bg-green-100'}`}
                          >
                            Diterima
                          </button>
                          <button
                            onClick={() => handleStatusChange(selectedOrder.id, 'CANCELLED')}
                            disabled={updatingId === selectedOrder.id}
                            className={`px-2 py-1.5 rounded text-[10px] font-bold transition col-span-2 ${selectedOrder.status === 'CANCELLED' ? 'bg-red-600 text-white' : 'bg-red-50 text-red-700 hover:bg-red-100'}`}
                          >
                            Batalkan
                          </button>
                        </div>
                      </div>

                      <div className="border-t border-[#D7CCC8]/30 pt-3">
                        <h4 className="text-[10px] font-semibold text-[#8D6E63] uppercase mb-2">Produk</h4>
                        <div className="space-y-2 max-h-32 overflow-y-auto">
                          {selectedOrder.items.map((item) => (
                            <div key={item.id} className="flex gap-2 items-center">
                              <div className="relative w-8 h-8 rounded bg-white flex-shrink-0 border border-[#D7CCC8]/30">
                                <Image src={item.gambar.startsWith('http') ? item.gambar : `${API_URL}${item.gambar}`} alt={item.nama_produk} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" unoptimized className="object-cover rounded" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-[10px] text-[#3E2723] truncate">{item.nama_produk}</div>
                                <div className="text-[9px] text-[#8D6E63]">{item.jumlah} x {formatRupiah(item.harga)}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-[#D7CCC8]/30 pt-3">
                        <h4 className="text-[10px] font-semibold text-[#8D6E63] uppercase mb-1">Pengiriman</h4>
                        <div className="text-[10px] text-[#5D4037]">
                          <p className="font-bold">{selectedOrder.alamat.nama_penerima}</p>
                          <p className="truncate">{selectedOrder.alamat.alamat}</p>
                          <p>{selectedOrder.alamat.kota}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-center text-[#8D6E63] text-xs py-10">Pilih pesanan untuk melihat detail.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
