import { Search, ShoppingCart, User, Heart, Menu, Sun, Moon, Zap, Smartphone, Package, Pill, Leaf, Activity, Star, Shield, Battery } from "lucide-react";
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const { count: cartCount } = useCart();
  const [wishlistCount] = useState(5);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const categories = [
    { name: "Vitamins & Supplements", slug: "vitamins-supplements", icon: Pill },
    { name: "Digestive Health", slug: "digestive-health", icon: Leaf },
    { name: "Heart Health", slug: "heart-health", icon: Activity },
    { name: "Daily Wellness", slug: "daily-wellness", icon: Star },
    { name: "Skin & Joint", slug: "skin-joint", icon: User },
    { name: "Sleep & Relaxation", slug: "sleep-relaxation", icon: Moon },
    { name: "Immune Support", slug: "immune-support", icon: Shield },
    { name: "Energy Support", slug: "energy-support", icon: Battery },
  ];

  const productBar = [
    { label: "Offers", path: "/flash-sales", icon: Package },
    { label: "Flash Sales", path: "/flash-sales", icon: Zap },
    { label: "E-Services", path: "/e-services", icon: Smartphone },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-blue-200/30 dark:border-blue-800/30 shadow">
      <div className="bg-teal-600 text-white text-xs md:text-sm font-semibold">
        <div className="container mx-auto px-3 md:px-4 py-1.5 md:py-2 flex items-center justify-between">
          <span>Extra discount 20% on credit & prepaid cards</span>
          <span className="hidden md:inline">Free delivery on orders above PKR 5,000</span>
        </div>
      </div>
      <div className="relative">

        {/* Main Header */}
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-3.5 lg:py-4">
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-6">
            {/* Logo Section - Left Aligned with Gradient Text */}
            <div 
              className="flex items-center gap-1.5 sm:gap-2.5 cursor-pointer group"
              onClick={() => navigate("/")}
            >
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 via-pink-300/20 to-purple-300/20 blur-lg group-hover:blur-xl transition-all duration-500" />
                <div className="relative bg-white/95 dark:bg-white/90 p-1.5 sm:p-2 shadow-2xl group-hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-all duration-500 ring-1 ring-white/40 group-hover:ring-yellow-300/50 group-hover:scale-105">
                  <img
                    src="/Rasss-logo.png"
                    alt="Rasss"
                    className="h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-11 lg:w-11 object-contain transform group-hover:rotate-6 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(251,191,36,0.5)] leading-tight tracking-wide group-hover:scale-105 transition-transform duration-300">
                  Rasss
                </span>
                <span className="hidden sm:block text-[9px] md:text-[10px] font-bold bg-gradient-to-r from-cyan-200 via-emerald-200 to-teal-200 bg-clip-text text-transparent -mt-0.5 md:-mt-1 tracking-[0.2em] uppercase">
                  Health & Wellness
                </span>
              </div>
            </div>

            {/* All Categories - Desktop */}
            <div className="hidden lg:flex">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    className="rounded-none bg-white/90 hover:bg-white dark:bg-white/20 dark:hover:bg-white/30 border border-white/30 text-blue-700 dark:text-white backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-lg font-semibold h-11 px-4"
                    size="sm"
                  >
                    <Menu className="h-4 w-4 mr-2" />
                    All Categories
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl border-blue-200/50 dark:border-blue-800/50 shadow-2xl rounded-none">
                  <DropdownMenuLabel className="text-base font-bold text-blue-700 dark:text-blue-400">
                    All Categories
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-blue-200/50 dark:bg-blue-800/50" />
                  {categories.map((c) => {
                    const Icon = c.icon;
                    return (
                      <DropdownMenuItem
                        key={c.slug}
                        onClick={() => navigate(`/category/${c.slug}`)}
                        className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-colors py-3 group rounded-none"
                      >
                        <Icon className="mr-3 h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">{c.name}</span>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-xl xl:max-w-2xl mx-4">
              <div className="relative w-full group">
                <div className="absolute inset-0 bg-white/20 blur-md transition-all duration-300" />
                <div className="relative flex items-center">
                  <Search className="absolute left-4 h-5 w-5 text-blue-600 dark:text-blue-300 z-10" />
                  <Input
                    type="search"
                    placeholder="Search for wellness products..."
                    className="w-full rounded-none bg-white dark:bg-gray-800 border-2 border-white/40 dark:border-gray-700 pl-12 pr-4 py-6 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-white focus:border-blue-300 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-200/50 dark:focus:ring-blue-500/30 transition-all duration-300 shadow-xl font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Actions - Redesigned Icons */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              {/* Theme Toggle - Elegant Design */}
              <div className="hidden xl:flex items-center gap-2.5 px-4 py-2 rounded-none bg-white border border-blue-100 shadow hover:bg-blue-50 transition-all">
                <Sun className="h-4 w-4 text-amber-500" />
                <Switch
                  checked={isDark}
                  onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                  className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-amber-400"
                />
                <Moon className="h-4 w-4 text-indigo-600" />
              </div>

              {/* Wishlist - Subtle Design */}
              <Button
                variant="ghost"
                size="icon"
                className="relative rounded-none bg-transparent hover:bg-blue-50 border border-blue-100 h-11 w-11 text-blue-700 dark:text-white transition-all shadow"
                onClick={() => toast("Added to wishlist")}
              >
                <Heart className="h-5 w-5 drop-shadow-md" />
                {wishlistCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow ring-2 ring-white animate-pulse">
                    {wishlistCount}
                  </span>
                )}
              </Button>

              {/* Login & Register */}
              <Button
                variant="ghost"
                className="rounded-none bg-transparent hover:bg-blue-50 border border-blue-100 h-11 px-4 text-blue-700 dark:text-white transition-all shadow font-semibold"
                onClick={() => navigate("/seller")}
              >
                <User className="h-4 w-4 mr-2" />
                Login & Register
              </Button>

              {/* Shopping Cart - Subtle Design */}
              <Button
                variant="ghost"
                size="icon"
                className="relative rounded-none bg-transparent hover:bg-blue-50 border border-blue-100 h-11 w-11 text-blue-700 dark:text-white transition-all shadow"
                onClick={() => navigate("/cart")}
              >
                <ShoppingCart className="h-5 w-5 drop-shadow-md" />
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white shadow ring-2 ring-white">
                    {cartCount}
                  </span>
                )}
              </Button>

              
            </div>

            {/* Tablet Actions (md to lg) */}
            <div className="hidden md:flex lg:hidden items-center gap-2 ml-auto">
              <Button
                variant="ghost"
                size="icon"
                className="relative rounded-none bg-white/15 hover:bg-white/25 border border-white/10 h-10 w-10 text-white shadow-md backdrop-blur-sm"
                onClick={() => navigate("/cart")}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-[10px] font-bold text-white shadow-lg ring-2 ring-white/60">
                    {cartCount}
                  </span>
                )}
              </Button>

              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-none bg-white/15 hover:bg-white/25 border border-white/10 h-10 w-10 text-white shadow-md backdrop-blur-sm"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[340px] bg-gradient-to-br from-white via-blue-50/50 to-cyan-50 dark:from-gray-900 dark:via-blue-950/50 dark:to-slate-900 border-l border-blue-200/30 dark:border-blue-800/30">
                  <SheetHeader>
                    <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                      Menu
                    </SheetTitle>
                  </SheetHeader>
                  
                  <div className="flex flex-col gap-6 mt-8">
                    {/* Search */}
                    <div className="relative group">
                      <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-500 z-10" />
                      <Input
                        type="search"
                        placeholder="Search products..."
                        className="w-full rounded-none pl-11 pr-4 py-6 text-sm border-2 border-blue-200 dark:border-blue-800 focus:border-blue-400 dark:focus:border-blue-600 shadow-lg bg-white dark:bg-gray-800"
                      />
                    </div>

                    {/* Theme Toggle */}
                    <div className="flex items-center justify-between p-4 rounded-none bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 border-2 border-blue-200 dark:border-blue-700 shadow-md">
                      <span className="text-sm font-bold text-blue-900 dark:text-blue-100">Dark Mode</span>
                      <div className="flex items-center gap-2">
                        <Sun className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                        <Switch
                          checked={isDark}
                          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                          className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-amber-400"
                        />
                        <Moon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-2">
                      <h3 className="font-bold text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider px-2">Quick Links</h3>
                      <div className="flex flex-col gap-1">
                        {productBar.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Button
                              key={item.label}
                              variant="ghost"
                              className="justify-start h-12 rounded-none hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 hover:translate-x-1 text-blue-900 dark:text-blue-100 font-medium"
                              onClick={() => {
                                navigate(item.path);
                                setMobileMenuOpen(false);
                              }}
                            >
                              <Icon className="mr-3 h-5 w-5 text-blue-600 dark:text-blue-400" />
                              <span>{item.label}</span>
                            </Button>
                          );
                        })}
                        <Button
                          variant="ghost"
                          className="justify-start h-12 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 hover:translate-x-1 text-blue-900 dark:text-blue-100 font-medium"
                          onClick={() => {
                            navigate("/seller");
                            setMobileMenuOpen(false);
                          }}
                        >
                          <User className="h-5 w-5 mr-3 text-blue-600 dark:text-blue-400" />
                          <span>My Account</span>
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start h-12 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 hover:translate-x-1 text-blue-900 dark:text-blue-100 font-medium"
                          onClick={() => toast("Wishlist opened")}
                        >
                          <Heart className="h-5 w-5 mr-3 text-blue-600 dark:text-blue-400" />
                          <span>Wishlist</span>
                          {wishlistCount > 0 && (
                            <span className="ml-auto bg-gradient-to-r from-rose-400 to-pink-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                              {wishlistCount}
                            </span>
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Categories */}
                    <div className="space-y-2">
                      <h3 className="font-bold text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider px-2">Categories</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {categories.map((c) => {
                          const Icon = c.icon;
                          return (
                            <Button
                              key={c.slug}
                              variant="outline"
                              className="h-24 flex-col gap-2 rounded-xl bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/50 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105 shadow-md"
                              onClick={() => {
                                navigate(`/category/${c.slug}`);
                                setMobileMenuOpen(false);
                              }}
                            >
                              <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                              <span className="text-xs font-semibold text-center leading-tight text-blue-900 dark:text-blue-100">
                                {c.name}
                              </span>
                            </Button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Mobile Actions (below md) */}
            <div className="flex md:hidden items-center gap-1.5 ml-auto">
              {/* Mobile Search Button */}
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/15 hover:bg-white/25 border border-white/10 h-9 w-9 text-white shadow-md backdrop-blur-sm"
              >
                <Search className="h-4 w-4" />
              </Button>

              {/* Cart - Mobile */}
              <Button
                variant="ghost"
                size="icon"
                className="relative rounded-full bg-white/15 hover:bg-white/25 border border-white/10 h-9 w-9 text-white shadow-md backdrop-blur-sm"
                onClick={() => navigate("/cart")}
              >
                <ShoppingCart className="h-4 w-4" />
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-[10px] font-bold text-white shadow-lg ring-2 ring-white/60">
                    {cartCount}
                  </span>
                )}
              </Button>

              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/15 hover:bg-white/25 border border-white/10 h-9 w-9 text-white shadow-md backdrop-blur-sm"
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[340px] bg-gradient-to-br from-white via-blue-50/50 to-cyan-50 dark:from-gray-900 dark:via-blue-950/50 dark:to-slate-900 border-l border-blue-200/30 dark:border-blue-800/30">
                  <SheetHeader>
                    <SheetTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                      Menu
                    </SheetTitle>
                  </SheetHeader>
                  
                  <div className="flex flex-col gap-5 sm:gap-6 mt-6 sm:mt-8">
                    {/* Mobile Search */}
                    <div className="relative group">
                      <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-500 z-10" />
                      <Input
                        type="search"
                        placeholder="Search products..."
                        className="w-full rounded-full pl-11 pr-4 py-5 sm:py-6 text-sm border-2 border-blue-200 dark:border-blue-800 focus:border-blue-400 dark:focus:border-blue-600 shadow-lg bg-white dark:bg-gray-800"
                      />
                    </div>

                    {/* Theme Toggle */}
                    <div className="flex items-center justify-between p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 border-2 border-blue-200 dark:border-blue-700 shadow-md">
                      <span className="text-sm font-bold text-blue-900 dark:text-blue-100">Dark Mode</span>
                      <div className="flex items-center gap-2">
                        <Sun className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                        <Switch
                          checked={isDark}
                          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                          className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-amber-400"
                        />
                        <Moon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-2">
                      <h3 className="font-bold text-xs sm:text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider px-2">Quick Links</h3>
                      <div className="flex flex-col gap-1">
                        {productBar.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Button
                              key={item.label}
                              variant="ghost"
                              className="justify-start h-11 sm:h-12 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 hover:translate-x-1 text-blue-900 dark:text-blue-100 font-medium"
                              onClick={() => {
                                navigate(item.path);
                                setMobileMenuOpen(false);
                              }}
                            >
                              <Icon className="mr-3 h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                              <span className="text-sm sm:text-base">{item.label}</span>
                            </Button>
                          );
                        })}
                        <Button
                          variant="ghost"
                          className="justify-start h-11 sm:h-12 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 hover:translate-x-1 text-blue-900 dark:text-blue-100 font-medium"
                          onClick={() => {
                            navigate("/seller");
                            setMobileMenuOpen(false);
                          }}
                        >
                          <User className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-blue-600 dark:text-blue-400" />
                          <span className="text-sm sm:text-base">My Account</span>
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start h-11 sm:h-12 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 hover:translate-x-1 text-blue-900 dark:text-blue-100 font-medium"
                          onClick={() => toast("Wishlist opened")}
                        >
                          <Heart className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-blue-600 dark:text-blue-400" />
                          <span className="text-sm sm:text-base">Wishlist</span>
                          {wishlistCount > 0 && (
                            <span className="ml-auto bg-gradient-to-r from-rose-400 to-pink-500 text-white text-xs font-bold px-2 sm:px-2.5 py-1 rounded-full shadow-md">
                              {wishlistCount}
                            </span>
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Categories */}
                    <div className="space-y-2">
                      <h3 className="font-bold text-xs sm:text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider px-2">Categories</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {categories.map((c) => {
                          const Icon = c.icon;
                          return (
                            <Button
                              key={c.slug}
                              variant="outline"
                              className="h-20 sm:h-24 flex-col gap-2 rounded-xl bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/50 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105 shadow-md"
                              onClick={() => {
                                navigate(`/category/${c.slug}`);
                                setMobileMenuOpen(false);
                              }}
                            >
                              <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                              <span className="text-[10px] sm:text-xs font-semibold text-center leading-tight px-1 text-blue-900 dark:text-blue-100">
                                {c.name}
                              </span>
                            </Button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Bar */}
        <nav className="hidden lg:block bg-white dark:bg-gray-900 border-t border-blue-100 dark:border-blue-800">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex items-center justify-center gap-8 xl:gap-12 py-3">
              {productBar.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className="group relative flex items-center gap-2 text-sm font-bold text-blue-900 dark:text-blue-100 hover:text-teal-700 transition-all py-1"
                    onClick={() => navigate(item.path)}
                  >
                    <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    {item.label}
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-teal-600 transition-all rounded-none" />
                  </button>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;