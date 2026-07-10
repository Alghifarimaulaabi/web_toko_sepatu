import { Router } from 'express';
import { getProfile, updateProfile } from '../controllers/profileController.js';
import { authMiddleware } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';
const router = Router();
// Endpoint untuk mendapatkan profil pengguna
router.get('/', authMiddleware, getProfile);
// Endpoint untuk memperbarui profil dan mengunggah foto
router.put('/', authMiddleware, upload.single('foto'), updateProfile);
export default router;
//# sourceMappingURL=profileRoutes.js.map