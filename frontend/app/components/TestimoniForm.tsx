"use client";

import { useState } from 'react';
import { Star, X, Loader2 } from 'lucide-react';
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
  const [submitting, setSubmitting] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

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
      await createTestimoni({
        pesanan_id: pesananId,
        produk_id: produkId,
        rating,
        komentar: komentar.trim()
      });
      
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