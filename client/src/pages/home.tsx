import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import type { Product } from "@shared/schema";
import ProductCard from "@/components/product/product-card";
import { Button } from "@/components/ui/button";

const Home = () => {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-[#F5E8C7] py-24 md:py-32"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-['Playfair_Display'] text-4xl md:text-6xl mb-6 text-[#4A704A]"
            >
              Создай уют с PRO|уют
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-['Lora'] text-lg md:text-xl mb-8 text-gray-700"
            >
              Ручная работа, экологичные материалы, любовь к деталям — все это PRO|уют
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/catalog">
                <Button 
                  size="lg" 
                  className="bg-[#4A704A] hover:bg-[#3A5A3A] text-white font-['Lora'] text-lg"
                >
                  Перейти в каталог
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl mb-12 text-center text-[#4A704A]">
            Популярные изделия
          </h2>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-[400px] bg-[#F5E8C7]/50 rounded-lg animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products?.slice(0, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;