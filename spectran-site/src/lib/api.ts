import type { Product, Category, Subcategory } from '../types';

export const api = {
  getProducts: async (): Promise<Product[]> => {
    const files = import.meta.glob('../content/products/*.json');
    const products: Product[] = [];
    for (const path in files) {
      const mod = await files[path]() as { default: Product };
      const product = mod.default;
      if (!product.id) {
        product.id = path.split('/').pop()?.replace('.json', '') || '';
      }
      products.push(product);
    }
    return products;
  },

  getCategories: async (): Promise<Category[]> => {
    const files = import.meta.glob('../content/categories/*.json');
    const categories: Category[] = [];
    for (const path in files) {
      const mod = await files[path]() as { default: Category };
      const category = mod.default;
      if (!category.id) {
        category.id = path.split('/').pop()?.replace('.json', '') || '';
      }
      categories.push(category);
    }
    return categories;
  },

  getSubcategories: async (): Promise<Subcategory[]> => {
    const files = import.meta.glob('../content/subcategories/*.json');
    const subcategories: Subcategory[] = [];
    for (const path in files) {
      const mod = await files[path]() as { default: Subcategory };
      const subcategory = mod.default;
      if (!subcategory.id) {
        subcategory.id = path.split('/').pop()?.replace('.json', '') || '';
      }
      subcategories.push(subcategory);
    }
    return subcategories;
  },

  getProduct: async (id: string): Promise<Product | undefined> => {
    const products = await api.getProducts();
    return products.find(p => p.id === id);
  }
};
