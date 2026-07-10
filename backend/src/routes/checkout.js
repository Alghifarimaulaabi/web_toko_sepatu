import { Router } from 'express';
import { createCheckout, midtransNotification } from '../controllers/checkoutController.js';
import { authMiddleware } from '../middleware/auth.js';
const router = Router();
// Endpoint untuk webhook Midtrans (tanpa auth middleware)
router.post('/notification', midtransNotification);
// Endpoint untuk membuat checkout
router.post('/', authMiddleware, createCheckout);
export default router;
//# sourceMappingURL=checkout.js.map