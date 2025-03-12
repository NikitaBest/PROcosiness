import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    title: "Создай уют с PRO|уют",
    description: "Ручная работа, экологичные материалы, любовь к деталям",
    image: "https://placehold.co/1920x600/966F33/ffffff?text=Уютный+интерьер",
    color: "bg-[#966F33]"
  },
  {
    title: "Подсвечники ручной работы",
    description: "Добавьте магии в ваш дом",
    image: "https://placehold.co/1920x600/8B4513/ffffff?text=Подсвечники",
    color: "bg-[#8B4513]"
  },
  {
    title: "Декоративные фигурки",
    description: "Уникальные гипсовые изделия для вашего интерьера",
    image: "https://placehold.co/1920x600/CD853F/ffffff?text=Декор",
    color: "bg-[#CD853F]"
  }
];

export const BannerCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {banners.map((banner, index) => (
            <div 
              key={index} 
              className="relative flex-[0_0_100%] min-w-0"
            >
              <div className={`${banner.color} relative h-[400px] md:h-[600px] flex items-center`}>
                <div className="absolute inset-0">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: selectedIndex === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"
                  />
                  <img 
                    src={banner.image} 
                    alt={banner.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="container mx-auto px-4 relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: selectedIndex === index ? 1 : 0,
                      y: selectedIndex === index ? 0 : 20
                    }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl text-white"
                  >
                    <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl mb-6">
                      {banner.title}
                    </h2>
                    <p className="font-['Lora'] text-lg md:text-xl mb-8">
                      {banner.description}
                    </p>
                    <Link href="/catalog">
                      <Button 
                        size="lg"
                        className="bg-white text-[#966F33] hover:bg-white/90 font-['Lora'] text-lg"
                      >
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};
