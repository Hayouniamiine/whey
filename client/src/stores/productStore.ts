import { Product } from "@/types/product";
import supplementsImage from "@/assets/supplements-hero.jpg";
import sportswearImage from "@/assets/sportswear-hero.jpg";

class ProductStore {
  private products: Product[] = [
    {
      id: "1",
      name: "Elite Whey Protein",
      price: 49.99,
      originalPrice: 69.99,
      image: supplementsImage,
      rating: 4.8,
      reviews: 256,
      category: "Supplements",
      isNew: false,
      isSale: true,
      description: "Premium whey protein isolate for muscle building and recovery",
      stock: 50,
      sku: "WP-001",
    },
    {
      id: "2",
      name: "Performance T-Shirt",
      price: 29.99,
      image: sportswearImage,
      rating: 4.9,
      reviews: 189,
      category: "Sportswear",
      isNew: true,
      isSale: false,
      description: "Moisture-wicking performance t-shirt for intense workouts",
      stock: 30,
      sku: "TS-001",
    },
    {
      id: "3",
      name: "Creatine Monohydrate",
      price: 24.99,
      image: supplementsImage,
      rating: 4.7,
      reviews: 342,
      category: "Supplements",
      isNew: false,
      isSale: false,
      description: "Pure creatine monohydrate for strength and power enhancement",
      stock: 75,
      sku: "CR-001",
    },
    {
      id: "4",
      name: "Compression Leggings",
      price: 39.99,
      originalPrice: 49.99,
      image: sportswearImage,
      rating: 4.6,
      reviews: 128,
      category: "Sportswear",
      isNew: false,
      isSale: true,
      description: "High-performance compression leggings with four-way stretch",
      stock: 25,
      sku: "CL-001",
    },
    {
      id: "5",
      name: "Pre-Workout Formula",
      price: 34.99,
      image: supplementsImage,
      rating: 4.9,
      reviews: 294,
      category: "Supplements",
      isNew: true,
      isSale: false,
      description: "Energy-boosting pre-workout formula with natural ingredients",
      stock: 40,
      sku: "PW-001",
    },
    {
      id: "6",
      name: "Athletic Shorts",
      price: 24.99,
      image: sportswearImage,
      rating: 4.5,
      reviews: 156,
      category: "Sportswear",
      isNew: false,
      isSale: false,
      description: "Lightweight athletic shorts with moisture management",
      stock: 35,
      sku: "AS-001",
    },
  ];

  private listeners: Array<() => void> = [];

  getProducts(): Product[] {
    return [...this.products];
  }

  getProduct(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  addProduct(product: Omit<Product, 'id' | 'rating' | 'reviews'>): Product {
    const newProduct: Product = {
      ...product,
      id: Math.random().toString(36).substr(2, 9),
      rating: 0,
      reviews: 0,
    };
    this.products.push(newProduct);
    this.notifyListeners();
    return newProduct;
  }

  updateProduct(id: string, updates: Partial<Product>): Product | null {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    this.products[index] = { ...this.products[index], ...updates };
    this.notifyListeners();
    return this.products[index];
  }

  deleteProduct(id: string): boolean {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return false;
    
    this.products.splice(index, 1);
    this.notifyListeners();
    return true;
  }

  subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener());
  }
}

export const productStore = new ProductStore();