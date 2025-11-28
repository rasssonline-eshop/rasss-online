import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { formatUSDToPKR } from "@/lib/currency";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    priceUSD: 299,
    image: "🎧",
    discount: "20% OFF",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    priceUSD: 499,
    image: "⌚",
    discount: "15% OFF",
  },
  {
    id: 3,
    name: "Designer Sunglasses",
    priceUSD: 159,
    image: "🕶️",
    discount: "30% OFF",
  },
  {
    id: 4,
    name: "Laptop Backpack",
    priceUSD: 89,
    image: "🎒",
    discount: "25% OFF",
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-background pt-6 md:pt-8">
      <div className="relative w-screen left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm md:text-base font-semibold py-2 md:py-3 mb-2 md:mb-3">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <span className="uppercase tracking-wide">Extra discount 20% on credit & prepaid cards</span>
        </div>
      </div>
      <div className="relative w-screen left-1/2 -translate-x-1/2 h-[320px] md:h-[380px] lg:h-[480px] animate-scale-in mb-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            })
          ]}
          className="w-full h-full"
        >
          <CarouselContent className="h-full items-stretch">
            {featuredProducts.map((product) => (
              <CarouselItem key={product.id} className="h-full">
                <div className="relative h-full overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-red-500">
                  <div className="absolute left-6 md:left-10 top-6 md:top-10 text-white max-w-sm">
                    <div className="text-lg md:text-xl font-semibold mb-1">Glowy Skin</div>
                    <div className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">Discount</div>
                    <div className="text-5xl md:text-7xl lg:text-8xl font-black">50<span className="text-3xl md:text-4xl align-top">% </span><span className="text-2xl md:text-3xl">off</span></div>
                    <Button className="mt-4 rounded-none bg-primary text-primary-foreground px-6">Shop now</Button>
                  </div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-12 md:h-14 lg:h-16 bg-white/20" />
                  <div className="flex h-full items-end justify-center gap-6 pb-8">
                    {[1,2,3].map((i) => (
                      <img
                        key={i}
                        src={`https://picsum.photos/seed/hero-${product.id}-${i}/500/700`}
                        alt={product.name}
                        className="h-[220px] md:h-[280px] lg:h-[340px] w-auto object-cover shadow-xl"
                      />
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            variant="ghost"
            className="left-2 h-5 w-5 bg-white/40 dark:bg-white/10 border border-white/30 text-foreground backdrop-blur-sm hover:bg-white/60 dark:hover:bg-white/20"
          />
          <CarouselNext
            variant="ghost"
            className="right-2 h-5 w-5 bg-white/40 dark:bg-white/10 border border-white/30 text-foreground backdrop-blur-sm hover:bg-white/60 dark:hover:bg-white/20"
          />
        </Carousel>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/20" />
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-start">
              <img src="/Rasss-logo.png" alt="Rasss logo" className="h-24 w-auto md:h-40 object-contain mix-blend-multiply brightness-110 contrast-125 saturate-150 " />
            </div>
            <div className="inline-block rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent-foreground">
              ✨ Shop Everything You Need
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your One-Stop
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Marketplace
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md">
              Discover millions of products from trusted sellers. 
              Electronics, Fashion, Home & more - all in one place.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="rounded-full bg-accent hover:bg-accent-hover text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              >
                Sell on Rasss
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10M+</div>
                <div className="text-xs text-muted-foreground">Products</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500K+</div>
                <div className="text-xs text-muted-foreground">Sellers</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          
        </div>
      </div>

      

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 fill-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
