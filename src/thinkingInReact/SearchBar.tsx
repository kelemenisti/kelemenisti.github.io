import React, { ChangeEvent } from 'react';

interface SearchBarProps {
  filterText: string;
  onFilterTextChange: (value: string) => void;
  inStockOnly: boolean;
  onInStockOnlyChange: (checked: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ filterText, onFilterTextChange, inStockOnly, onInStockOnlyChange }) => {
  const onTextInputChange = (e: ChangeEvent<{ value: string }>) => {
    onFilterTextChange(e.target.value);
  };

  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInStockOnlyChange(e.target.checked);
  };

  return (
    <>
      <input placeholder="Search..." value={filterText} onChange={onTextInputChange} />
      <div>
        <input id="inStock" type="checkbox" checked={inStockOnly} onChange={onCheckboxChange} />
        <label htmlFor="inStock">Only show products in stock</label>
      </div>
    </>
  );
};

export default SearchBar;
