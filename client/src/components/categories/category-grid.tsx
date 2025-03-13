import { Link } from 'wouter';
import { Gift, Coffee, Sparkles, Glasses } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  {
    name: "Игрушки",
    icon: Gift,
    color: "from-[#FDF4F5] to-[#D9A7B0]",
    description: "Милые гипсовые фигурки для уюта"
  },
  {
    name: "Подставки",
    icon: Coffee,
    color: "from-[#FDF4F5] to-[#C797A0]",
    description: "Элегантные аксессуары для дома"
  },
  {
    name: "Подсвечники",
    icon: Sparkles,
    color: "from-[#FDF4F5] to-[#E8C4C9]",
    description: "Создайте волшебную атмосферу"
  },
  {
    name: "Стаканчики",
    icon: Glasses,
    color: "from-[#FDF4F5] to-[#D9A7B0]",
    description: "Изящные решения для декора"
  }
];

export const CategoryGrid = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link key={index} href={`/catalog?category=${category.name}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl group relative overflow-hidden`}
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16 opacity-10">
                <category.icon className="w-full h-full" />
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24 transform -translate-x-12 translate-y-12 opacity-10 rotate-12">
                <category.icon className="w-full h-full" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="bg-white/90 rounded-full p-4 w-16 h-16 mx-auto mb-6 transform transition-transform group-hover:rotate-12 group-hover:scale-110">
                  <category.icon className="w-full h-full text-[#D9A7B0]" />
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl mb-3 text-[#C797A0]">
                  {category.name}
                </h3>
                <p className="font-['Lora'] text-[#D9A7B0] leading-relaxed">
                  {category.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};