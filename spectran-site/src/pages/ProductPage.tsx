import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../lib/api';
import { mockCategories, mockSubcategories } from '../lib/mockData';
import type { Product } from '../types';
import { ArrowLeft, Check, Shield, Cpu } from 'lucide-react';

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>();

  useEffect(() => {
    const loadProduct = async () => {
      if (id) {
        const p = await api.getProduct(id);
        setProduct(p);
      }
    };
    loadProduct();
  }, [id]);

  const category = product ? mockCategories.find(c => c.id === product.categoryId) : null;

  if (!product) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Товар не найден</h2>
        <Link to="/catalog" className="text-blue-600 hover:underline">
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/catalog" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Назад в каталог
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images Section */}
        <div className="space-y-4">
          <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
            {product.images[0] ? (
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Нет изображения
              </div>
            )}
          </div>
          {/* Thumbnails could go here */}
        </div>

        {/* Info Section */}
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
             <Link 
               to={`/catalog?category=${product.categoryId}`}
               className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
             >
               {category?.name}
             </Link>
             {product.subcategoryId && (
                <Link 
                  to={`/catalog?category=${product.categoryId}&subcategory=${product.subcategoryId}`}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  {mockSubcategories.find(s => s.id === product.subcategoryId)?.name}
                </Link>
             )}
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {product.shortDescription}
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Cpu className="h-5 w-5 mr-2 text-blue-600" />
              Технические характеристики
            </h3>
            <div className="space-y-3">
              {product.specifications.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                  <span className="text-gray-600">{spec.name}</span>
                  <span className="font-medium text-gray-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Описание</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
              <button className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                Запросить КП
              </button>
              <button className="flex-1 bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:text-gray-900 transition-colors flex items-center justify-center">
                <Shield className="h-5 w-5 mr-2" />
                Гарантия качества
              </button>
            </div>
            
            <div className="flex items-center text-sm text-gray-500 bg-green-50 p-4 rounded-lg text-green-700">
              <Check className="h-4 w-4 mr-2" />
              Продукция сертифицирована и соответствует ГОСТ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
