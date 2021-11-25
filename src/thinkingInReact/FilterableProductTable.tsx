import React, { useState } from 'react';
import { Product } from './model/model';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

interface FilterableProductTableProps {
  data: Product[];
}

const FilterableProductTable: React.FC<FilterableProductTableProps> = ({ data }) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div style={{ border: '5px solid red', padding: '10px', width: '500px' }}>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable data={data} filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  );
};

export default FilterableProductTable;
