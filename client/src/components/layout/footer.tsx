import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-[#F5E8C7] text-gray-800 py-8 border-t border-[#D9A7B0]/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl mb-4 text-[#D9A7B0]">PRO|уют</h3>
            <p className="font-['Lora'] text-sm text-gray-600">
              Создаем уютные моменты для вашего дома
            </p>
          </div>

          <div>
            <h4 className="font-['Playfair_Display'] text-lg mb-4 text-[#C797A0]">Навигация</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-600 hover:text-[#D9A7B0] transition-colors">
                Главная
              </Link>
              <Link href="/catalog" className="text-gray-600 hover:text-[#D9A7B0] transition-colors">
                Каталог
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-[#D9A7B0] transition-colors">
                О нас
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#D9A7B0] transition-colors">
                Контакты
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-['Playfair_Display'] text-lg mb-4 text-[#C797A0]">Контакты</h4>
            <div className="flex flex-col space-y-2">
              <a 
                href="mailto:pro.uyut@example.com" 
                className="text-gray-600 hover:text-[#D9A7B0] transition-colors"
              >
                pro.uyut@example.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#D9A7B0]/10 text-center">
          <p className="text-sm text-gray-500">© 2025 PRO|уют. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;