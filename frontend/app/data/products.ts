export interface Product {
  id: number;
  image: string;
  title: string;
  price: number | string; // Allow string for mock data like "Rp. 4,500,000"
  rating: number | string;
  description: string;
}

export const trendingProducts: Product[] = [
  {
    id: 9001,
    image: "/images/nike-2.jpeg",
    title: "Nike Air Jordan Force",
    price: "Rp. 4,500,000",
    rating: "5.0",
    description: "Sepatu premium Nike dengan teknologi Air untuk kenyamanan maksimal.",
  },
  {
    id: 9002,
    image: "/images/sepatu-1.jpeg",
    title: "Nike White Blue Premium",
    price: "Rp. 4,500,000",
    rating: "5.0",
    description: "Versi premium dengan material terbaik.",
  },
];

export function getProductById(id: number | string): Product | undefined {
  const productId = Number(id);
  if (isNaN(productId)) return undefined;
  return trendingProducts.find((product) => product.id === productId);
}