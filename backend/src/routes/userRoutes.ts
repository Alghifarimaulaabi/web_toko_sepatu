import { Router } from 'express';
import { getAllUsers } from '../controllers/userController.js';
import { authMiddleware } from '../middleware/auth.js';

const router: Router = Router();

// Endpoint untuk mendapatkan semua pengguna (admin only)
router.get('/', authMiddleware as any, getAllUsers);

export default router;
