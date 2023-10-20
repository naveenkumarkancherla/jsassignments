import React, { useState } from 'react';

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to your backend to add the product
    const newProduct = {
      name: productName,
      price: parseFloat(productPrice),
    };
    
    fetch('http://localhost:9000/api/v1/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error adding product:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
