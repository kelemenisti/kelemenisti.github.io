import React from 'react';
import { Product } from './model/model';
import ProductRow from './ProductRow';

interface ProductTableProps {
  data: Product[];
  filterText: string;
  inStockOnly: boolean;
}

const ProductTable: React.FC<ProductTableProps> = ({ data, filterText, inStockOnly }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>In stock</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data
          .filter((product: Product) => product.name.includes(filterText) && (inStockOnly ? product.inStock : true))
          .map((product: Product) => (
            <ProductRow
              key={product.name}
              name={product.name}
              category={product.category}
              inStock={product.inStock}
              price={product.price}
            />
          ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
