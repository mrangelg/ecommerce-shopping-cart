import React, { useState } from 'react';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/Filter';

function App() {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  const sortProducts = (event) => {
    console.log("event: ", event.target.value);
    setSort(event.target.value);
    switch(event.target.value){
      case 'lowest':
        setProducts(products.sort((a,b) => a.price - b.price));
        break;
      case 'highest':
        setProducts(products.sort((a,b) => b.price - a.price));
        break;
      default:
        setProducts(products.sort((a,b) => (a._id > b._id)? -1 : 1));
    }
  };

  const filterProducts = (event) => {
    setSize(event.target.value); 
    (event.target.value !== "ALL")? setProducts(data.products.filter((product) => product.availableSizes.indexOf(event.target.value) >=0)) : setProducts(data.products);
  }

  return (
    <div className="grid-container">
      <header>
        <a href="/">Ecommerce Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter count={products.length} size={size} sort={sort} sortProducts={sortProducts} filterProducts={filterProducts} />
            <Products products={products} />
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>All right is reserved</footer>
    </div>
  );
}

export default App;
