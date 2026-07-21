"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, LogIn, ShieldAlert } from "lucide-react";
import Link from "next/link";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative circles */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#8D6E63]/10"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-[#5D4037]/10"></div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition text-gray-400 hover:text-gray-600 z-10"
              >
                <X size={20} />
              </button>

              {/* Icon */}
              <motion.div
                className="flex justify-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.1 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#8D6E63] to-[#5D4037] flex items-center justify-center shadow-lg shadow-[#5D4037]/30">
                  <ShieldAlert size={36} className="text-white" />
                </div>
              </motion.div>

              {/* Title */}
              <motion.h2
                className="text-2xl font-bold text-[#3E2723] text-center mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                Login Diperlukan
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-[#8D6E63] text-center mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Anda harus login terlebih dahulu sebelum dapat membeli produk atau menambahkan ke keranjang belanja.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Link
                  href="/auth/login"
                  className="w-full flex items-center justify-center gap-2 bg-[#5D4037] text-white py-4 rounded-xl hover:bg-[#3E2723] transition duration-300 font-bold text-lg shadow-md shadow-[#5D4037]/20"
                >
                  <LogIn size={22} />
                  Login Sekarang
                </Link>
                <button
                  onClick={onClose}
                  className="w-full py-3.5 rounded-xl border-2 border-[#D7CCC8] text-[#5D4037] font-semibold hover:bg-[#F5F5F5] transition"
                >
                  Kembali Belanja
                </button>
              </motion.div>

              {/* Register link */}
              <motion.p
                className="text-center text-sm text-gray-500 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Belum punya akun?{" "}
                <Link href="/auth/register" className="font-semibold text-[#5D4037] hover:underline">
                  Daftar Disini
                </Link>
              </motion.p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
