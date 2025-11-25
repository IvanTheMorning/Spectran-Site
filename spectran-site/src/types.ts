export interface Category {
  id: string;
  name: string;
  description?: string;
}

export interface Subcategory {
  id: string;
  categoryId: string;
  name: string;
}

export interface ProductSpecification {
  id: string;
  name: string;
  value: string;
}

export interface Product {
  id: string;
  categoryId: string;
  subcategoryId?: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  specifications: ProductSpecification[];
  isBestseller?: boolean;
}
