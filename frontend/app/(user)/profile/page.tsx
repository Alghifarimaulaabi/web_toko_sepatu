"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { User, MapPin, Phone, Mail, Camera, Save, Loader2, LogOut } from "lucide-react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import { useProfile } from "@/app/hooks/useProfile";

export default function ProfilePage() {
  const {
    profile,
    loading,
    saving,
    formData,
    fotoPreview,
    fileInputRef,
    handleChange,
    handleFileChange,
    handleSubmit,
    handleLogout,
  } = useProfile();

  if (loading) {
    return (
      <main className="min-h-screen bg-[#EFECE7] font-sans flex flex-col">
        <Navbar />
        <section className="py-16 md:py-24 flex-grow flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Loader2 size={48} className="text-[#5D4037] animate-spin" />
            <p className="text-[#8D6E63] font-medium">Memuat profil...</p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#EFECE7] font-sans flex flex-col">
      <Navbar />

      <section className="py-12 md:py-20 flex-grow">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-2 flex items-center gap-3">
                <User className="text-[#5D4037]" size={32} />
                Profil Pengguna
              </h1>
              <p className="text-[#8D6E63]">Kelola informasi pribadi dan alamat pengirimanmu.</p>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 bg-white border border-[#D7CCC8] text-[#5D4037] px-6 py-2.5 rounded-full hover:bg-[#F9F7F5] transition font-medium"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-[#D7CCC8]/50 overflow-hidden">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
              {/* Sidebar - Photo & Basic Info */}
              <div className="w-full md:w-1/3 bg-[#F9F7F5] p-8 flex flex-col items-center border-b md:border-b-0 md:border-r border-[#D7CCC8]/50">
                <div className="relative mb-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg bg-[#EFECE7] relative group">
                    {fotoPreview ? (
                      <Image
                        src={fotoPreview}
                        alt="Profile Photo"
                        fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#8D6E63]">
                        <User size={64} />
                      </div>
                    )}
                    
                    {/* Overlay for change photo */}
                    <div 
                      className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Camera className="text-white" size={32} />
                    </div>
                  </div>
                  
                  <button 
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute bottom-2 right-2 bg-[#5D4037] text-white p-2.5 rounded-full shadow-lg hover:bg-[#3E2723] transition-colors"
                  >
                    <Camera size={18} />
                  </button>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    accept="image/*" 
                    className="hidden" 
                  />
                </div>

                <div className="text-center w-full">
                  <h2 className="text-xl font-bold text-[#3E2723] mb-1">{profile?.nama}</h2>
                  <div className="flex items-center justify-center gap-2 text-[#8D6E63] mb-6">
                    <Mail size={16} />
                    <span className="text-sm">{profile?.email}</span>
                  </div>
                  
                  <span className="inline-block bg-[#5D4037]/10 text-[#5D4037] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    {profile?.role === 'ADMIN' ? 'Administrator' : 'Customer'}
                  </span>
                </div>
              </div>

              {/* Main Form Content */}
              <div className="w-full md:w-2/3 p-8">
                <h3 className="text-lg font-bold text-[#3E2723] mb-6 border-b border-[#D7CCC8]/40 pb-4">
                  Informasi Pribadi
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="text-sm font-medium text-[#5D4037] mb-1.5 block">
                      Nama Lengkap
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8D6E63]/60">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        name="nama"
                        value={formData.nama}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D7CCC8] bg-[#F9F7F5] focus:outline-none focus:ring-2 focus:ring-[#5D4037]/40 text-[#3E2723]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#5D4037] mb-1.5 block">
                      Nomor Telepon
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8D6E63]/60">
                        <Phone size={18} />
                      </div>
                      <input
                        type="text"
                        name="no_hp"
                        value={formData.no_hp}
                        onChange={handleChange}
                        placeholder="Contoh: 081234567890"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D7CCC8] bg-[#F9F7F5] focus:outline-none focus:ring-2 focus:ring-[#5D4037]/40 text-[#3E2723]"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#3E2723] mb-6 border-b border-[#D7CCC8]/40 pb-4">
                  Alamat Pengiriman Utama
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-[#5D4037] mb-1.5 block">
                      Alamat Lengkap
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-start pointer-events-none text-[#8D6E63]/60">
                        <MapPin size={18} />
                      </div>
                      <textarea
                        name="alamat"
                        value={formData.alamat}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Nama jalan, gedung, nomor rumah..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D7CCC8] bg-[#F9F7F5] focus:outline-none focus:ring-2 focus:ring-[#5D4037]/40 text-[#3E2723] resize-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#5D4037] mb-1.5 block">
                      Provinsi
                    </label>
                    <input
                      type="text"
                      name="provinsi"
                      value={formData.provinsi}
                      onChange={handleChange}
                      placeholder="Jawa Barat"
                      className="w-full px-4 py-3 rounded-xl border border-[#D7CCC8] bg-[#F9F7F5] focus:outline-none focus:ring-2 focus:ring-[#5D4037]/40 text-[#3E2723]"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#5D4037] mb-1.5 block">
                      Kota / Kabupaten
                    </label>
                    <input
                      type="text"
                      name="kota"
                      value={formData.kota}
                      onChange={handleChange}
                      placeholder="Bandung"
                      className="w-full px-4 py-3 rounded-xl border border-[#D7CCC8] bg-[#F9F7F5] focus:outline-none focus:ring-2 focus:ring-[#5D4037]/40 text-[#3E2723]"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#5D4037] mb-1.5 block">
                      Kode Pos
                    </label>
                    <input
                      type="text"
                      name="kode_pos"
                      value={formData.kode_pos}
                      onChange={handleChange}
                      placeholder="40123"
                      className="w-full px-4 py-3 rounded-xl border border-[#D7CCC8] bg-[#F9F7F5] focus:outline-none focus:ring-2 focus:ring-[#5D4037]/40 text-[#3E2723]"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-[#D7CCC8]/40">
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex items-center gap-2 bg-[#5D4037] text-white px-8 py-3 rounded-full hover:bg-[#3E2723] transition font-bold shadow-lg shadow-[#5D4037]/20 disabled:opacity-70"
                  >
                    {saving ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <Save size={18} />
                    )}
                    {saving ? "Menyimpan..." : "Simpan Perubahan"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
