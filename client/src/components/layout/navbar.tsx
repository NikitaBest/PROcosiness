import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import CartSheet from "../cart/cart-sheet";
import { useState } from "react";

const Navbar = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Главная" },
    { href: "/catalog", label: "Каталог" },
    { href: "/about", label: "О нас" },
    { href: "/contact", label: "Контакты" },
  ];

  return (
    <nav className="bg-[#F5E8C7] border-b border-[#4A704A]/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#4A704A]"
        >
          PRO|уют
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-['Lora'] text-lg transition-colors ${
                location === item.href
                  ? "text-[#4A704A] font-medium"
                  : "text-gray-700 hover:text-[#4A704A]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <CartSheet />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-4">
          <CartSheet />
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-[#4A704A]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#F5E8C7] border-l border-[#4A704A]/20">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-['Lora'] text-xl ${
                      location === item.href
                        ? "text-[#4A704A] font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;