import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useState } from "react";

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
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-6 w-6" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#D9A7B0] text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Корзина</SheetTitle>
        </SheetHeader>

        <div className="mt-8">
          {items.length === 0 ? (
            <p className="text-center text-gray-500">Корзина пуста</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.productId}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-medium">{item.product.name}</h4>
                      <p className="text-sm text-gray-500">
                        {item.product.price} ₽ x {item.quantity}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.productId, parseInt(e.target.value))
                      }
                      className="w-16 p-1 border rounded"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.productId)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t">
                <div className="flex justify-between mb-4">
                  <span>Итого:</span>
                  <span className="font-semibold">{total} ₽</span>
                </div>
                <Button className="w-full bg-[#D9A7B0] hover:bg-[#C797A0] text-white">
                  Оформить заказ
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;