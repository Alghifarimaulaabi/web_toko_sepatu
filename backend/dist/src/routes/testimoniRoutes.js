import { Router } from 'express';
import { createTestimoni, getTestimoniByProduk, checkUserReview, getAllTestimoniAdmin, getTestimoniByProdukAdmin, deleteTestimoni, replyTestimoni } from '../controllers/testimoniController.js';
import { authMiddleware } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';
const router = Router();
// Public: Get reviews for a product
router.get('/produk/:produkId', getTestimoniByProduk);
// Auth required: Create a review
router.post('/', authMiddleware, upload.single('gambar'), createTestimoni);
// Auth required: Check if user already reviewed
router.get('/check/:pesananId/:produkId', authMiddleware, checkUserReview);
// Admin: Get all products with reviews
router.get('/admin/all', authMiddleware, getAllTestimoniAdmin);
// Admin: Get reviews for a specific product
router.get('/admin/produk/:produkId', authMiddleware, getTestimoniByProdukAdmin);
// Admin: Delete a review
router.delete('/admin/:id', authMiddleware, deleteTestimoni);
// Admin: Reply to a review
router.put('/admin/reply/:id', authMiddleware, replyTestimoni);
export default router;
//# sourceMappingURL=testimoniRoutes.js.map