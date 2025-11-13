export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  discount?: number;
  inStock: boolean;
  image?: string;
  description?: string;
  categorySlug: string;
  categoryName?: string;
};

export const products: Product[] = [
  {
    id: "vitamin-d3",
    name: "Vitamin D3 5000 IU - Bone & Immune Support",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.8,
    reviews: 1250,
    discount: 29,
    inStock: true,
    image: "🏥",
    description: "High potency Vitamin D3 to support bones and immune function.",
    categorySlug: "vitamins-supplements",
    categoryName: "Vitamins & Supplements",
  },
  {
    id: "omega-3",
    name: "Omega-3 Fish Oil 1000mg - Heart Health",
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.7,
    reviews: 890,
    discount: 33,
    inStock: true,
    image: "🐟",
    description: "Purified fish oil to support cardiovascular health.",
    categorySlug: "heart-health",
    categoryName: "Heart Health",
  },
  {
    id: "multivitamin",
    name: "Multivitamin Complex - Daily Wellness",
    price: 29.99,
    rating: 4.9,
    reviews: 2100,
    inStock: true,
    image: "💊",
    description: "Balanced multivitamin for everyday nutritional support.",
    categorySlug: "daily-wellness",
    categoryName: "Daily Wellness",
  },
  {
    id: "probiotic",
    name: "Probiotic 50 Billion CFU - Digestive Health",
    price: 34.99,
    originalPrice: 44.99,
    rating: 4.6,
    reviews: 670,
    discount: 22,
    inStock: true,
    image: "🧫",
    description: "Advanced probiotic formula to promote gut health.",
    categorySlug: "digestive-health",
    categoryName: "Digestive Health",
  },
  {
    id: "collagen",
    name: "Collagen Peptides Powder - Skin & Joint Support",
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.8,
    reviews: 1450,
    discount: 27,
    inStock: true,
    image: "🧬",
    description: "Hydrolyzed collagen peptides for skin and joint support.",
    categorySlug: "skin-joint",
    categoryName: "Skin & Joint",
  },
  {
    id: "magnesium",
    name: "Magnesium Glycinate 400mg - Sleep & Relaxation",
    price: 22.99,
    rating: 4.7,
    reviews: 980,
    inStock: true,
    image: "🌙",
    description: "Gentle magnesium for restful sleep and relaxation.",
    categorySlug: "sleep-relaxation",
    categoryName: "Sleep & Relaxation",
  },
  {
    id: "vitamin-c",
    name: "Vitamin C 1000mg - Immune Booster",
    price: 16.99,
    originalPrice: 24.99,
    rating: 4.9,
    reviews: 1820,
    discount: 32,
    inStock: true,
    image: "🍊",
    description: "Buffered Vitamin C to support immune health.",
    categorySlug: "immune-support",
    categoryName: "Immune Support",
  },
  {
    id: "coq10",
    name: "CoQ10 200mg - Heart & Energy Support",
    price: 27.99,
    rating: 4.6,
    reviews: 540,
    inStock: true,
    image: "⚡",
    description: "Coenzyme Q10 to support energy and heart function.",
    categorySlug: "energy-support",
    categoryName: "Energy Support",
  },
];

export const getProductById = (id: string) => products.find((p) => p.id === id);