export interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: number;
  description: string;
}

export const allProducts: Product[] = [
  {
    id: 1,
    image: "/images/nike-2.jpeg",
    title: "Nike Air Jordan Force",
    price: 4500000,
    rating: 5.0,
    description:
      "Sepatu premium Nike dengan teknologi Air untuk kenyamanan maksimal.",
  },
  {
    id: 2,
    image: "/images/sepatu-1.jpeg",
    title: "Nike White Blue",
    price: 4500000,
    rating: 4.8,
    description:
      "Desain modern dengan material berkualitas tinggi.",
  },
  {
    id: 3,
    image: "/images/nike-2.jpeg",
    title: "Nike Classic Brown",
    price: 3200000,
    rating: 4.9,
    description:
      "Sepatu bergaya klasik dengan warna coklat elegan.",
  },
  {
    id: 4,
    image: "/images/sepatu-1.jpeg",
    title: "Nike Runner Elevate",
    price: 2800000,
    rating: 4.7,
    description:
      "Nyaman digunakan untuk aktivitas sehari-hari.",
  },
  {
    id: 5,
    image: "/images/nike-2.jpeg",
    title: "Nike Air Zoom Pegasus",
    price: 2500000,
    rating: 4.8,
    description:
      "Cocok untuk olahraga dan lari jarak jauh.",
  },
  {
    id: 6,
    image: "/images/sepatu-1.jpeg",
    title: "Nike Blazer Mid 77",
    price: 1800000,
    rating: 4.6,
    description:
      "Model klasik yang tetap populer hingga sekarang.",
  },
  {
    id: 7,
    image: "/images/nike-2.jpeg",
    title: "Nike React Infinity",
    price: 2950000,
    rating: 4.7,
    description:
      "Teknologi React Foam untuk kenyamanan ekstra.",
  },
  {
    id: 8,
    image: "/images/sepatu-1.jpeg",
    title: "Nike SB Dunk Low",
    price: 3100000,
    rating: 4.9,
    description:
      "Favorit pecinta sneakers dengan desain ikonik.",
  },
  {
    id: 9,
    image: "/images/nike-2.jpeg",
    title: "Nike Vapormax Flyknit",
    price: 3200000,
    rating: 4.8,
    description:
      "Teknologi Vapormax dengan bantalan udara penuh.",
  },
  {
    id: 10,
    image: "/images/sepatu-1.jpeg",
    title: "Nike Joyride Dual",
    price: 2100000,
    rating: 4.5,
    description:
      "Nyaman dipakai sepanjang hari.",
  },
  {
    id: 11,
    image: "/images/nike-2.jpeg",
    title: "Nike Air Max Pro",
    price: 3800000,
    rating: 4.8,
    description:
      "Desain sporty dengan Air Max terbaru.",
  },
  {
    id: 12,
    image: "/images/sepatu-1.jpeg",
    title: "Nike Dunk Low Retro",
    price: 2100000,
    rating: 4.9,
    description:
      "Sepatu retro yang kembali populer.",
  },
  {
    id: 13,
    image: "/images/nike-2.jpeg",
    title: "Nike Air Force 1",
    price: 1500000,
    rating: 4.8,
    description:
      "Sepatu legendaris Nike sepanjang masa.",
  },
  {
    id: 14,
    image: "/images/sepatu-1.jpeg",
    title: "Nike Blazer Mid",
    price: 1600000,
    rating: 4.6,
    description:
      "Tampilan simpel namun tetap elegan.",
  },
  {
    id: 15,
    image: "/images/nike-2.jpeg",
    title: "Nike React Vision",
    price: 2300000,
    rating: 4.7,
    description:
      "Desain futuristik dengan kenyamanan maksimal.",
  },
  {
    id: 16,
    image: "/images/sepatu-1.jpeg",
    title: "Nike White Blue Premium",
    price: 4500000,
    rating: 5.0,
    description:
      "Versi premium dengan material terbaik.",
  },
];

export const carouselProducts = allProducts.slice(0, 4);

export const trendingProducts = [
  allProducts[0],
  allProducts[15],
];

export const selectedProducts = allProducts.slice(0, 10);

export const trendingPageProducts = [
  allProducts[0],
  allProducts[15],
  allProducts[2],
  allProducts[3],
  allProducts[10],
  allProducts[11],
  allProducts[12],
  allProducts[13],
  allProducts[14],
];

export function getProductById(id: number | string): Product | undefined {
  const productId = Number(id);

  if (isNaN(productId)) return undefined;

  return allProducts.find((product) => product.id === productId);
}