import Navbar from "@/features/common/components/navbar";
import Hero from "@/features/common/components/hero";
import TrendingCard from "@/features/products/components/TrendingCard";
import ProductCarousel from "@/features/products/components/ProductCarousel";
import WhyUs from "@/features/common/components/WhyUs";
import Footer from "@/features/common/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      <Navbar />
      <Hero />
      
      {/* Trending Section */}
      <TrendingCard />
      
      
      {/* Product Carousel Section */}
      <ProductCarousel />
      
      {/* Why Us Section */}
      <WhyUs />
      
      {/* Footer Section */}
      <Footer />
    </main>
  );
}
