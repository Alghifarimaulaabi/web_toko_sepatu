"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";

interface ProductCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
  };
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onCheckout: () => void;
}

export default function ProductCheckoutModal({
  isOpen,
  onClose,
  product,
  quantity,
  onIncrease,
  onDecrease,
  onCheckout,
}: ProductCheckoutModalProps) {
  const total = product.price * quantity;

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
            className="fixed inset-0 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Background */}
              <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#8D6E63]/10"></div>
              <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-[#5D4037]/10"></div>

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 transition z-10"
              >
                <X size={22} />
              </button>

              <div className="relative p-8">

                {/* Header */}
                <div className="flex items-center gap-4 mb-8">

                  <div className="relative w-28 h-28 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#3E2723]">
                      {product.title}
                    </h2>

                    <p className="text-[#8D6E63] mt-2 text-sm leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                </div>

                {/* Harga */}
                <div className="flex justify-between items-center py-4 border-b border-[#D7CCC8]">

                  <span className="font-semibold text-[#5D4037]">
                    Harga
                  </span>

                  <span className="font-bold text-xl text-[#3E2723]">
                    Rp {product.price.toLocaleString("id-ID")}
                  </span>

                </div>

                {/* Quantity */}
                <div className="flex justify-between items-center py-6">

                  <span className="font-semibold text-[#5D4037]">
                    Jumlah
                  </span>

                  <div className="flex items-center gap-4">

                    <button
                      onClick={onDecrease}
                      className="w-11 h-11 rounded-xl bg-[#EFECE7] hover:bg-[#D7CCC8] flex justify-center items-center transition"
                    >
                      <Minus size={20} />
                    </button>

                    <span className="text-xl font-bold text-[#3E2723] w-8 text-center">
                      {quantity}
                    </span>

                    <button
                      onClick={onIncrease}
                      className="w-11 h-11 rounded-xl bg-[#5D4037] text-white hover:bg-[#3E2723] transition flex justify-center items-center"
                    >
                      <Plus size={20} />
                    </button>

                  </div>

                </div>

                {/* Total */}
                <div className="bg-[#F8F5F2] rounded-2xl p-5 mb-7">

                  <div className="flex justify-between items-center">

                    <span className="text-lg font-semibold text-[#5D4037]">
                      Total
                    </span>

                    <span className="text-2xl font-bold text-[#3E2723]">
                      Rp {total.toLocaleString("id-ID")}
                    </span>

                  </div>

                </div>

                {/* Button */}
                <button
                  onClick={onCheckout}
                  className="w-full flex justify-center items-center gap-3 bg-gradient-to-r from-[#8D6E63] to-[#5D4037] hover:from-[#5D4037] hover:to-[#3E2723] text-white py-4 rounded-2xl font-bold text-lg transition shadow-lg shadow-[#5D4037]/25"
                >
                  <ShoppingBag size={22} />
                  Lanjut ke Checkout
                </button>

              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}