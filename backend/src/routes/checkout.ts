import { Router } from 'express';
import { createCheckout, midtransNotification } from '../controllers/checkoutController.js';
import { authMiddleware } from '../middleware/auth.js';

const router: Router = Router();

// Endpoint untuk webhook Midtrans (tanpa auth middleware)
router.post('/notification', midtransNotification as any);

// Endpoint untuk membuat checkout
router.post('/', authMiddleware as any, createCheckout);

export default router;
