import express, { Router } from 'express';
import { getAdminNotifications, markNotificationAsRead, markAllNotificationsAsRead } from '../controllers/notifikasiController.js';
import { authMiddleware, adminMiddleware } from '../middleware/auth.js';
const router = express.Router();
// All notification routes are protected by admin middleware
router.get('/', authMiddleware, adminMiddleware, getAdminNotifications);
router.put('/read-all', authMiddleware, adminMiddleware, markAllNotificationsAsRead);
router.put('/:id/read', authMiddleware, adminMiddleware, markNotificationAsRead);
export default router;
//# sourceMappingURL=notifikasiRoutes.js.map