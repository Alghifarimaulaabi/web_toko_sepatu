import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/api";

const loginSchema = z.object({
  email: z.string().min(1, "Email/Username wajib diisi"),
  password: z.string().min(1, "Password wajib diisi").min(6, "Password minimal 6 karakter"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const useLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || "Login gagal");
        return;
      }

      // Save to localStorage
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));
      window.dispatchEvent(new Event("user-auth-change"));

      toast.success(result.message || "Login berhasil!");
      setTimeout(() => {
        if (result.user.role === 'ADMIN') {
          router.push("/admin");
        } else {
          router.push("/");
        }
      }, 1000);
    } catch (error) {
      toast.error("Terjadi kesalahan pada jaringan");
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
    showPassword,
    setShowPassword,
  };
};
