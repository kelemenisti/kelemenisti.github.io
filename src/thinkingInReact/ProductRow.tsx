import React from 'react';
import { Category } from './model/model';

interface ProductRowProps {
  name: string;
  category: Category;
  inStock: boolean;
  price: number;
}

const ProductRow: React.FC<ProductRowProps> = ({ name, category, inStock, price }) => {
  const tdStyle = { padding: '5px' };

  return (
    <tr>
      <td style={tdStyle}>{name}</td>
      <td style={tdStyle}>{category}</td>
      <td style={tdStyle}>{inStock ? 'Yes' : 'No'}</td>
      <td style={tdStyle}>{price}</td>
    </tr>
  );
};

export default ProductRow;
