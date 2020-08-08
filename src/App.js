import React, { useState } from 'react';
import data from './data.json';
import Products from './components/Products';

function App() {
  const [products] = useState(data.products);

  return (
    <div className="grid-container">
      <header>
        <a href="/">Ecommerce Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
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
