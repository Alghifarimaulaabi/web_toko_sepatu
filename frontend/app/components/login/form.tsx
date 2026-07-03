"use client";

import Link from "next/link";
import {
  ArrowLeft,
  DoorClosed,
  Mail,
  Lock,
  UserPlus,
} from "lucide-react";

export default function Form() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-100">

      {/* Background Circle */}
      <div className="absolute -left-28 -top-20 h-72 w-72 rounded-full bg-amber-800 opacity-70"></div>

      <div className="absolute -bottom-20 -right-28 h-72 w-72 rounded-full bg-amber-950 opacity-70"></div>

      {/* Back Button */}
      <Link
        href="/"
        className="absolute left-5 top-5 rounded-xl p-2 text-white transition"
      >
        <ArrowLeft size={22} />
      </Link>

      {/* Card */}
      <div className="w-80 rounded-2xl bg-white p-8 shadow-xl">

        {/* Title */}
        <h2 className="mb-6 bg-gradient-to-r from-[#52360c] to-[#9c7c35] bg-clip-text text-center text-3xl font-bold text-transparent">
          Toko Sepatu
        </h2>

        {/* Tabs */}
        <div className="mb-6 flex justify-center">
          <div className="relative flex h-11 w-64 items-center rounded-full bg-gray-300 p-1">

            <div className="absolute left-1 top-1 h-9 w-[calc(50%-4px)] rounded-full border-2 border-[#44371b] bg-amber-700"></div>

            <div className="z-10 flex w-1/2 cursor-pointer items-center justify-center gap-2 font-semibold text-white">
              <DoorClosed size={18} />
              Login
            </div>

            <Link
              href="/register"
              className="z-10 flex w-1/2 items-center justify-center gap-2 font-semibold"
            >
              <UserPlus size={18} />
              Register
            </Link>

          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">

          {/* Email */}
          <div className="flex items-center rounded-lg border px-3 py-3">
            <Mail className="mr-2 text-gray-400" size={20} />

            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex items-center rounded-lg border px-3 py-3">
            <Lock className="mr-2 text-gray-400" size={20} />

            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-amber-950 py-3 font-semibold text-white transition hover:bg-[#6FCF97]"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex justify-center">
          <div className="h-[2px] w-28 bg-gray-400"></div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm">
          Belum punya akun?{" "}
          <Link
            href="/register"
            className="font-medium text-blue-500 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}