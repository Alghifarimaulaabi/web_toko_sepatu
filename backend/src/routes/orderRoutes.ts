import { Router } from 'express';
import { 
  getUserOrders, 
  getAllOrders,
  getOrderDetail, 
  updateOrderStatus,
  updateOrderStatusByKode,
  getOrderStats,
  getDashboardSummary
} from '../controllers/orderController.js';
import { authMiddleware } from '../middleware/auth.js';

const router: Router = Router();

// All routes require authentication
router.use(authMiddleware as any);

// Get dashboard summary for stat cards (admin only)
router.get('/admin/summary', getDashboardSummary);

// Get order stats for dashboard chart (admin only)
router.get('/admin/stats', getOrderStats);

// Get all orders (admin only)
router.get('/admin/all', getAllOrders);

// Get user orders with pagination
router.get('/', getUserOrders);

// Get single order detail
router.get('/:orderId', getOrderDetail);

// Update order status by kode_pesanan (user after payment)
router.put('/update-status', updateOrderStatusByKode);

// Update order status (admin only)
router.put('/:orderId/status', updateOrderStatus);

export default router;