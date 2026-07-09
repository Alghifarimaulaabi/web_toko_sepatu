import type { Response } from 'express';
import { PrismaClient } from '../../generated/prisma/client.js';
import type { AuthRequest } from '../middleware/auth.js';

const prisma = new PrismaClient();

// Get all notifications for admin
export const getAdminNotifications = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const notifications = await prisma.notifikasi.findMany({
      orderBy: { created_at: 'desc' },
      take: 50,
    });
    
    const unreadCount = await prisma.notifikasi.count({
      where: { is_read: false }
    });

    res.status(200).json({
      notifications,
      unreadCount
    });
  } catch (error: any) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ message: 'Gagal mengambil notifikasi', error: error.message });
  }
};

// Mark a specific notification as read
export const markNotificationAsRead = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    
    const notification = await prisma.notifikasi.update({
      where: { id: Number(id) },
      data: { is_read: true }
    });
    
    res.status(200).json({ message: 'Notifikasi berhasil ditandai telah dibaca', notification });
  } catch (error: any) {
    console.error('Error marking notification as read:', error);
    res.status(500).json({ message: 'Gagal mengupdate notifikasi', error: error.message });
  }
};

// Mark all notifications as read
export const markAllNotificationsAsRead = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    await prisma.notifikasi.updateMany({
      where: { is_read: false },
      data: { is_read: true }
    });
    
    res.status(200).json({ message: 'Semua notifikasi berhasil ditandai telah dibaca' });
  } catch (error: any) {
    console.error('Error marking all notifications as read:', error);
    res.status(500).json({ message: 'Gagal mengupdate notifikasi', error: error.message });
  }
};
