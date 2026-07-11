"use client";

import { useState, useEffect, useRef } from "react";
import { Bell, CheckCheck } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Notification {
  id: number;
  judul: string;
  pesan: string;
  is_read: boolean;
  type: string;
  reference_id: number | null;
  created_at: string;
}

export default function AdminNotification() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/notifikasi`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setNotifications(data.notifications);
        setUnreadCount(data.unreadCount);
      }
    } catch (error) {
      console.error("Failed to fetch notifications:", error);
    }
  };

  useEffect(() => {
    fetchNotifications();
    // Poll every 30 seconds
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const markAsRead = async (id: number, reference_id: number | null) => {
    try {
      const token = localStorage.getItem("token");
      await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/notifikasi/${id}/read`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      setNotifications(prev => 
        prev.map(notif => notif.id === id ? { ...notif, is_read: true } : notif)
      );
      setUnreadCount(prev => Math.max(0, prev - 1));
      setIsOpen(false);
      
      if (reference_id) {
        router.push(`/admin/testimoni`);
      }
    } catch (error) {
      console.error("Failed to mark as read:", error);
    }
  };

  const markAllAsRead = async () => {
    if (unreadCount === 0) return;
    
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/notifikasi/read-all`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      setNotifications(prev => prev.map(notif => ({ ...notif, is_read: true })));
      setUnreadCount(0);
      toast.success("Semua notifikasi ditandai sudah dibaca");
    } catch (error) {
      console.error("Failed to mark all as read:", error);
      toast.error("Gagal menandai notifikasi");
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("id-ID", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-[#EFECE7] transition-colors"
      >
        <Bell className="text-[#3E2723]" size={22} />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full">
            {unreadCount > 99 ? "99+" : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 md:w-96 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-[#EFECE7] z-50 overflow-hidden flex flex-col max-h-[500px]">
          <div className="p-4 border-b border-[#EFECE7] flex justify-between items-center bg-[#FDFBF7]">
            <h3 className="font-semibold text-[#3E2723]">Notifikasi</h3>
            {unreadCount > 0 && (
              <button 
                onClick={markAllAsRead}
                disabled={isLoading}
                className="text-xs text-[#8D6E63] hover:text-[#5D4037] font-medium flex items-center gap-1 transition-colors disabled:opacity-50"
              >
                <CheckCheck size={14} />
                Tandai semua dibaca
              </button>
            )}
          </div>
          
          <div className="overflow-y-auto flex-1 p-2">
            {notifications.length === 0 ? (
              <div className="p-6 text-center text-gray-500 text-sm">
                Belum ada notifikasi
              </div>
            ) : (
              <div className="space-y-1">
                {notifications.map((notif) => (
                  <div 
                    key={notif.id}
                    onClick={() => markAsRead(notif.id, notif.reference_id)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors flex gap-3 ${
                      notif.is_read ? 'hover:bg-gray-50' : 'bg-[#FDFBF7] hover:bg-[#EFECE7] border border-[#EFECE7]'
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <p className={`text-sm font-medium truncate ${notif.is_read ? 'text-gray-600' : 'text-[#3E2723]'}`}>
                          {notif.judul}
                        </p>
                        {!notif.is_read && (
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500 mt-1 flex-shrink-0 shadow-sm"></span>
                        )}
                      </div>
                      <p className={`text-xs line-clamp-2 ${notif.is_read ? 'text-gray-500' : 'text-gray-700'}`}>
                        {notif.pesan}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-2 font-medium">
                        {formatTime(notif.created_at)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
