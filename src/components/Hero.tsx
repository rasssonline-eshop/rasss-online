import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: "$299",
    image: "🎧",
    discount: "20% OFF"
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: "$499",
    image: "⌚",
    discount: "15% OFF"
  },
  {
    id: 3,
    name: "Designer Sunglasses",
    price: "$159",
    image: "🕶️",
    discount: "30% OFF"
  },
  {
    id: 4,
    name: "Laptop Backpack",
    price: "$89",
    image: "🎒",
    discount: "25% OFF"
  }
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
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

          {/* Hero Carousel with Popular Products */}
          <div className="relative h-[400px] md:h-[500px] animate-scale-in">
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
              <CarouselContent className="h-full">
                {featuredProducts.map((product) => (
                  <CarouselItem key={product.id} className="h-full">
                    <div className="relative h-full rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm overflow-hidden">
                      {/* Discount Badge */}
                      <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg z-10">
                        {product.discount}
                      </div>
                      
                      <div className="flex flex-col h-full items-center justify-center p-8">
                        <div className="text-9xl mb-6 animate-pulse">{product.image}</div>
                        <h3 className="text-2xl font-bold text-center mb-2">{product.name}</h3>
                        <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {product.price}
                        </p>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute top-10 right-10 h-20 w-20 rounded-full bg-accent/30 blur-2xl animate-pulse" />
                      <div className="absolute bottom-10 left-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
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
