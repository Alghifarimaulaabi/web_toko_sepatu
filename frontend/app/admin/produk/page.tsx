'use client';
import { API_URL } from "@/lib/api";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface ProdukVarian {
  id: number;
  ukuran: string;
  stok: number;
}

interface Kategori {
  id: number;
  nama_kategori: string;
}

interface Product {
  id: number;
  nama_produk: string;
  harga: number;
  gambar: string;
  kategori: Kategori;
  varian: ProdukVarian[];
}

export default function AdminProduk() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_URL}/api/products`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        console.error('Expected array but got:', data);
        alert(data.message || 'Terjadi kesalahan saat memuat data');
        setProducts([]);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const totalStok = (varian: ProdukVarian[]) =>
    varian.reduce((sum, v) => sum + v.stok, 0);

  const filteredProducts = products.filter((product) =>
    product.nama_produk.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id: number) => {
    if (!confirm('Yakin ingin menghapus produk ini?')) return;

    const token = localStorage.getItem('token');

    try {
      const res = await fetch(`${API_URL}/api/products/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        alert('Produk berhasil dihapus');
        router.refresh();
        fetchProducts(); // refresh
      } else {
        const errorData = await res.json();
        alert(`Gagal menghapus produk: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error deleting:', error);
      alert('Terjadi kesalahan');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#3E2723]">Manajemen Produk</h1>
        <Link
          href="/admin/produk/tambah"
          className="bg-[#5D4037] hover:bg-[#3E2723] text-white px-4 py-2 rounded-md font-medium transition"
        >
          + Tambah Produk
        </Link>
      </div>

      <div className="bg-white p-6 rounded-xl border border-[#D7CCC8] shadow-sm">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Cari produk</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Masukkan nama barang"
            className="w-full max-w-md border border-gray-300 rounded-md p-2 focus:ring-[#5D4037] focus:border-[#5D4037]"
          />
        </div>

        {loading ? (
          <p>Loading data...</p>
        ) : (
          <div className="overflow-x-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-[#D7CCC8]">
                  <th className="py-3 px-4 font-semibold text-[#5D4037]">Foto</th>
                  <th className="py-3 px-4 font-semibold text-[#5D4037]">Nama Produk</th>
                  <th className="py-3 px-4 font-semibold text-[#5D4037]">Kategori</th>
                  <th className="py-3 px-4 font-semibold text-[#5D4037]">Harga</th>
                  <th className="py-3 px-4 font-semibold text-[#5D4037]">Total Stok</th>
                  <th className="py-3 px-4 font-semibold text-[#5D4037]">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-4 text-center text-gray-500">
                      {searchTerm ? 'Tidak ada produk yang sesuai pencarian' : 'Belum ada produk'}
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((product) => (
                    <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <img
                          src={product.gambar}
                          alt={product.nama_produk}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                      </td>
                      <td className="py-3 px-4 font-medium">{product.nama_produk}</td>
                      <td className="py-3 px-4">{product.kategori?.nama_kategori || '-'}</td>
                      <td className="py-3 px-4">Rp {Number(product.harga).toLocaleString('id-ID')}</td>
                      <td className="py-3 px-4">{totalStok(product.varian)}</td>
                      <td className="py-3 px-4 space-x-2">
                        <Link
                          href={`/admin/produk/edit/${product.id}`}
                          className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200 text-sm font-medium"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200 text-sm font-medium"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}