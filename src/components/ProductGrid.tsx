import ProductCard from "./ProductCard";

const featuredProducts = [
  {
    name: "Vitamin D3 5000 IU - Bone & Immune Support",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.8,
    reviews: 1250,
    discount: 29,
    inStock: true,
  },
  {
    name: "Omega-3 Fish Oil 1000mg - Heart Health",
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.7,
    reviews: 890,
    discount: 33,
    inStock: true,
  },
  {
    name: "Multivitamin Complex - Daily Wellness",
    price: 29.99,
    rating: 4.9,
    reviews: 2100,
    inStock: true,
  },
  {
    name: "Probiotic 50 Billion CFU - Digestive Health",
    price: 34.99,
    originalPrice: 44.99,
    rating: 4.6,
    reviews: 670,
    discount: 22,
    inStock: true,
  },
  {
    name: "Collagen Peptides Powder - Skin & Joint Support",
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.8,
    reviews: 1450,
    discount: 27,
    inStock: true,
  },
  {
    name: "Magnesium Glycinate 400mg - Sleep & Relaxation",
    price: 22.99,
    rating: 4.7,
    reviews: 980,
    inStock: true,
  },
  {
    name: "Vitamin C 1000mg - Immune Booster",
    price: 16.99,
    originalPrice: 24.99,
    rating: 4.9,
    reviews: 1820,
    discount: 32,
    inStock: true,
  },
  {
    name: "CoQ10 200mg - Heart & Energy Support",
    price: 27.99,
    rating: 4.6,
    reviews: 540,
    inStock: true,
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Best-selling health and wellness essentials
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div key={index} style={{ animationDelay: `${index * 50}ms` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
