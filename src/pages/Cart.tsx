import { useCart } from "@/context/CartContext";
import { formatUSDToPKR, formatPKR, toPKR } from "@/lib/currency";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cart = () => {
  const { items, updateQuantity, removeItem, clear, totalUSD } = useCart();

  const shippingUSD = totalUSD >= 50 ? 0 : 5;
  const grandTotalPKR = toPKR(totalUSD + shippingUSD);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {items.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground mb-6">Your cart is empty.</p>
          <Link to="/">
            <Button>Start shopping</Button>
          </Link>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 p-6 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 flex items-center justify-center text-3xl bg-muted/30 rounded-md">
                    {item.image || "🏥"}
                  </div>
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-muted-foreground">{formatUSDToPKR(item.priceUSD)}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value || "1", 10))}
                    className="w-16"
                  />
                  <Button variant="outline" onClick={() => removeItem(item.id)}>Remove</Button>
                </div>
              </div>
            ))}
            <div className="flex justify-between">
              <Button variant="outline" onClick={clear}>Clear Cart</Button>
              <Link to="/">
                <Button variant="outline">Continue Shopping</Button>
              </Link>
            </div>
          </Card>
          <Card className="p-6 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatUSDToPKR(totalUSD)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shippingUSD === 0 ? "Free" : formatUSDToPKR(shippingUSD)}</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold">
              <span>Total</span>
              <span>{formatPKR(grandTotalPKR)}</span>
            </div>
            <Button className="w-full rounded-full bg-accent text-accent-foreground">Checkout</Button>
          </Card>
        </div>
      )}
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;