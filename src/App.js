import React, { useState } from 'react';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("latest");
  const [cartItems, setCartItems] = useState([]);

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

  const addToCart = (product) => {
    let alreadyInCart = false;
    let copyCartItems = [...cartItems];
    copyCartItems.forEach((item) => {
      if(item._id === product._id){
        item.count++;
        alreadyInCart = true;
      }
    });    
    alreadyInCart? setCartItems([...copyCartItems]) : setCartItems([...cartItems, { ...product, count: 1}])
  }

  const removeFromCart = (product) => {
    let copyCartItems = [...cartItems];
    setCartItems(copyCartItems.filter((item) => item._id !== product._id));
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
            <Products products={products} addToCart={addToCart} />
          </div>
          <div className="sidebar">
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </div>
        </div>
      </main>
      <footer>All right is reserved</footer>
    </div>
  );
}

export default App;
