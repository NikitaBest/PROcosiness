import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-[#F5E8C7] text-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl mb-4">PRO|уют</h3>
            <p className="font-['Lora'] text-sm">
              Создаем уютные моменты для вашего дома
            </p>
          </div>
          
          <div>
            <h4 className="font-['Playfair_Display'] text-lg mb-4">Навигация</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-[#4A704A]">Главная</Link>
              <Link href="/catalog" className="hover:text-[#4A704A]">Каталог</Link>
              <Link href="/about" className="hover:text-[#4A704A]">О нас</Link>
              <Link href="/contact" className="hover:text-[#4A704A]">Контакты</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-['Playfair_Display'] text-lg mb-4">Контакты</h4>
            <div className="flex flex-col space-y-2">
              <a href="mailto:pro.uyut@example.com" className="hover:text-[#4A704A]">
                pro.uyut@example.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200 text-center">
          <p className="text-sm">© 2025 PRO|уют. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
