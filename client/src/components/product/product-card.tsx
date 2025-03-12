import { motion } from "framer-motion";
import { Product } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";

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
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:shadow-xl"
    >
      <div className="aspect-square relative overflow-hidden group">
        <motion.img
          src={product.imageUrl}
          alt={product.name}
          className="object-cover w-full h-full transform transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>

      <div className="p-6">
        <h3 className="font-['Playfair_Display'] text-xl mb-2 text-[#966F33]">
          {product.name}
        </h3>
        <p className="font-['Lora'] text-sm text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-[#8B4513]">
            {product.price} ₽
          </span>
          <Button 
            onClick={handleAddToCart}
            className="bg-[#966F33] hover:bg-[#8B4513] text-white"
          >
            В корзину
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;