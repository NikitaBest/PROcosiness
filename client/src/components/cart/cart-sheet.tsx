import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CartSheet = () => {
  const { items, removeItem, updateQuantity } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const total = items.reduce(
    (sum, item) => sum + Number(item.product.price) * item.quantity,
    0
  );

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative hover:bg-[#FDF4F5] transition-colors"
        >
          <ShoppingBag className="h-6 w-6 text-[#C797A0]" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#D9A7B0] text-white rounded-full w-5 h-5 text-xs flex items-center justify-center shadow-sm">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="bg-gradient-to-b from-white via-[#FDF4F5]/20 to-white">
        <SheetHeader className="mb-8">
          <SheetTitle className="font-['Playfair_Display'] text-2xl text-[#C797A0] flex items-center justify-center gap-2">
            <ShoppingBag className="w-6 h-6" />
            Корзина
            <Heart className="w-5 h-5" />
          </SheetTitle>
        </SheetHeader>

        <AnimatePresence mode="wait">
          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center py-12"
            >
              <ShoppingCart className="w-16 h-16 text-[#D9A7B0]/30 mx-auto mb-4" />
              <p className="font-['Lora'] text-[#D9A7B0] text-lg">
                Ваша корзина пуста ✨
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {items.map((item) => (
                <motion.div
                  key={item.productId}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-[#D9A7B0]/10"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg shadow-sm"
                    />
                    <div className="flex-1">
                      <h4 className="font-['Playfair_Display'] text-lg text-[#C797A0] mb-1">
                        {item.product.name}
                      </h4>
                      <p className="font-['Lora'] text-sm text-[#D9A7B0]">
                        {item.product.price} ₽ × {item.quantity}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.productId, parseInt(e.target.value))
                        }
                        className="w-16 p-1 border border-[#D9A7B0]/20 rounded-lg text-center focus:outline-none focus:border-[#D9A7B0] text-[#C797A0]"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.productId)}
                        className="hover:bg-[#FDF4F5] hover:text-[#D9A7B0]"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="pt-6 border-t border-[#D9A7B0]/10">
                <div className="flex justify-between mb-6">
                  <span className="font-['Lora'] text-lg text-[#C797A0]">Итого:</span>
                  <span className="font-['Playfair_Display'] text-xl text-[#C797A0]">
                    {total} ₽
                  </span>
                </div>
                <Button className="w-full bg-[#D9A7B0] hover:bg-[#C797A0] text-white font-['Lora'] text-lg rounded-full shadow-sm hover:shadow-md transition-all">
                  Оформить заказ ✨
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;