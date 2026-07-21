import { Router } from 'express';
import { 
  getProducts, 
  getProductById, 
  createProduct, 
  updateProduct, 
  deleteProduct,
  getLowStockProducts 
} from '../controllers/product.js';
import { upload } from '../middleware/upload.js';
// import { authMiddleware, adminMiddleware } from '../middleware/auth.js';

const router: Router = Router();

// For now, no auth middleware to simplify testing, but you can add them like:
// router.post('/', authMiddleware, adminMiddleware, upload.single('foto'), createProduct);

router.get('/', getProducts);
router.get('/low-stock', getLowStockProducts);
router.get('/:id', getProductById);
router.post('/', upload.any(), createProduct);
router.put('/:id', upload.any(), updateProduct);
router.delete('/:id', deleteProduct);

export default router;
