import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import { formatUSDToPKR } from "@/lib/currency";

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);

  const brands = [
    "Nature's Bounty",
    "Garden of Life",
    "NOW Foods",
    "Optimum Nutrition",
    "Pure Encapsulations",
  ];

  const categories = [
    "Vitamins & Supplements",
    "Herbal Remedies",
    "Protein & Fitness",
    "Weight Management",
    "Digestive Health",
  ];

  return (
    <Card className="p-6 space-y-6 sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          Clear All
        </Button>
      </div>

      {/* Price Range */}
      <div className="space-y-4">
        <Label className="text-sm font-semibold">Price Range</Label>
        <Slider
          min={0}
          max={200}
          step={5}
          value={priceRange}
          onValueChange={setPriceRange}
          className="my-4"
        />
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-primary">{formatUSDToPKR(priceRange[0])}</span>
          <span className="text-muted-foreground">to</span>
          <span className="font-medium text-primary">{formatUSDToPKR(priceRange[1])}</span>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold">Categories</Label>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <label
                htmlFor={category}
                className="text-sm cursor-pointer hover:text-primary transition-colors"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold">Brands</Label>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox id={brand} />
              <label
                htmlFor={brand}
                className="text-sm cursor-pointer hover:text-primary transition-colors"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold">Rating</Label>
        <div className="space-y-2">
          {[5, 4, 3, 2].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox id={`rating-${rating}`} />
              <label
                htmlFor={`rating-${rating}`}
                className="text-sm cursor-pointer hover:text-primary transition-colors flex items-center gap-1"
              >
                {"★".repeat(rating)}{"☆".repeat(5 - rating)} & Up
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <Button className="w-full bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-full">
        Apply Filters
      </Button>
    </Card>
  );
};

export default FilterSidebar;
