import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  };

  const showProductDetails = (product) => {
    setSelectedProduct(product);
    console.log(product.id)
  };

  /* const handleClose = () => {
    setSelectedProduct(null);
  }; */

  return (
    <div className="App">
      <h1>Products grid</h1>
      <div className='card'>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id} onClick={() => showProductDetails(product)}>
            <img src={product.image} alt={product.title} />
            <div>
            <h3>{product.title}</h3>
            <p>{product.price}$</p>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct ? (
          <div className='product-item'>
            <img src={selectedProduct.image} alt={selectedProduct.title} />
            <h2>{selectedProduct.title}</h2>
            <h4>{selectedProduct.category}</h4>
            <p>{selectedProduct.description}</p>
            <p>${selectedProduct.price}</p>
          </div>
      ) : (
        <div className='no-product-card'>
          <h1>No Product is Selected</h1>
        </div>
      )
    }
    </div>
    </div>
  )
}

export default App;
