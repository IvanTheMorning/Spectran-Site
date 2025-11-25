import React from 'react';
import { Link } from 'react-router-dom';
import { CircuitBoard, Menu, X, Phone, MapPin, Mail } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                <CircuitBoard className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900 tracking-tight">Spectran</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Главная</Link>
              <Link to="/catalog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Каталог</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">О компании</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Контакты</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/catalog" 
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Каталог
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                О компании
              </Link>
              <Link 
                to="/contacts" 
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <CircuitBoard className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Spectran</span>
              </div>
              <p className="text-gray-400">
                Производство современных микроконтроллеров и электронных компонентов.
                Российское качество, мировые стандарты.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">Главная</Link></li>
                <li><Link to="/catalog" className="text-gray-400 hover:text-blue-400 transition-colors">Каталог</Link></li>
                <li><Link to="/contacts" className="text-gray-400 hover:text-blue-400 transition-colors">Контакты</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>г. Москва, ул. Электроники, д. 1</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>info@spectran.ru</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Spectran. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
