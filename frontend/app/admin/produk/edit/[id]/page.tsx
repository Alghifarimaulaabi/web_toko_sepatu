'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

export default function EditProduk() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [kategoriList, setKategoriList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const [formData, setFormData] = useState({
    nama_produk: '',
    harga: '',
    stok: '',
    deskripsi: '',
    kategori: 'RUNNING',
  });
  const [foto, setFoto] = useState<File | null>(null);
  const [currentFotoUrl, setCurrentFotoUrl] = useState('');

  useEffect(() => {
    // Fetch product data
    fetch(`http://localhost:5000/api/products/${id}`).then(res => res.json())
    .then((productData) => {
      
      if (productData) {
        setFormData({
          nama_produk: productData.nama_produk,
          harga: productData.harga.toString(),
          stok: productData.stok.toString(),
          deskripsi: productData.deskripsi,
          kategori: productData.kategori,
        });
        setCurrentFotoUrl(productData.gambar);
      }
    })
    .catch(err => console.error(err))
    .finally(() => setFetching(false));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFoto(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const data = new FormData();
    data.append('nama_produk', formData.nama_produk);
    data.append('harga', formData.harga);
    data.append('stok', formData.stok);
    data.append('deskripsi', formData.deskripsi);
    data.append('kategori', formData.kategori);
    if (foto) {
      data.append('foto', foto);
    }

    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: 'PUT',
        body: data,
      });

      if (res.ok) {
        alert('Produk berhasil diupdate');
        router.refresh();
        router.push('/admin/produk');
      } else {
        const errorData = await res.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <p>Loading data produk...</p>;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center space-x-4">
        <Link href="/admin/produk" className="text-gray-500 hover:text-gray-700">
          ← Kembali
        </Link>
        <h1 className="text-3xl font-bold text-[#3E2723]">Edit Produk</h1>
      </div>

      <div className="bg-white p-6 rounded-xl border border-[#D7CCC8] shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Produk</label>
            <input 
              type="text" 
              name="nama_produk"
              required
              value={formData.nama_produk}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#5D4037] focus:border-[#5D4037]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
              <select 
                name="kategori"
                value={formData.kategori}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#5D4037] focus:border-[#5D4037]"
              >
                <option value="RUNNING">Running</option>
                <option value="FUTSAL">Futsal</option>
                <option value="CASUAL">Casual</option>
                <option value="FORMAL">Formal</option>
                <option value="SANDAL">Sandal</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Harga (Rp)</label>
              <input 
                type="number" 
                name="harga"
                required
                value={formData.harga}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#5D4037] focus:border-[#5D4037]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Stok</label>
            <input 
              type="number" 
              name="stok"
              required
              value={formData.stok}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#5D4037] focus:border-[#5D4037]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Produk</label>
            <textarea 
              name="deskripsi"
              required
              rows={4}
              value={formData.deskripsi}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#5D4037] focus:border-[#5D4037]"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Foto Produk (Opsional)</label>
            {currentFotoUrl && (
              <div className="mb-2">
                <p className="text-xs text-gray-500 mb-1">Foto saat ini:</p>
                <img src={`http://localhost:5000${currentFotoUrl}`} alt="Current" className="w-24 h-24 object-cover rounded-md border" />
              </div>
            )}
            <input 
              type="file" 
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <p className="text-xs text-gray-500 mt-1">Biarkan kosong jika tidak ingin mengubah foto.</p>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#5D4037] text-white py-2 rounded-md hover:bg-[#3E2723] transition disabled:opacity-50"
            >
              {loading ? 'Menyimpan...' : 'Simpan Perubahan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
