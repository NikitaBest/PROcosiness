import { Link } from 'wouter';
import { Gift, Coffee, Sparkles, Glasses } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  {
    name: "Игрушки",
    icon: Gift,
    color: "bg-[#D9A7B0]",
    description: "Милые гипсовые фигурки"
  },
  {
    name: "Подставки",
    icon: Coffee,
    color: "bg-[#C797A0]",
    description: "Элегантные аксессуары"
  },
  {
    name: "Подсвечники",
    icon: Sparkles,
    color: "bg-[#E8C4C9]",
    description: "Создайте атмосферу"
  },
  {
    name: "Стаканчики",
    icon: Glasses,
    color: "bg-[#F5D6DB]",
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
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${category.color} rounded-2xl p-6 text-white cursor-pointer transition-shadow hover:shadow-xl backdrop-blur-sm bg-opacity-90`}
              >
                <category.icon className="w-8 h-8 mb-4" />
                <h3 className="font-['Playfair_Display'] text-xl mb-2">
                  {category.name}
                </h3>
                <p className="font-['Lora'] text-sm opacity-90">
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