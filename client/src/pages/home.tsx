import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "@shared/schema";
import ProductCard from "@/components/product/product-card";
import { BannerCarousel } from "@/components/banner/banner-carousel";
import { CategoryGrid } from "@/components/categories/category-grid";

const Home = () => {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF4F5] to-white">
      {/* Banner Carousel */}
      <BannerCarousel />

      {/* Categories */}
      <CategoryGrid />

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Playfair_Display'] text-3xl md:text-4xl mb-12 text-center text-[#C797A0]"
          >
            Популярные изделия
          </motion.h2>

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