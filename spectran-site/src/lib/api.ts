import type { Product, Category, Subcategory } from '../types';

export const api = {
  getProducts: async (): Promise<Product[]> => {
    try {
      const response = await fetch('/content/products.json');
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      return data.products || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  getCategories: async (): Promise<Category[]> => {
    try {
      const response = await fetch('/content/categories.json');
      if (!response.ok) throw new Error('Failed to fetch categories');
      const data = await response.json();
      return data.categories || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  getSubcategories: async (): Promise<Subcategory[]> => {
    try {
      const response = await fetch('/content/subcategories.json');
      if (!response.ok) throw new Error('Failed to fetch subcategories');
      const data = await response.json();
      return data.subcategories || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  getProduct: async (id: string): Promise<Product | undefined> => {
    const products = await api.getProducts();
    return products.find(p => p.id === id);
  }
};
