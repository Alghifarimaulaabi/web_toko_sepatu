import { useState, useRef } from 'react';
import { createTestimoni } from "@/app/services/testimoniService";
import { toast } from 'sonner';

export const useTestimoniForm = (pesananId: number, produkId: number, onSuccess: () => void) => {
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

  return {
    rating,
    setRating,
    komentar,
    setKomentar,
    gambarPreview,
    submitting,
    hoveredRating,
    setHoveredRating,
    fileInputRef,
    handleImageChange,
    removeImage,
    handleSubmit
  };
};
