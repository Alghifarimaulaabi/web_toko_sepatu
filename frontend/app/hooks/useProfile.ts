import { useState, useEffect, useRef } from "react";
import { getProfile, updateProfile, UserProfile } from "@/app/services/profileService";
import { toast } from "sonner";

export const useProfile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    no_hp: "",
    alamat: "",
    kota: "",
    provinsi: "",
    kode_pos: "",
  });
  const [fotoFile, setFotoFile] = useState<File | null>(null);
  const [fotoPreview, setFotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const data = await getProfile();
      setProfile(data);
      setFormData({
        nama: data.nama || "",
        no_hp: data.no_hp || "",
        alamat: data.alamat || "",
        kota: data.kota || "",
        provinsi: data.provinsi || "",
        kode_pos: data.kode_pos || "",
      });
      if (data.foto) {
        setFotoPreview(data.foto);
      }
    } catch (error: any) {
      console.error("Error fetching profile:", error);
      if (error.message.includes("login")) {
        window.location.href = "/auth/login";
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFotoFile(file);
      setFotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });
      if (fotoFile) {
        form.append("foto", fotoFile);
      }

      const res = await updateProfile(form);
      setProfile(res.user);
      
      // Update local storage user data and notify navbar
      const currentUser = localStorage.getItem("user");
      if (currentUser) {
        try {
          const parsed = JSON.parse(currentUser);
          const updatedUser = { ...parsed, nama: res.user.nama, email: res.user.email, foto: res.user.foto };
          localStorage.setItem("user", JSON.stringify(updatedUser));
          window.dispatchEvent(new Event("user-auth-change"));
        } catch (error) {
          console.error("Error updating user storage", error);
        }
      }

      toast.success("Profil berhasil diperbarui!");
    } catch (error: any) {
      console.error("Error updating profile:", error);
      toast.error(error.message || "Gagal memperbarui profil");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return {
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
  };
};
