import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import type { Product } from "@shared/schema";
import ProductCard from "@/components/product/product-card";
import { Button } from "@/components/ui/button";

const categories = ["Все", "Игрушки", "Подставки", "Подсвечники", "Стаканчики"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const filteredProducts = products?.filter(
    (product) =>
      selectedCategory === "Все" || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-[#FDF6E3]">
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-['Playfair_Display'] text-4xl md:text-5xl mb-12 text-center text-[#4A704A]"
        >
          Каталог изделий
        </motion.h1>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-2 rounded-full text-lg transition-all
                ${selectedCategory === category 
                  ? 'bg-[#4A704A] text-white shadow-lg' 
                  : 'border-[#4A704A] text-[#4A704A] hover:bg-[#4A704A]/10'
                }
              `}
            >
              {category}
            </Button>
          ))}
        </motion.div>

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
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Catalog;