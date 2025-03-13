import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Ручная работа",
    description: "Каждое изделие создано с любовью и вниманием к деталям"
  },
  {
    icon: Star,
    title: "Качественные материалы",
    description: "Используем только экологичный гипс высшего качества"
  },
  {
    icon: Sparkles,
    title: "Уникальный дизайн",
    description: "Создаем неповторимые предметы декора для вашего дома"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF4F5] via-white to-[#FDF4F5] py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#C797A0] mb-6 flex items-center justify-center gap-2">
              <Heart className="w-8 h-8" />
              О нас
              <Heart className="w-8 h-8" />
            </h1>
            <p className="font-['Lora'] text-lg text-[#D9A7B0] max-w-2xl mx-auto leading-relaxed">
              PRO|уют — это мастерская, где гипс превращается в уют. Каждое изделие
              создано вручную с заботой о вашем комфорте и эстетике ✨
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-md border border-[#D9A7B0]/10 mb-12">
            <p className="font-['Lora'] text-lg text-[#D9A7B0] mb-6 leading-relaxed">
              Наша команда мастеров вкладывает душу в каждое изделие, тщательно
              прорабатывая все детали. Мы используем только качественные материалы и
              современные технологии производства.
            </p>

            <div className="aspect-video bg-[#FDF4F5] rounded-xl mb-8 overflow-hidden">
              <img 
                src="https://placehold.co/1920x1080/FDF4F5/D9A7B0?text=Наша+мастерская" 
                alt="Мастерская PRO|уют"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="font-['Lora'] text-lg text-[#D9A7B0] leading-relaxed">
              PRO|уют — это не просто магазин декора, это история о создании
              уютной атмосферы в каждом доме. Мы помогаем вам сделать ваше
              пространство особенным и неповторимым ✨
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md border border-[#D9A7B0]/10"
              >
                <div className="bg-[#FDF4F5] rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <feature.icon className="w-full h-full text-[#D9A7B0]" />
                </div>
                <h3 className="font-['Playfair_Display'] text-xl text-[#C797A0] mb-2">
                  {feature.title}
                </h3>
                <p className="font-['Lora'] text-[#D9A7B0] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;