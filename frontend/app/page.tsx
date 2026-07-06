import Navbar from "./components/navbar";
import Hero from "./components/hero";
import TrendingCard from "./components/TrendingCard";
import ProductCarousel from "./components/ProductCarousel";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
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
