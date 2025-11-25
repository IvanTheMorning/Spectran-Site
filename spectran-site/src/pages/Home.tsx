import { useEffect, useState } from 'react';
import { ArrowRight, Cpu, ShieldCheck, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { api } from '../lib/api';
import type { Product, Category, Subcategory } from '../types';

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const [p, c, s] = await Promise.all([
        api.getProducts(),
        api.getCategories(),
        api.getSubcategories()
      ]);
      setProducts(p);
      setCategories(c);
      setSubcategories(s);
    };
    loadData();
  }, []);

  const bestsellers = products.filter(p => p.isBestseller);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent"></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Инновационные решения <br/>в мире микроэлектроники
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Разрабатываем и производим надежные микроконтроллеры для ваших амбициозных проектов.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/catalog" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors flex items-center">
                Перейти в каталог
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contacts" className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg font-semibold text-lg transition-colors">
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      {bestsellers.length > 0 && (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Хиты продаж</h2>
            <Link to="/catalog" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Весь каталог
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestsellers.map(product => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all flex flex-col h-full">
                <div className="aspect-video relative overflow-hidden bg-gray-100 shrink-0">
                  {product.images[0] && (
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-sm">
                    <Star className="h-3 w-3 mr-1 fill-yellow-900" />
                    ХИТ
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <Link 
                      to={`/catalog?category=${product.categoryId}`}
                      className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full hover:bg-blue-100 transition-colors relative z-10"
                    >
                      {categories.find(c => c.id === product.categoryId)?.name}
                    </Link>
                    {product.subcategoryId && (
                       <Link 
                         to={`/catalog?category=${product.categoryId}&subcategory=${product.subcategoryId}`}
                         className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full hover:bg-gray-200 transition-colors relative z-10"
                       >
                         {subcategories.find(s => s.id === product.subcategoryId)?.name}
                       </Link>
                    )}
                  </div>
                  <Link to={`/catalog/${product.id}`} className="block flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {product.shortDescription}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Features */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Почему выбирают Spectran</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Cpu className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Собственное производство</h3>
            <p className="text-gray-600">
              Полный цикл разработки и производства компонентов на территории России. Контроль качества на каждом этапе.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Высокая производительность</h3>
            <p className="text-gray-600">
              Наши микроконтроллеры оптимизированы для решения сложных вычислительных задач при минимальном энергопотреблении.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Надежность и защита</h3>
            <p className="text-gray-600">
              Промышленный стандарт надежности. Встроенные механизмы защиты от помех и перепадов напряжения.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
