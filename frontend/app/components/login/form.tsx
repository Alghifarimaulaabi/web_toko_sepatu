"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  DoorClosed,
  Mail,
  Lock,
  UserPlus,
  Eye,
  EyeOff,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

// Zod schema for login validation
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email/Username wajib diisi"),
  password: z
    .string()
    .min(1, "Password wajib diisi")
    .min(6, "Password minimal 6 karakter"),
});

type LoginFormData = z.infer<typeof loginSchema>;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function Form() {
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
      const res = await fetch("http://localhost:5000/api/auth/login", {
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

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#EFECE7]">

      {/* Animated background circles */}
      <motion.div
        className="absolute -left-28 -top-20 h-72 w-72 rounded-full bg-[#8D6E63]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-28 h-72 w-72 rounded-full bg-[#3E2723]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#5D4037]/5"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      />

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          href="/"
          className="absolute left-5 top-5 rounded-full p-3 text-white hover:bg-white/20 backdrop-blur-sm transition group"
        >
          <ArrowLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      {/* Card */}
      <motion.div
        className="w-96 rounded-3xl bg-white/95 backdrop-blur-md p-8 shadow-2xl shadow-[#3E2723]/15 border border-white/50 relative z-10"
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200, delay: 0.1 }}
      >
        <motion.div variants={containerVariants} initial="hidden" animate="visible">

          {/* Title */}
          <motion.h2
            className="mb-6 bg-gradient-to-r from-[#3E2723] to-[#8D6E63] bg-clip-text text-center text-3xl font-bold text-transparent"
            variants={itemVariants}
          >
            Toko Sepatu
          </motion.h2>

          {/* Tabs */}
          <motion.div className="mb-8 flex justify-center" variants={itemVariants}>
            <div className="relative flex h-12 w-72 items-center rounded-full bg-[#EFECE7] p-1">
              {/* Active indicator */}
              <motion.div
                className="absolute left-1 top-1 h-10 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-[#5D4037] to-[#8D6E63] shadow-md"
                layoutId="tab-indicator"
              />

              <div className="z-10 flex w-1/2 cursor-pointer items-center justify-center gap-2 font-semibold text-white">
                <DoorClosed size={18} />
                Login
              </div>

              <Link
                href="/auth/register"
                className="z-10 flex w-1/2 items-center justify-center gap-2 font-semibold text-[#5D4037] hover:text-[#3E2723] transition"
              >
                <UserPlus size={18} />
                Register
              </Link>
            </div>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Email */}
            <motion.div variants={itemVariants}>
              <div className={`flex items-center rounded-xl border-2 px-4 py-3.5 transition-all ${errors.email ? 'border-red-400 bg-red-50/50' : 'border-[#D7CCC8] focus-within:border-[#8D6E63] bg-white'}`}>
                <Mail className={`mr-3 ${errors.email ? 'text-red-400' : 'text-[#8D6E63]'}`} size={20} />
                <input
                  type="text"
                  placeholder="Email / Username"
                  className="w-full outline-none bg-transparent text-[#3E2723] placeholder:text-gray-400"
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <motion.p
                  className="mt-1.5 flex items-center gap-1 text-sm text-red-500 pl-1"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle size={14} />
                  {errors.email.message}
                </motion.p>
              )}
            </motion.div>

            {/* Password */}
            <motion.div variants={itemVariants}>
              <div className={`flex items-center rounded-xl border-2 px-4 py-3.5 transition-all ${errors.password ? 'border-red-400 bg-red-50/50' : 'border-[#D7CCC8] focus-within:border-[#8D6E63] bg-white'}`}>
                <Lock className={`mr-3 ${errors.password ? 'text-red-400' : 'text-[#8D6E63]'}`} size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full outline-none bg-transparent text-[#3E2723] placeholder:text-gray-400"
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 text-gray-400 hover:text-[#5D4037] transition"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <motion.p
                  className="mt-1.5 flex items-center gap-1 text-sm text-red-500 pl-1"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle size={14} />
                  {errors.password.message}
                </motion.p>
              )}
            </motion.div>

            {/* Forgot password */}
            <motion.div className="flex justify-end" variants={itemVariants}>
              <Link href="#" className="text-sm text-[#8D6E63] hover:text-[#5D4037] font-medium hover:underline transition">
                Lupa password?
              </Link>
            </motion.div>

            {/* Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-gradient-to-r from-[#5D4037] to-[#8D6E63] py-3.5 font-bold text-white transition shadow-lg shadow-[#5D4037]/25 hover:shadow-xl hover:shadow-[#5D4037]/30 disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.span
                      className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    />
                    Memproses...
                  </span>
                ) : (
                  "Login"
                )}
              </motion.button>
            </motion.div>
          </form>

          {/* Divider */}
          <motion.div className="my-6 flex items-center gap-3" variants={itemVariants}>
            <div className="h-px flex-1 bg-[#D7CCC8]"></div>
            <span className="text-xs text-gray-400 font-medium">ATAU</span>
            <div className="h-px flex-1 bg-[#D7CCC8]"></div>
          </motion.div>

          {/* Footer */}
          <motion.p className="text-center text-sm text-gray-500" variants={itemVariants}>
            Belum punya akun?{" "}
            <Link
              href="/auth/register"
              className="font-semibold text-[#5D4037] hover:underline"
            >
              Daftar Sekarang
            </Link>
          </motion.p>

        </motion.div>
      </motion.div>
    </section>
  );
}