import { API_URL } from "@/lib/api";
import { Product } from "@/app/data/products";

export interface OrderItem {
  id: number;
  nama_produk: string;
  gambar: string;
  harga: number;
  jumlah: number;
  subtotal: number;
  warna?: string;
  ukuran?: string;
}

export interface OrderAddress {
  nama_penerima: string;
  no_hp: string;
  alamat: string;
  kota: string;
  provinsi: string;
  kode_pos: string;
  catatan?: string;
}

export interface Order {
  id: number;
  kode_pesanan: string;
  tanggal_pesanan: string;
  total_harga: number;
  status: 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  metode_pembayaran: string;
  alamat: OrderAddress;
  items: OrderItem[];
}

export interface OrdersResponse {
  orders: Order[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export const getOrders = async (page: number = 1, limit: number = 10, status?: string): Promise<OrdersResponse> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Silakan login terlebih dahulu');
  }

  let url = `${API_URL}/api/orders?page=${page}&limit=${limit}`;
  if (status && status !== 'all') {
    url += `&status=${status}`;
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Gagal mengambil riwayat pesanan');
  }

  return response.json();
};

export const getOrderDetail = async (orderId: number): Promise<Order> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Silakan login terlebih dahulu');
  }

  const response = await fetch(`${API_URL}/api/orders/${orderId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Gagal mengambil detail pesanan');
  }

  return response.json();
};

export const getAllOrdersAdmin = async (page: number = 1, limit: number = 10, status?: string, userId?: number, search?: string): Promise<OrdersResponse> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Silakan login terlebih dahulu');
  }

  let url = `${API_URL}/api/orders/admin/all?page=${page}&limit=${limit}`;
  if (status && status !== 'all') {
    url += `&status=${status}`;
  }
  if (userId) {
    url += `&userId=${userId}`;
  }
  if (search) {
    url += `&search=${encodeURIComponent(search)}`;
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Gagal mengambil data pesanan');
  }

  return response.json();
};

export const updateOrderStatusAdmin = async (orderId: number, status: string): Promise<void> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Silakan login terlebih dahulu');
  }

  const response = await fetch(`${API_URL}/api/orders/${orderId}/status`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ status })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Gagal memperbarui status pesanan');
  }
};

export const cancelOrder = async (orderId: number): Promise<void> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Silakan login terlebih dahulu');
  }

  const response = await fetch(`${API_URL}/api/orders/${orderId}/cancel`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Gagal membatalkan pesanan');
  }
};