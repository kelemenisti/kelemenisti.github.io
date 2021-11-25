export interface Product {
  name: string;
  category: Category;
  inStock: boolean;
  price: number;
}

export type Category = 'Smartphone' | 'Laptop';
