import { useState, useEffect } from "react";
import { API_URL } from "@/lib/api";
import { getTestimoniByProduk, Testimoni } from "@/features/reviews/services/testimoniService";
import { useWishlist } from "@/features/wishlist/context/WishlistContext";
import { useCart } from "@/features/cart/context/CartContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export interface ColorOption {
  name: string;
  code: string;
}

export interface ProductDetailData {
  id: number;
  title: string;
  price: string;
  rating: string;
  reviews: number;
  description: string;
  image: string;
  colors: ColorOption[];
  sizes: string[];
}

export interface ProdukVarian {
  id: number;
  ukuran: string;
  stok: number;
}

export const useProductDetail = (id: string) => {
  const router = useRouter();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart, setCheckoutItems } = useCart();

  const [product, setProduct] = useState<ProductDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [testimonis, setTestimonis] = useState<Testimoni[]>([]);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [testimoniPage, setTestimoniPage] = useState(1);
  const [testimoniTotalPages, setTestimoniTotalPages] = useState(1);
  const [loadingTestimonis, setLoadingTestimonis] = useState(false);

  const [variants, setVariants] = useState<any[]>([]);
  const [availableColors, setAvailableColors] = useState<string[]>([]);
  const [availableSizes, setAvailableSizes] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [availableStock, setAvailableStock] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState<string>("");

  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [checkoutQuantity, setCheckoutQuantity] = useState(1);

  const numId = Number(id);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/api/products/${numId}`, { cache: "no-store" });
      if (!res.ok) throw new Error("Produk tidak ditemukan");
      const produk = await res.json();
      
      const v = produk.varian || [];
      setVariants(v);
      
      const colors = Array.from(new Set(v.map((item: any) => item.warna)));
      const sizes = Array.from(new Set(v.map((item: any) => item.ukuran)));
      
      setAvailableColors(colors as string[]);
      setAvailableSizes(sizes as string[]);
      
      if (colors.length > 0) setSelectedColor(colors[0] as string);
      if (sizes.length > 0) setSelectedSize(sizes[0] as string);

      const mainImage = produk.gambar.startsWith('http') ? produk.gambar : `${API_URL}${produk.gambar}`;

      setProduct({
        id: produk.id,
        title: produk.nama_produk,
        price: `Rp. ${Number(produk.harga).toLocaleString("id-ID")}`,
        rating: "5.0",
        reviews: 0,
        description: produk.deskripsi,
        image: mainImage,
        colors: [],
        sizes: [],
      });
      if (!currentImage) {
        setCurrentImage(mainImage);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchTestimonis = async (page: number = testimoniPage) => {
    try {
      setLoadingTestimonis(true);
      const data = await getTestimoniByProduk(numId, page, 5);
      setTestimonis(data.testimonis);
      setAverageRating(data.averageRating);
      setTotalReviews(data.totalReviews);
      setTestimoniTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error('Error fetching testimonis:', error);
    } finally {
      setLoadingTestimonis(false);
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchTestimonis(testimoniPage);
  }, [id, testimoniPage]);

  useEffect(() => {
    if (selectedColor && selectedSize) {
      const v = variants.find(v => v.warna === selectedColor && v.ukuran === selectedSize);
      setAvailableStock(v ? v.stok : 0);
      if (v && v.stok > 0 && quantity > v.stok) {
        setQuantity(v.stok);
      }
    }
  }, [selectedColor, selectedSize, variants, quantity]);

  useEffect(() => {
    if (selectedColor && product) {
      const v = variants.find(v => v.warna === selectedColor && v.gambar);
      if (v) {
        setCurrentImage(v.gambar.startsWith('http') ? v.gambar : `${API_URL}${v.gambar}`);
      } else {
        setCurrentImage(product.image);
      }
    }
  }, [selectedColor, variants, product]);

  const handleAction = (action: string) => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (!token) {
      setShowLoginModal(true);
      return;
    }

    if (!product) return;
    
    if (availableStock < 1) {
      toast.error("Stok untuk varian ini habis");
      return;
    }

    if (action === "cart") {
      addToCart(product, quantity, selectedColor, selectedSize);
      toast.success(`${product.title} ditambahkan ke keranjang!`);
    } else if (action === "buy") {
      setCheckoutQuantity(quantity);
      setShowCheckoutModal(true);
    }
  };

  const handleCheckout = () => {
    if (!product) return;
    setShowCheckoutModal(false);
    const checkoutItem = {
      product: {
        id: product.id,
        image: currentImage || product.image,
        title: product.title,
        description: product.description,
        price: parseInt(product.price.replace(/\D/g, "")),
        rating: Number(product.rating),
      },
      quantity: checkoutQuantity,
      warna: selectedColor,
      ukuran: selectedSize
    };
    setCheckoutItems([checkoutItem]);
    router.push("/checkout");
  };

  return {
    product,
    loading,
    testimonis,
    averageRating,
    totalReviews,
    testimoniPage,
    setTestimoniPage,
    testimoniTotalPages,
    loadingTestimonis,
    variants,
    availableColors,
    availableSizes,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
    availableStock,
    currentImage,
    quantity,
    setQuantity,
    isHovered,
    setIsHovered,
    showLoginModal,
    setShowLoginModal,
    showCheckoutModal,
    setShowCheckoutModal,
    checkoutQuantity,
    setCheckoutQuantity,
    handleAction,
    handleCheckout,
    toggleWishlist,
    isInWishlist
  };
};
