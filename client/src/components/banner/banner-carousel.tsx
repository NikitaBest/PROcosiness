import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ChevronLeft, ChevronRight, Heart, Sparkles, Star } from 'lucide-react';

const banners = [
  {
    title: "Создай уют с PRO|уют",
    description: "Ручная работа с любовью к каждой детали ✨",
    image: "https://placehold.co/1920x400/FDF4F5/D9A7B0?text=Уютный+интерьер",
    color: "from-[#FDF4F5] to-[#D9A7B0]",
    icon: Heart
  },
  {
    title: "Подсвечники ручной работы",
    description: "Добавьте волшебства в ваш дом ✨",
    image: "https://placehold.co/1920x400/FDF4F5/C797A0?text=Подсвечники",
    color: "from-[#FDF4F5] to-[#C797A0]",
    icon: Sparkles
  },
  {
    title: "Декоративные фигурки",
    description: "Создайте особенную атмосферу ✨",
    image: "https://placehold.co/1920x400/FDF4F5/E8C4C9?text=Декор",
    color: "from-[#FDF4F5] to-[#E8C4C9]",
    icon: Star
  }
];

export const BannerCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {banners.map((banner, index) => (
            <div 
              key={index}
              className="flex-[0_0_100%] min-w-0 relative"
            >
              <div 
                className={`h-[400px] md:h-[450px] relative overflow-hidden bg-gradient-to-r ${banner.color}`}
              >
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
                    <banner.icon className="w-full h-full text-white" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10 transform rotate-12">
                    <banner.icon className="w-full h-full text-white" />
                  </div>
                </div>

                <div className="container mx-auto px-4 h-full flex items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: selectedIndex === index ? 1 : 0,
                      y: selectedIndex === index ? 0 : 20
                    }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-xl relative z-10"
                  >
                    <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl mb-4 text-[#C797A0] drop-shadow-sm">
                      {banner.title}
                    </h2>
                    <p className="font-['Lora'] text-lg md:text-xl mb-6 text-[#D9A7B0]">
                      {banner.description}
                    </p>
                    <Link href="/catalog">
                      <Button 
                        size="lg"
                        className="bg-white hover:bg-[#FDF4F5] text-[#D9A7B0] hover:text-[#C797A0] font-['Lora'] text-lg shadow-md hover:shadow-lg rounded-full border border-[#D9A7B0]/20"
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Смотреть каталог
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#D9A7B0] rounded-full shadow-md hover:shadow-lg border border-[#D9A7B0]/20"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#D9A7B0] rounded-full shadow-md hover:shadow-lg border border-[#D9A7B0]/20"
        onClick={scrollNext}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              selectedIndex === index 
                ? "bg-[#D9A7B0] w-6" 
                : "bg-[#D9A7B0]/40 hover:bg-[#D9A7B0]/60"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};