"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LogOut, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function LogoutModal({ isOpen, onClose, onConfirm }: LogoutModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[60] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative overflow-hidden"
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-red-500/10"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-[#5D4037]/10"></div>

              {/* Icon */}
              <motion.div
                className="flex justify-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.1 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/30">
                  <AlertTriangle size={36} className="text-white" />
                </div>
              </motion.div>

              {/* Title */}
              <motion.h2
                className="text-2xl font-bold text-[#3E2723] text-center mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                Konfirmasi Logout
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-[#8D6E63] text-center mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Apakah Anda yakin ingin keluar dari akun Anda? Anda perlu login kembali untuk mengakses fitur lengkap.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <button
                  onClick={onConfirm}
                  className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-4 rounded-xl hover:bg-red-600 transition duration-300 font-bold text-lg shadow-md shadow-red-500/20"
                >
                  <LogOut size={22} />
                  Ya, Logout
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-3.5 rounded-xl border-2 border-[#D7CCC8] text-[#5D4037] font-semibold hover:bg-[#F5F5F5] transition"
                >
                  Batal
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
