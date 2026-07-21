import { useState, useEffect, useCallback } from "react";
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
  const [lockoutSeconds, setLockoutSeconds] = useState(0);
  const [remainingAttempts, setRemainingAttempts] = useState<number | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // Countdown timer for lockout
  useEffect(() => {
    if (lockoutSeconds <= 0) return;
    const timer = setInterval(() => {
      setLockoutSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setRemainingAttempts(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [lockoutSeconds]);

  const formatCountdown = useCallback((seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }, []);

  const onSubmit = async (data: LoginFormData) => {
    if (lockoutSeconds > 0) {
      toast.error(`Akun terkunci. Coba lagi dalam ${formatCountdown(lockoutSeconds)}`);
      return;
    }

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
        // Handle rate limit lockout (HTTP 429)
        if (res.status === 429 || result.locked) {
          setLockoutSeconds(result.retryAfter || 900);
          setRemainingAttempts(0);
          toast.error(result.message || "Terlalu banyak percobaan. Silakan tunggu.");
          return;
        }

        // Handle failed login with remaining attempts info
        if (result.remainingAttempts !== undefined) {
          setRemainingAttempts(result.remainingAttempts);
          if (result.remainingAttempts <= 2 && result.remainingAttempts > 0) {
            toast.error(`${result.message}. Sisa percobaan: ${result.remainingAttempts}`);
          } else {
            toast.error(result.message || "Login gagal");
          }
        } else {
          toast.error(result.message || "Login gagal");
        }
        return;
      }

      // Login berhasil — reset state
      setRemainingAttempts(null);
      setLockoutSeconds(0);

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
    lockoutSeconds,
    remainingAttempts,
    formatCountdown,
    isLocked: lockoutSeconds > 0,
  };
};

