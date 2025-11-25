import type { Product, Category, Subcategory } from '../types';

export const api = {
  getProducts: async (): Promise<Product[]> => {
    const files = import.meta.glob('../content/products/*.json');
    const products: Product[] = [];
    for (const path in files) {
      const mod = await files[path]() as { default: Product };
      products.push(mod.default);
    }
    return products;
  },

  getCategories: async (): Promise<Category[]> => {
    const files = import.meta.glob('../content/categories/*.json');
    const categories: Category[] = [];
    for (const path in files) {
      const mod = await files[path]() as { default: Category };
      categories.push(mod.default);
    }
    return categories;
  },

  getSubcategories: async (): Promise<Subcategory[]> => {
    const files = import.meta.glob('../content/subcategories/*.json');
    const subcategories: Subcategory[] = [];
    for (const path in files) {
      const mod = await files[path]() as { default: Subcategory };
      subcategories.push(mod.default);
    }
    return subcategories;
  },

  getProduct: async (id: string): Promise<Product | undefined> => {
    const products = await api.getProducts();
    return products.find(p => p.id === id);
  }
};
