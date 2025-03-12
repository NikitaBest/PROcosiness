import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@shared/schema";
import ProductCard from "@/components/product/product-card";
import { ProductFilters } from "@/components/filters/product-filters";

const categories = ["Все", "Игрушки", "Подставки", "Подсвечники", "Стаканчики"];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [searchQuery, setSearchQuery] = useState("");

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const filteredProducts = products?.filter((product) => {
    const matchesCategory =
      selectedCategory === "Все" || product.category === selectedCategory;
    const matchesPrice =
      Number(product.price) >= priceRange[0] &&
      Number(product.price) <= priceRange[1];
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FDF6E3]">
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-['Playfair_Display'] text-4xl md:text-5xl mb-12 text-center text-[#D9A7B0]"
        >
          Каталог изделий
        </motion.h1>

        {/* Filters */}
        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onPriceRangeChange={setPriceRange}
          onSearchChange={setSearchQuery}
        />

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-[400px] bg-white rounded-lg shadow-md animate-pulse"
              />
            ))}
          </div>
        ) : (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts?.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Catalog;