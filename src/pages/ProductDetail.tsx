import { useParams, Link } from "react-router-dom";
import { getProductById } from "@/data/products";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { formatUSDToPKR } from "@/lib/currency";
import { useCart } from "@/context/CartContext";
import { toast } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const product = id ? getProductById(id) : undefined;
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-16">
            <Card className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-2">Product not found</h2>
              <p className="text-muted-foreground mb-6">The product you are looking for does not exist.</p>
              <Link to="/">
                <Button>Go back home</Button>
              </Link>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-8 flex items-center justify-center bg-muted/30">
          <img
            src={`https://picsum.photos/seed/${encodeURIComponent(product.id)}-${encodeURIComponent(product.name)}/800/600`}
            alt={product.name}
            className="max-h-[500px] w-full object-cover rounded-md"
          />
        </Card>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-accent text-accent" />
            <span className="text-sm font-semibold">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
            {product.discount ? (
              <Badge className="ml-2 bg-accent text-accent-foreground">-{product.discount}%</Badge>
            ) : null}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">{formatUSDToPKR(product.price)}</span>
            {product.originalPrice ? (
              <span className="text-sm text-muted-foreground line-through">{formatUSDToPKR(product.originalPrice)}</span>
            ) : null}
          </div>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="flex gap-3">
            <Button
              className="rounded-full bg-accent text-accent-foreground"
              onClick={() => {
                addItem({ id: product.id, name: product.name, priceUSD: product.price, image: product.image, quantity: 1 });
                toast("Added to cart", { description: product.name });
              }}
            >
              Add to Cart
            </Button>
            <Link to="/">
              <Button variant="outline" className="rounded-full">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;