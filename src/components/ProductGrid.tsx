import ProductCard from "./ProductCard";
import { products } from "@/data/products";

type Props = {
  title?: string;
  subtitle?: string;
};

const ProductGrid = ({ title = "Featured Products", subtitle = "Best-selling health and wellness essentials" }: Props) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} style={{ animationDelay: `${index * 50}ms` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
