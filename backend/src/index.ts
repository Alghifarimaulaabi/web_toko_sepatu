import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

// Register product routes
import productRoutes from './routes/product.js';
app.use('/api/products', productRoutes);

// Register checkout routes
import checkoutRoutes from './routes/checkout.js';
app.use('/api/checkout', checkoutRoutes);

// Setup static folder for uploads
import path from 'path';
app.use('/uploads', express.static(path.join(process.cwd(), 'public/uploads')));

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
