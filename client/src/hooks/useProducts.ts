import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { productStore } from '@/stores/productStore';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>(productStore.getProducts());

  useEffect(() => {
    const unsubscribe = productStore.subscribe(() => {
      setProducts(productStore.getProducts());
    });

    return unsubscribe;
  }, []);

  return {
    products,
    addProduct: productStore.addProduct.bind(productStore),
    updateProduct: productStore.updateProduct.bind(productStore),
    deleteProduct: productStore.deleteProduct.bind(productStore),
    getProduct: productStore.getProduct.bind(productStore),
  };
};