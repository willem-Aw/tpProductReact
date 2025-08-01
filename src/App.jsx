import './App.css'
import { Input } from './components/forms/Input';
import { Checkbox } from './components/forms/Checkbox';
import { PRODUCTS } from './data/PRODUCTS';
import { ProductRow } from './components/products/ProductRow';
import { ProductCategoryRow } from './components/products/ProductCategoryRow';
import { useState } from 'react';

function App() {
  const [showInStockOnly, setshowInStocksOnly] = useState(false);
  const [search, setSearch] = useState('');
  const [rangeVal, setRangeVal] = useState(0);

  const visibleProducts = PRODUCTS.filter(product => {
    if (showInStockOnly && !product.isStocked) {
      return false;
    }

    if (search.toLocaleLowerCase() && !product.name.toLocaleLowerCase().includes(search)) {
      return false;
    }

    if (rangeVal && parseInt(product.price) < rangeVal) {
      return false;
    }

    return true;
  });

  return (
    <div className='container'>
      <SearchBar
        search={search}
        onSearchChange={setSearch}
        showInStockOnly={showInStockOnly}
        onVegetablesOnlyChange={setshowInStocksOnly} />
      <div className="flex prd-filter">
        <p>Filter products: </p>
        <Input
          type="range"
          placeholder=""
          value={rangeVal}
          onChange={setRangeVal}
          min="0"
          max="500"
          step="50"
        />
        <div className='range-value'>
          {rangeVal ? `Price: ${rangeVal}` : 'No price filter applied'}
        </div>
      </div>
      <ProductTable products={visibleProducts} />
    </div>
  )
}

function SearchBar({ showInStockOnly, onVegetablesOnlyChange, search, onSearchChange }) {
  return <div className='search-bar'>
    <Input
      type="text"
      placeholder="Enter the name of the product"
      value={search}
      onChange={onSearchChange}
    />
    <Checkbox
      checked={showInStockOnly}
      onChange={onVegetablesOnlyChange}
      label="Display only in stock" id="r-filter" />
  </div>
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  for (let product of products) {
    if (product.type !== lastCategory) {
      rows.push(<ProductCategoryRow key={product.type} name={product.type} />);
    }
    lastCategory = product.type;
    rows.push(<ProductRow key={product.name} product={product} />);
  }

  return <div className='prd-table'>
    <div className="head flex">
      <div className="name">Nom</div>
      <div className="price">Price</div>
    </div>
    <div className="body">
      {rows}
    </div>
  </div>
}

export default App
