import { ShoppingCart, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatUSDToPKR } from "@/lib/currency";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { toast } from "@/components/ui/sonner";

interface ProductCardProps {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image?: string;
  discount?: number;
  inStock?: boolean;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  discount,
  inStock = true,
  id,
}: ProductCardProps) => {
  const { addItem } = useCart();
  const imgSrc = (typeof image === "string" && image.startsWith("http"))
    ? image
    : `https://picsum.photos/seed/${encodeURIComponent(String(id))}-${encodeURIComponent(name)}/600/600`;
  return (
    <Card className="group relative overflow-hidden border-2 hover:border-primary hover:shadow-xl transition-all duration-300 animate-scale-in">
      {/* Discount Badge */}
      {discount && (
        <Badge className="absolute top-3 left-3 z-10 bg-accent hover:bg-accent text-accent-foreground font-bold">
          -{discount}%
        </Badge>
      )}

      {/* Wishlist Button */}
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-3 right-3 z-10 h-9 w-9 rounded-full bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all"
      >
        <Heart className="h-4 w-4" />
      </Button>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={imgSrc}
          alt={name}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {!inStock && (
          <div className="absolute inset-0 bg-card/80 backdrop-blur-sm flex items-center justify-center">
            <Badge variant="destructive">Out of Stock</Badge>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-semibold">{rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({reviews} reviews)</span>
        </div>

        {/* Product Name */}
        <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors min-h-[2.5rem]">
          <Link to={`/product/${id}`}>{name}</Link>
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-primary">{formatUSDToPKR(price)}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatUSDToPKR(originalPrice)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          className="w-full rounded-full bg-accent hover:bg-accent-hover text-accent-foreground font-semibold shadow-md hover:shadow-lg transition-all"
          disabled={!inStock}
          onClick={() => {
            addItem({ id: String(id), name, priceUSD: price, image, quantity: 1 });
            toast("Added to cart", { description: name });
          }}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
