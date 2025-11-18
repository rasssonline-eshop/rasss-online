import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import ProductGrid from "@/components/ProductGrid";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";
 

const Index = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoryGrid />
        <ProductGrid />
        <TrustBadges />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
