const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface Testimoni {
  id: number;
  pesanan_id: number;
  user_id: number;
  produk_id: number;
  nama: string;
  rating: number;
  komentar: string;
  gambar?: string;
  balasan?: string;
  created_at: string;
  user?: {
    nama: string;
    email: string;
    foto?: string;
  };
  pesanan?: {
    kode_pesanan: string;
  };
}

export interface TestimoniResponse {
  testimonis: Testimoni[];
  averageRating: number;
  totalReviews: number;
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface AdminTestimoniProduct {
  id: number;
  nama_produk: string;
  gambar: string;
  totalReviews: number;
  averageRating: number;
}

export interface AdminTestimoniResponse {
  products: AdminTestimoniProduct[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

// User: Create a review
export const createTestimoni = async (data: FormData): Promise<{ message: string; testimoni: Testimoni }> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Silakan login terlebih dahulu');
  }

  const response = await fetch(`${API_URL}/api/testimoni`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: data
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Gagal menambahkan ulasan');
  }

  return response.json();
};

// Public: Get reviews for a product
export const getTestimoniByProduk = async (
  produkId: number,
  page: number = 1,
  limit: number = 10
): Promise<TestimoniResponse> => {
  const response = await fetch(
    `${API_URL}/api/testimoni/produk/${produkId}?page=${page}&limit=${limit}`
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Gagal mengambil ulasan');
  }

  return response.json();
};

// User: Check if already reviewed
export const checkUserReview = async (
  pesananId: number,
  produkId: number
): Promise<{ reviewed: boolean }> => {
  const token = localStorage.getItem('token');
  if (!token) {
    return { reviewed: false };
  }

  const response = await fetch(
    `${API_URL}/api/testimoni/check/${pesananId}/${produkId}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  );

  if (!response.ok) {
    return { reviewed: false };
  }

  return response.json();
};

// Admin: Get all products with reviews
export const getAdminTestimoni = async (
  page: number = 1,
  limit: number = 10,
  search?: string
): Promise<AdminTestimoniResponse> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Silakan login terlebih dahulu');
  }

  let url = `${API_URL}/api/testimoni/admin/all?page=${page}&limit=${limit}`;
  if (search) {
    url += `&search=${encodeURIComponent(search)}`;
  }

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Gagal mengambil data testimoni');
  }

  return response.json();
};

// Admin: Get reviews for a specific product
export const getAdminTestimoniByProduk = async (
  produkId: number
): Promise<{ testimonis: Testimoni[] }> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Silakan login terlebih dahulu');
  }

  const response = await fetch(`${API_URL}/api/testimoni/admin/produk/${produkId}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Gagal mengambil ulasan produk');
  }

  return response.json();
};

// Admin: Delete a review
export const deleteTestimoni = async (id: number): Promise<{ message: string }> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Silakan login terlebih dahulu');
  }

  const response = await fetch(`${API_URL}/api/testimoni/admin/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Gagal menghapus ulasan');
  }

  return response.json();
};

// Admin: Reply to a review
export const replyTestimoni = async (id: number, balasan: string): Promise<{ message: string; testimoni: Testimoni }> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Silakan login terlebih dahulu');
  }

  const response = await fetch(`${API_URL}/api/testimoni/admin/reply/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ balasan })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Gagal membalas ulasan');
  }

  return response.json();
};