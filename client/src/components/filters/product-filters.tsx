import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  onSearchChange: (search: string) => void;
}

export const ProductFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
  onPriceRangeChange,
  onSearchChange,
}: ProductFiltersProps) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value as [number, number]);
    onPriceRangeChange(value as [number, number]);
  };

  return (
    <div className="mb-8">
      {/* Search and Filter Toggle */}
      <div className="flex gap-4 mb-4">
        <div className="flex-1 relative">
          <Input
            placeholder="Поиск товаров..."
            className="pl-10 bg-white/80 backdrop-blur-sm border-[#D9A7B0]/20 focus:border-[#D9A7B0] transition-colors rounded-full"
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D9A7B0]" />
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className={`transition-all duration-300 rounded-full border-[#D9A7B0]/20 ${
            isFiltersOpen ? "bg-[#D9A7B0] text-white shadow-lg" : "hover:bg-[#D9A7B0]/10"
          }`}
        >
          <SlidersHorizontal className="h-5 w-5" />
        </Button>
      </div>

      {/* Expandable Filters */}
      <motion.div
        initial={false}
        animate={{
          height: isFiltersOpen ? "auto" : 0,
          opacity: isFiltersOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-['Playfair_Display'] text-lg mb-3 text-[#D9A7B0]">
              Категории
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => onCategoryChange(category)}
                  className={`
                    rounded-full transition-all duration-300
                    ${
                      selectedCategory === category
                        ? "bg-[#D9A7B0] text-white shadow-md hover:bg-[#C797A0]"
                        : "border-[#D9A7B0] text-[#D9A7B0] hover:bg-[#D9A7B0]/10"
                    }
                  `}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-['Playfair_Display'] text-lg mb-3 text-[#D9A7B0]">
              Цена
            </h3>
            <Slider
              defaultValue={[0, 5000]}
              max={5000}
              step={100}
              value={priceRange}
              onValueChange={handlePriceChange}
              className="mt-2"
            />
            <div className="flex justify-between mt-2 text-sm text-gray-600 font-['Lora']">
              <span>{priceRange[0]} ₽</span>
              <span>{priceRange[1]} ₽</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};