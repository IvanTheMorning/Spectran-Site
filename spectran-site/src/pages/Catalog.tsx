import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { api } from '../lib/api';
import { Info, Star } from 'lucide-react';
import type { Product, Category, Subcategory } from '../types';

export function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [loading, setLoading] = useState(true);
  
  const selectedCategory = searchParams.get('category') || 'all';
  const selectedSubcategory = searchParams.get('subcategory') || 'all';

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
      setLoading(false);
    };
    loadData();
  }, []);

  const handleCategoryChange = (categoryId: string) => {
    setSearchParams({ category: categoryId, subcategory: 'all' });
  };

  const handleSubcategoryChange = (subcategoryId: string) => {
    setSearchParams({ category: selectedCategory, subcategory: subcategoryId });
  };

  if (loading) {
    return <div className="w-full h-96 flex items-center justify-center">Загрузка...</div>;
  }

  const currentSubcategories = selectedCategory === 'all' 
    ? [] 
    : subcategories.filter(s => s.categoryId === selectedCategory);

  let filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.categoryId === selectedCategory);

  if (selectedSubcategory !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.subcategoryId === selectedSubcategory);
  }

  // Sort: Bestsellers first
  filteredProducts.sort((a, b) => {
    if (a.isBestseller && !b.isBestseller) return -1;
    if (!a.isBestseller && b.isBestseller) return 1;
    return 0;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Каталог продукции</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Categories */}
        <div className="w-full md:w-64 shrink-0">
          <h2 className="font-semibold text-lg mb-4">Категории</h2>
          <div className="space-y-2">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-700'
              }`}
            >
              Все товары
            </button>
            {categories.map(category => (
              <div key={category.id}>
                <button
                  onClick={() => handleCategoryChange(category.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.id 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {category.name}
                </button>
                
                {/* Subcategories in Sidebar */}
                {selectedCategory === category.id && currentSubcategories.length > 0 && (
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-gray-100 pl-2">
                     <button
                        onClick={() => handleSubcategoryChange('all')}
                        className={`w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors ${
                          selectedSubcategory === 'all'
                            ? 'text-blue-600 font-medium bg-blue-50'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        Все
                      </button>
                      {currentSubcategories.map(sub => (
                        <button
                          key={sub.id}
                          onClick={() => handleSubcategoryChange(sub.id)}
                          className={`w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors ${
                            selectedSubcategory === sub.id
                              ? 'text-blue-600 font-medium bg-blue-50'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          }`}
                        >
                          {sub.name}
                        </button>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group flex flex-col h-full">
                <div className="aspect-video relative overflow-hidden rounded-t-xl bg-gray-100 shrink-0">
                  {product.images[0] ? (
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Нет фото
                    </div>
                  )}
                  {product.isBestseller && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-sm">
                      <Star className="h-3 w-3 mr-1 fill-yellow-900" />
                      ХИТ
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <Link 
                      to={`/catalog?category=${product.categoryId}`}
                      className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full hover:bg-blue-100 transition-colors"
                    >
                      {categories.find(c => c.id === product.categoryId)?.name}
                    </Link>
                    {product.subcategoryId && (
                       <Link 
                         to={`/catalog?category=${product.categoryId}&subcategory=${product.subcategoryId}`}
                         className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full hover:bg-gray-200 transition-colors"
                       >
                         {subcategories.find(s => s.id === product.subcategoryId)?.name}
                       </Link>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">
                    {product.shortDescription}
                  </p>
                  
                  <div className="space-y-2 mb-6 flex-grow">
                    {product.specifications.slice(0, 3).map(spec => (
                      <div key={spec.id} className="flex justify-between text-xs text-gray-500 border-b border-gray-50 pb-1">
                        <span>{spec.name}</span>
                        <span className="font-medium text-gray-700">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={`/catalog/${product.id}`} className="w-full py-2 px-4 bg-gray-900 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 mt-auto">
                    <Info className="h-4 w-4" />
                    <span>Подробнее</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
              <p className="text-gray-500">В этой категории пока нет товаров.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
