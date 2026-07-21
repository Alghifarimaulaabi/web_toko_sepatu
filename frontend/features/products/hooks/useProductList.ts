import { useState, useEffect } from "react";
import { API_URL } from "@/lib/api";

export interface ProductListItem {
  id: number;
  image: string;
  title: string;
  price: string;
  rating: number;
  terjual?: number;
  kategori?: string;
}

interface UseProductListOptions {
  itemsPerPage?: number;
  sortByTrending?: boolean;
}

export const useProductList = (options: UseProductListOptions = {}) => {
  const { itemsPerPage = 8, sortByTrending = false } = options;

  const [products, setProducts] = useState<ProductListItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("SEMUA");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/api/products`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          let formatted: ProductListItem[] = data.map((p: any) => ({
            id: p.id,
            image: p.gambar,
            title: p.nama_produk,
            price: `Rp. ${Number(p.harga).toLocaleString("id-ID")}`,
            rating: Number(p.rating ?? 0),
            terjual: Number(p.terjual ?? 0),
            kategori: p.kategori,
          }));

          if (sortByTrending) {
            formatted = formatted.sort(
              (a, b) => (b.rating - a.rating) || ((b.terjual ?? 0) - (a.terjual ?? 0)) || b.id - a.id
            );
          }

          setProducts(formatted);
        }
      })
      .catch((err) => console.error("Error fetching products:", err))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchCategory =
      selectedCategory === "SEMUA" || product.kategori === selectedCategory;
    return matchSearch && matchCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return {
    products: currentProducts,
    allProducts: filteredProducts,
    searchQuery,
    setSearchQuery: handleSearch,
    currentPage,
    setCurrentPage,
    totalPages,
    selectedCategory,
    setSelectedCategory: handleCategoryChange,
    handlePrevPage,
    handleNextPage,
    loading,
  };
};
