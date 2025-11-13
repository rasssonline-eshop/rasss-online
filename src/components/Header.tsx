import { Search, ShoppingCart, User, Heart, Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { formatUSDToPKR } from "@/lib/currency";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { count: cartCount } = useCart();
  const [wishlistCount] = useState(5);
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const categories = [
    { name: "Vitamins & Supplements", slug: "vitamins-supplements" },
    { name: "Digestive Health", slug: "digestive-health" },
    { name: "Heart Health", slug: "heart-health" },
    { name: "Daily Wellness", slug: "daily-wellness" },
    { name: "Skin & Joint", slug: "skin-joint" },
    { name: "Sleep & Relaxation", slug: "sleep-relaxation" },
    { name: "Immune Support", slug: "immune-support" },
    { name: "Energy Support", slug: "energy-support" },
  ];
  const productBar = [
    { label: "Flash Sales", path: "/flash-sales" },
    { label: "E-Services", path: "/e-services" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-gradient-to-r from-primary to-secondary text-primary-foreground">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        🎉 Free Shipping on Orders Over {formatUSDToPKR(50)} | Shop Now & Save!
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center">
              <img src="/Rasss-logo.png" alt="Rasss logo" className="h-20 w-auto md:h-24 object-contain brightness-110 contrast-125 saturate-150 drop-shadow-xl ring-1 ring-white/60 rounded-md bg-white/5" />
            </div>
            <span className="hidden text-xl font-bold text-yellow-400 md:block">Rasss</span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="hidden md:flex items-center gap-2 rounded-full">
                <Menu className="h-5 w-5" />
                All Categories
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              <DropdownMenuLabel>All Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categories.map((c) => (
                <DropdownMenuItem key={c.slug} onClick={() => navigate(`/category/${c.slug}`)}>
                  {c.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

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
            <div className="hidden md:flex items-center gap-2 mr-2">
              <Sun className="h-4 w-4" />
              <Switch checked={isDark} onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")} />
              <Moon className="h-4 w-4" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full hover:bg-primary/10"
              onClick={() => toast("Added to wishlist")}
            >
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {wishlistCount}
                </span>
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10"
              onClick={() => navigate("/seller")}
            >
              <User className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full hover:bg-primary/10"
              onClick={() => navigate("/cart")}
            >
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
      <nav className="border-t border-border bg-transparent">
          <div className="container mx-auto px-4">
            <div className="hidden md:flex items-center justify-center gap-6 py-3">
              {productBar.map((item) => (
                <button
                  key={item.label}
                  className="text-sm font-medium text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
      </nav>
    </header>
  );
};

export default Header;
