import { Router } from 'express';
import { getProfile, updateProfile } from '../controllers/profileController.js';
import { authMiddleware } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';

const router: Router = Router();

// Endpoint untuk mendapatkan profil pengguna
router.get('/', authMiddleware as any, getProfile);

// Endpoint untuk memperbarui profil dan mengunggah foto
router.put('/', authMiddleware as any, upload.single('foto'), updateProfile);

export default router;
