import { products as initialProducts } from "@/data/products";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatUSDToPKR } from "@/lib/currency";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const SellerDashboard = () => {
  const [products, setProducts] = useState(initialProducts);
  const [newName, setNewName] = useState("");
  const [newPriceUSD, setNewPriceUSD] = useState<number>(0);

  const addProduct = () => {
    if (!newName || newPriceUSD <= 0) return;
    setProducts((prev) => [
      ...prev,
      {
        id: `${Date.now()}`,
        name: newName,
        price: newPriceUSD,
        rating: 0,
        reviews: 0,
        inStock: true,
        image: "📦",
        description: "",
        categorySlug: "daily-wellness",
        categoryName: "Daily Wellness",
      },
    ]);
    setNewName("");
    setNewPriceUSD(0);
  };

  const salesData = [
    { month: "Jan", salesUSD: 1200 },
    { month: "Feb", salesUSD: 980 },
    { month: "Mar", salesUSD: 1430 },
    { month: "Apr", salesUSD: 1100 },
    { month: "May", salesUSD: 1680 },
    { month: "Jun", salesUSD: 1540 },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold">Seller Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="font-semibold">Products</div>
          <div className="text-2xl">{products.length}</div>
        </Card>
        <Card className="p-6">
          <div className="font-semibold">Estimated Monthly Sales</div>
          <div className="text-2xl">{formatUSDToPKR(salesData.reduce((s, d) => s + d.salesUSD, 0))}</div>
        </Card>
        <Card className="p-6">
          <div className="font-semibold">Top Product</div>
          <div className="text-2xl">{products[0]?.name || "-"}</div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="mb-4 font-semibold">Sales Trend</div>
        <ChartContainer
          config={{
            salesUSD: { label: "Sales", color: "hsl(var(--primary))" },
          }}
          className="h-64 w-full"
        >
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="salesUSD" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </Card>

      <Card className="p-6 space-y-4">
        <div className="font-semibold">Manage Products</div>
        <div className="flex gap-2">
          <Input placeholder="Product name" value={newName} onChange={(e) => setNewName(e.target.value)} />
          <Input
            type="number"
            placeholder="Price (USD)"
            value={newPriceUSD}
            onChange={(e) => setNewPriceUSD(parseFloat(e.target.value || "0"))}
            className="w-40"
          />
          <Button onClick={addProduct}>Add</Button>
        </div>
        <div className="space-y-2">
          {products.map((p) => (
            <div key={p.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 flex items-center justify-center bg-muted/30 rounded-md">{p.image || "📦"}</div>
                <div className="font-medium">{p.name}</div>
              </div>
              <div className="text-sm text-muted-foreground">{formatUSDToPKR(p.price)}</div>
            </div>
          ))}
        </div>
      </Card>

      <div className="flex gap-3">
        <Button asChild variant="outline">
          <a href="/">Back to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default SellerDashboard;