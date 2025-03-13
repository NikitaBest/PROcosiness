import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "@shared/schema";
import ProductCard from "@/components/product/product-card";
import { BannerCarousel } from "@/components/banner/banner-carousel";
import { CategoryGrid } from "@/components/categories/category-grid";
import { Sparkles } from "lucide-react";

const Home = () => {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF4F5] via-white to-[#FDF4F5]">
      {/* Banner Carousel */}
      <BannerCarousel />

      {/* Categories */}
      <div className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 mb-8 text-center"
        >
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#C797A0] mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6" />
            Наши категории
            <Sparkles className="w-6 h-6" />
          </h2>
          <p className="font-['Lora'] text-lg text-[#D9A7B0] max-w-2xl mx-auto">
            Откройте для себя коллекцию изысканных гипсовых изделий, созданных с любовью к деталям
          </p>
        </motion.div>
        <CategoryGrid />
      </div>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#C797A0] mb-4 flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6" />
              Популярные изделия
              <Sparkles className="w-6 h-6" />
            </h2>
            <p className="font-['Lora'] text-lg text-[#D9A7B0] max-w-2xl mx-auto">
              Выберите особенные предметы декора, которые создадут неповторимую атмосферу в вашем доме
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-[400px] bg-white/50 rounded-2xl animate-pulse shadow-lg"
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {products?.slice(0, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;