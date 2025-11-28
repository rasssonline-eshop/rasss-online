import { useEffect, useMemo, useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FlashSales = () => {
  const deals = useMemo(() => products.filter((p) => p.discount && p.discount > 0), []);
  const [remaining, setRemaining] = useState<string>("");
  const [slot, setSlot] = useState<string>("Morning");

  useEffect(() => {
    const target = new Date();
    target.setHours(target.getHours() + 6);
    const id = setInterval(() => {
      const now = new Date().getTime();
      const diff = target.getTime() - now;
      const h = Math.max(0, Math.floor(diff / (1000 * 60 * 60)));
      const m = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
      const s = Math.max(0, Math.floor((diff % (1000 * 60)) / 1000));
      setRemaining(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
    <section className="py-10 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        <Card className="mb-6 border-2">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-500" />
            <div className="relative p-6 md:p-8 text-white flex items-center justify-between">
              <div>
                <div className="text-sm md:text-base font-semibold">Flash Sales</div>
                <div className="text-2xl md:text-4xl font-black">Ends in {remaining || "--:--:--"}</div>
              </div>
              <Button className="rounded-none bg-white text-red-700">Shop Now</Button>
            </div>
          </div>
        </Card>

        <div className="flex items-center gap-2 mb-6">
          {["Morning", "Afternoon", "Evening"].map((s) => (
            <Button
              key={s}
              variant={slot === s ? "default" : "outline"}
              className={slot === s ? "rounded-none" : "rounded-none"}
              onClick={() => setSlot(s)}
            >
              {s}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 50}ms` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
      </main>
      <Footer />
    </div>
  );
};

export default FlashSales;