import { Router } from 'express';
import {
  createTestimoni,
  getTestimoniByProduk,
  checkUserReview,
  getAllTestimoniAdmin,
  getTestimoniByProdukAdmin,
  deleteTestimoni
} from '../controllers/testimoniController.js';
import { authMiddleware } from '../middleware/auth.js';

const router: Router = Router();

// Public: Get reviews for a product
router.get('/produk/:produkId', getTestimoniByProduk);

// Auth required: Create a review
router.post('/', authMiddleware as any, createTestimoni);

// Auth required: Check if user already reviewed
router.get('/check/:pesananId/:produkId', authMiddleware as any, checkUserReview);

// Admin: Get all products with reviews
router.get('/admin/all', authMiddleware as any, getAllTestimoniAdmin);

// Admin: Get reviews for a specific product
router.get('/admin/produk/:produkId', authMiddleware as any, getTestimoniByProdukAdmin);

// Admin: Delete a review
router.delete('/admin/:id', authMiddleware as any, deleteTestimoni);

export default router;
