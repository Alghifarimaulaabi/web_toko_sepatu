import { Router } from 'express';
import { getAllUsers, deleteUser } from '../controllers/userController.js';
import { authMiddleware } from '../middleware/auth.js';

const router: Router = Router();

// Endpoint untuk mendapatkan semua pengguna (admin only)
router.get('/', authMiddleware as any, getAllUsers);

// Endpoint untuk menghapus pengguna
router.delete('/admin/:id', authMiddleware as any, deleteUser);

export default router;
