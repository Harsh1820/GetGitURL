import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './App.css';
import './listCss.css'

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>Fake Store Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.title}</h3>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <img src={product.image} alt={product.title} />
            <p><strong>Rating:</strong> {product.rating.rate} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
