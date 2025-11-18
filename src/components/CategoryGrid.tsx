import { Pill, Leaf, Activity, Star, User, Moon, Shield, Battery } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { products } from "@/data/products";

const categories = [
  { name: "Vitamins & Supplements", slug: "vitamins-supplements", icon: Pill, color: "from-primary/20 to-primary/10" },
  { name: "Digestive Health", slug: "digestive-health", icon: Leaf, color: "from-secondary/20 to-secondary/10" },
  { name: "Heart Health", slug: "heart-health", icon: Activity, color: "from-accent/20 to-accent/10" },
  { name: "Daily Wellness", slug: "daily-wellness", icon: Star, color: "from-primary/20 to-primary-light/10" },
  { name: "Skin & Joint", slug: "skin-joint", icon: User, color: "from-secondary/20 to-primary/10" },
  { name: "Sleep & Relaxation", slug: "sleep-relaxation", icon: Moon, color: "from-accent/20 to-primary/10" },
  { name: "Immune Support", slug: "immune-support", icon: Shield, color: "from-primary/20 to-secondary/10" },
  { name: "Energy Support", slug: "energy-support", icon: Battery, color: "from-secondary/20 to-accent/10" },
].map(c => ({
  ...c,
  count: products.filter(p => p.categorySlug === c.slug).length,
}));

const CategoryGrid = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse millions of products across all categories - Find anything you need
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 animate-slide-up">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.slug}
                role="button"
                aria-label={`Browse ${category.name}`}
                tabIndex={0}
                onClick={() => navigate(`/category/${category.slug}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") navigate(`/category/${category.slug}`);
                }}
                className="group cursor-pointer border-2 hover:border-primary hover:shadow-lg transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6 text-center">
                  <div className={`mx-auto mb-4 h-16 w-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.count} products
                  </p>
                </div>
                <div className="h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
