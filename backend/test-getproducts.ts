import { PrismaClient } from '@prisma/client';
import express from 'express';
import { getProducts } from './src/controllers/product.js';

const prisma = new PrismaClient();
const app = express();

app.get('/api/products', getProducts);

app.listen(5001, async () => {
  console.log('Test server on port 5001');
  try {
    const res = await fetch('http://localhost:5001/api/products');
    const text = await res.text();
    console.log('Status:', res.status);
    console.log('Response:', text.substring(0, 200));
  } catch (e) {
    console.error('Fetch error:', e);
  } finally {
    process.exit(0);
  }
});
