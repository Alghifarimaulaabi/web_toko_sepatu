"use client";

import { useState, useRef } from 'react';
import { Star, X, Loader2, Image as ImageIcon } from 'lucide-react';
import RatingStars from './RatingStars';
import { createTestimoni } from '../services/testimoniService';
import { toast } from 'sonner';

interface TestimoniFormProps {
  pesananId: number;
  produkId: number;
  produkNama: string;
  produkGambar: string;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function TestimoniForm({
  pesananId,
  produkId,
  produkNama,
  produkGambar,
  onSuccess,
  onCancel
}: TestimoniFormProps) {
  const [rating, setRating] = useState(0);
  const [komentar, setKomentar] = useState('');
  const [gambar, setGambar] = useState<File | null>(null);
  const [gambarPreview, setGambarPreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Ukuran gambar maksimal 5MB');
        return;
      }
      setGambar(file);
      setGambarPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setGambar(null);
    setGambarPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast.error('Silakan beri rating terlebih dahulu');
      return;
    }

    if (komentar.trim().length < 3) {
      toast.error('Komentar minimal 3 karakter');
      return;
    }

    try {
      setSubmitting(true);
      const formData = new FormData();
      formData.append('pesanan_id', pesananId.toString());
      formData.append('produk_id', produkId.toString());
      formData.append('rating', rating.toString());
      formData.append('komentar', komentar.trim());
      if (gambar) {
        formData.append('gambar', gambar);
      }
      
      await createTestimoni(formData);
      
      toast.success('Ulasan berhasil ditambahkan! Terima kasih atas feedback Anda.');
      onSuccess();
    } catch (error: any) {
      toast.error(error.message || 'Gagal menambahkan ulasan');
    } finally {
      setSubmitting(false);
    }
  };

  const ratingLabels = ['Sangat Buruk', 'Buruk', 'Cukup', 'Baik', 'Sangat Baik'];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#D7CCC8]/50">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#F5F5F5] flex-shrink-0">
            <img 
              src={produkGambar} 
              alt={produkNama}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-[#3E2723] text-sm">Beri Ulasan</h3>
            <p className="text-xs text-[#8D6E63] line-clamp-1">{produkNama}</p>
          </div>
        </div>
        <button
          onClick={onCancel}
          className="text-[#8D6E63] hover:text-[#3E2723] transition p-1"
        >
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Rating */}
        <div>
          <label className="text-sm font-medium text-[#5D4037] block mb-2">
            Rating *
          </label>
          <div className="flex items-center gap-4">
            <RatingStars
              rating={hoveredRating || rating}
              size={32}
              interactive={true}
              onRatingChange={setRating}
              onMouseEnter={(index: number) => setHoveredRating(index + 1)}
              onMouseLeave={() => setHoveredRating(0)}
            />
            <span className="text-sm text-[#8D6E63] font-medium">
              {rating > 0 ? ratingLabels[rating - 1] : 'Pilih rating'}
            </span>
          </div>
        </div>

        {/* Komentar */}
        <div>
          <label className="text-sm font-medium text-[#5D4037] block mb-2">
            Komentar *
          </label>
          <textarea
            value={komentar}
            onChange={(e) => setKomentar(e.target.value)}
            placeholder="Ceritakan pengalaman Anda menggunakan produk ini..."
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-[#D7CCC8] bg-[#F9F7F5] focus:outline-none focus:ring-2 focus:ring-[#5D4037]/40 text-[#3E2723] placeholder:text-[#8D6E63]/60 resize-none"
            required
          />
        </div>

        {/* Upload Gambar */}
        <div>
          <label className="text-sm font-medium text-[#5D4037] block mb-2">
            Foto (Opsional)
          </label>
          {gambarPreview ? (
            <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-[#D7CCC8]">
              <img src={gambarPreview} alt="Preview" className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-1 right-1 bg-white rounded-full p-1 shadow hover:bg-red-50 text-red-500 transition"
              >
                <X size={14} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-3 rounded-xl border border-dashed border-[#D7CCC8] bg-[#F9F7F5] text-[#8D6E63] hover:text-[#5D4037] hover:bg-[#F5F0EB] transition w-full justify-center"
            >
              <ImageIcon size={20} />
              <span className="text-sm font-medium">Pilih Foto</span>
            </button>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-2 rounded-full border border-[#D7CCC8] text-[#5D4037] hover:bg-[#F5F0EB] transition font-medium"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={submitting || rating === 0}
            className="flex-1 px-4 py-2 rounded-full bg-[#5D4037] text-white hover:bg-[#3E2723] transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Menyimpan...
              </>
            ) : (
              'Kirim Ulasan'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}