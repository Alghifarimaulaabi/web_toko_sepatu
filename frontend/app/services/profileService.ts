const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface UserProfile {
  id: number;
  nama: string;
  email: string;
  role: string;
  foto?: string;
  no_hp?: string;
  alamat?: string;
  kota?: string;
  provinsi?: string;
  kode_pos?: string;
}

export const getProfile = async (): Promise<UserProfile> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Silakan login terlebih dahulu');
  }

  const response = await fetch(`${API_URL}/api/profile`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Gagal mengambil profil');
  }

  return response.json();
};

export const updateProfile = async (formData: FormData): Promise<{ message: string; user: UserProfile }> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Silakan login terlebih dahulu');
  }

  const response = await fetch(`${API_URL}/api/profile`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`
      // Note: do NOT set Content-Type for FormData, the browser sets it with the boundary
    },
    body: formData
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Gagal memperbarui profil');
  }

  return response.json();
};

export interface UsersResponse {
  users: UserProfile[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export const getAllUsersAdmin = async (page: number = 1, limit: number = 10, search?: string): Promise<UsersResponse> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Silakan login terlebih dahulu');
  }

  let url = `${API_URL}/api/users?page=${page}&limit=${limit}`;
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
    throw new Error(error.message || 'Gagal mengambil data pengguna');
  }

  return response.json();
};
