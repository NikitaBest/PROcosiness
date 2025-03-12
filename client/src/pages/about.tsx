import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-['Playfair_Display'] text-4xl mb-8 text-center">
          О нас
        </h1>

        <div className="max-w-3xl mx-auto">
          <p className="font-['Lora'] text-lg mb-6 leading-relaxed">
            PRO|уют — это мастерская, где гипс превращается в уют. Каждое изделие
            создано вручную с заботой о вашем комфорте и эстетике. Мы верим, что
            мелочи делают дом особенным.
          </p>

          <p className="font-['Lora'] text-lg mb-6 leading-relaxed">
            Наша команда мастеров вкладывает душу в каждое изделие, тщательно
            прорабатывая все детали. Мы используем только качественные материалы и
            современные технологии производства.
          </p>

          <div className="aspect-video bg-white/60 backdrop-blur-sm rounded-lg mb-8">
            {/* Image placeholder */}
          </div>

          <p className="font-['Lora'] text-lg leading-relaxed">
            PRO|уют — это не просто магазин декора, это история о создании
            уютной атмосферы в каждом доме. Мы помогаем вам сделать ваше
            пространство особенным и неповторимым.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;