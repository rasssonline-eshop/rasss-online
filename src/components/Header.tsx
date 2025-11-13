import { Search, ShoppingCart, User, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [cartCount] = useState(3);
  const [wishlistCount] = useState(5);

  const categories = [
    "Health & Wellness",
    "Beauty & Personal Care",
    "Mother & Baby",
    "Vitamins & Supplements",
    "Medical Devices",
    "Skincare",
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        🎉 Free Delivery on Orders Over $50 | Shop Now & Save!
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
              <span className="text-xl font-bold text-white">H+</span>
            </div>
            <span className="hidden text-xl font-bold text-primary md:block">HealthPlus</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for products, brands, and more..."
                className="w-full rounded-full border-2 border-input bg-background pl-10 pr-4 py-5 focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-primary/10">
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {wishlistCount}
                </span>
              )}
            </Button>

            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <User className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-primary/10">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden rounded-full hover:bg-primary/10">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center justify-center gap-6 py-3">
            {categories.map((category) => (
              <button
                key={category}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
