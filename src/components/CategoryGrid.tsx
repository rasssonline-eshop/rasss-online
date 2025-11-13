import { Smartphone, Shirt, Home, Dumbbell, Sparkles, Gamepad2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  {
    name: "Electronics",
    icon: Smartphone,
    color: "from-primary/20 to-primary/10",
    count: "45,000+",
  },
  {
    name: "Fashion",
    icon: Shirt,
    color: "from-secondary/20 to-secondary/10",
    count: "82,000+",
  },
  {
    name: "Home & Garden",
    icon: Home,
    color: "from-accent/20 to-accent/10",
    count: "38,000+",
  },
  {
    name: "Sports",
    icon: Dumbbell,
    color: "from-primary/20 to-primary-light/10",
    count: "29,000+",
  },
  {
    name: "Beauty",
    icon: Sparkles,
    color: "from-secondary/20 to-primary/10",
    count: "52,000+",
  },
  {
    name: "Toys & Games",
    icon: Gamepad2,
    color: "from-accent/20 to-primary/10",
    count: "35,000+",
  },
];

const CategoryGrid = () => {
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-slide-up">
          {categories.map((category, index) => (
            <Card
              key={category.name}
              className="group cursor-pointer border-2 hover:border-primary hover:shadow-lg transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 text-center">
                <div className={`mx-auto mb-4 h-16 w-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-primary" />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
