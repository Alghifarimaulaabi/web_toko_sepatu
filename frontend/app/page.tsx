import Navbar from "./components/navbar";
import Hero from "./components/hero";
import TrendingCard from "./components/TrendingCard";

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-[#EFECE7]">
      <Navbar />
      <Hero />
      <TrendingCard />
    </main>
    </>
  );
}
