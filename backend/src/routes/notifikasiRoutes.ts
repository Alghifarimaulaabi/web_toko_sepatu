import express, { Router } from 'express';
import {
  getAdminNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead
} from '../controllers/notifikasiController.js';
import { authMiddleware, adminMiddleware } from '../middleware/auth.js';

const router : Router = express.Router();

// All notification routes are protected by admin middleware
router.get('/', authMiddleware as any, adminMiddleware as any, getAdminNotifications as any);
router.put('/read-all', authMiddleware as any, adminMiddleware as any, markAllNotificationsAsRead as any);
router.put('/:id/read', authMiddleware as any, adminMiddleware as any, markNotificationAsRead as any);

export default router;
