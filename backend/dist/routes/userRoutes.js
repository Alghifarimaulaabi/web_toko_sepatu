import { Router } from 'express';
import { getAllUsers } from '../controllers/userController.js';
import { authMiddleware } from '../middleware/auth.js';
const router = Router();
// Endpoint untuk mendapatkan semua pengguna (admin only)
router.get('/', authMiddleware, getAllUsers);
export default router;
//# sourceMappingURL=userRoutes.js.map