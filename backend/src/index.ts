import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import orderRoutes from './routes/orderRoutes.js';
import productRoutes from './routes/product.js';
import checkoutRoutes from './routes/checkout.js';
import profileRoutes from './routes/profileRoutes.js';
import userRoutes from './routes/userRoutes.js';
import path from 'path';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

// Register product routes
app.use('/api/products', productRoutes);

// Register checkout routes
app.use('/api/checkout', checkoutRoutes);

// history pemesanan barang
app.use('/api/orders', orderRoutes);

// Register profile routes
app.use('/api/profile', profileRoutes);

// Register user routes
app.use('/api/users', userRoutes);

// Setup static folder for uploads

app.use('/uploads', express.static(path.join(process.cwd(), 'public/uploads')));

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
