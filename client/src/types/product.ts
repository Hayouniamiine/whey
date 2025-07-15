export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  description?: string;
  stock: number;
  sku: string;
}

export interface ProductFormData {
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  description: string;
  stock: number;
  sku: string;
  isNew: boolean;
  isSale: boolean;
}