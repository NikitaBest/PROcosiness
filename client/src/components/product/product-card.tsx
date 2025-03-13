import { motion } from "framer-motion";
import { Product } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import { Heart, ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Добавлено в корзину",
      description: `${product.name} добавлен в корзину`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden transform transition-all hover:shadow-xl border border-[#D9A7B0]/10"
    >
      <div className="aspect-square relative overflow-hidden group">
        <motion.img
          src={product.imageUrl}
          alt={product.name}
          className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#D9A7B0]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Favorite button */}
        <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
          <Heart className="w-5 h-5 text-[#D9A7B0]" />
        </button>
      </div>

      <div className="p-6">
        <h3 className="font-['Playfair_Display'] text-xl mb-2 text-[#2A2A2A] group-hover:text-[#C797A0] transition-colors">
          {product.name}
        </h3>
        <p className="font-['Lora'] text-sm text-[#2A2A2A]/70 mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-['Playfair_Display'] text-[#2A2A2A]">
            {product.price} ₽
          </span>
          <Button 
            onClick={handleAddToCart}
            className="bg-[#D9A7B0] hover:bg-[#C797A0] text-white shadow-sm hover:shadow-md transition-all duration-300 rounded-full"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            В корзину
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;