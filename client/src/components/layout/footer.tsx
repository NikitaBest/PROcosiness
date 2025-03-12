import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm text-gray-800 py-12 border-t border-[#D9A7B0]/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl mb-4 text-[#D9A7B0]">PRO|уют</h3>
            <p className="font-['Lora'] text-sm text-gray-600 leading-relaxed">
              Создаем уютные моменты для вашего дома с любовью к каждой детали
            </p>
          </div>

          <div>
            <h4 className="font-['Playfair_Display'] text-lg mb-4 text-[#C797A0]">Навигация</h4>
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-[#D9A7B0] transition-colors transform hover:translate-x-1 inline-block"
              >
                Главная
              </Link>
              <Link 
                href="/catalog" 
                className="text-gray-600 hover:text-[#D9A7B0] transition-colors transform hover:translate-x-1 inline-block"
              >
                Каталог
              </Link>
              <Link 
                href="/about" 
                className="text-gray-600 hover:text-[#D9A7B0] transition-colors transform hover:translate-x-1 inline-block"
              >
                О нас
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-600 hover:text-[#D9A7B0] transition-colors transform hover:translate-x-1 inline-block"
              >
                Контакты
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-['Playfair_Display'] text-lg mb-4 text-[#C797A0]">Контакты</h4>
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:pro.uyut@example.com" 
                className="text-gray-600 hover:text-[#D9A7B0] transition-colors transform hover:translate-x-1 inline-block"
              >
                pro.uyut@example.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#D9A7B0]/10 text-center">
          <p className="text-sm text-gray-500">© 2025 PRO|уют. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;