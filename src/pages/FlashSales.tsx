import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FlashSales = () => {
  const deals = products.filter((p) => p.discount && p.discount > 0);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">Flash Sales</h1>
          <p className="text-muted-foreground">Limited-time discounts</p>
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