import { Link } from 'wouter';
import { Gift, Coffee, Sparkles, Glasses } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  {
    name: "Игрушки",
    icon: Gift,
    color: "bg-[#966F33]",
    description: "Милые гипсовые фигурки"
  },
  {
    name: "Подставки",
    icon: Coffee,
    color: "bg-[#8B4513]",
    description: "Элегантные аксессуары"
  },
  {
    name: "Подсвечники",
    icon: Sparkles,
    color: "bg-[#CD853F]",
    description: "Создайте атмосферу"
  },
  {
    name: "Стаканчики",
    icon: Glasses,
    color: "bg-[#DEB887]",
    description: "Стильные решения"
  }
];

export const CategoryGrid = () => {
  return (
    <div className="bg-[#FDF6E3] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {categories.map((category, index) => (
            <Link key={index} href={`/catalog?category=${category.name}`}>
              <motion.div
                whileHover={{ y: -5 }}
                className={`${category.color} rounded-xl p-6 text-white cursor-pointer transition-shadow hover:shadow-xl`}
              >
                <category.icon className="w-8 h-8 mb-4" />
                <h3 className="font-['Playfair_Display'] text-xl mb-2">
                  {category.name}
                </h3>
                <p className="font-['Lora'] text-sm opacity-80">
                  {category.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};