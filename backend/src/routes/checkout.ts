import { Router } from 'express';
import { createCheckout } from '../controllers/checkoutController.js';
import { authMiddleware } from '../middleware/auth.js';

const router: Router = Router();

router.post('/', authMiddleware as any, createCheckout);

export default router;
