import Navbar from "./components/navbar";
import Hero from "./components/hero";
import TrendingCard from "./components/TrendingCard";
import ProductCarousel from "./components/ProductCarousel";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EFECE7] font-sans selection:bg-[#8D6E63] selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Trending Section */}
      <TrendingCard />
      
      {/* Why Us Section */}
      <WhyUs />
      
      {/* Product Carousel Section */}
      <ProductCarousel />
      
      {/* Footer Section */}
      <Footer />
    </main>
  );
}
