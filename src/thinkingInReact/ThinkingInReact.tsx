import React from 'react';
import FilterableProductTable from './FilterableProductTable';
import { Product } from './model/model';

const data: Product[] = [
  { name: 'Iphone 13 Pro Max', category: 'Smartphone', inStock: true, price: 999 },
  { name: 'Google Pixel 6 Pro', category: 'Smartphone', inStock: false, price: 899 },
  { name: 'Samsung Galaxy S21 Ultra', category: 'Smartphone', inStock: true, price: 999 },
  { name: 'Xiaomi Mi 11T', category: 'Smartphone', inStock: false, price: 899 },
  { name: 'MacBook Pro 14', category: 'Laptop', inStock: true, price: 1299 },
  { name: 'DELL XPS 13', category: 'Laptop', inStock: true, price: 1199 },
  { name: 'Lenovo ThinkPad X1 Carbon Gen 9', category: 'Laptop', inStock: false, price: 1999 }
];

function ThinkingInReact() {
  return (
    <>
      <FilterableProductTable data={data} />
    </>
  );
}

export default ThinkingInReact;
