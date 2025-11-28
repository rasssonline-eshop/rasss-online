import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import ProductGrid from "@/components/ProductGrid";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
 

const Index = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoryGrid />

        <section className="container mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="relative overflow-hidden border-2">
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-500" />
              <div className="relative p-8 text-white">
                <div className="text-xl font-semibold">Exclusive Offer</div>
                <div className="text-4xl md:text-5xl font-black">Up to 50% Off</div>
                <Button className="mt-4 rounded-none bg-white text-red-700">Shop Now</Button>
              </div>
            </Card>
            <Card className="relative overflow-hidden border-2">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500" />
              <div className="relative p-8 text-white">
                <div className="text-xl font-semibold">Wellness Picks</div>
                <div className="text-4xl md:text-5xl font-black">New Arrivals</div>
                <Button className="mt-4 rounded-none bg-white text-teal-700">Shop Now</Button>
              </div>
            </Card>
          </div>
        </section>

        <ProductGrid title="Top Deals" subtitle="Handpicked offers across categories" />
        <ProductGrid title="Recommended For You" subtitle="Popular and trending items" />
        <TrustBadges />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
