import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9000/api/v1/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setProductName(data.name);
        setProductPrice(data.price);
      })
      .catch((error) => console.error('Error fetching product details:', error));
  }, [productId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setProductName(value);
    } else if (name === 'price') {
      setProductPrice(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const updatedProduct = {
      name: productName,
      price: parseFloat(productPrice),
    };

    fetch(`http://localhost:9000/api/v1/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product updated:', data);
        
        navigate(`/products/${productId}`); 
      })
      .catch((error) => console.error('Error updating product:', error));
  };

  return (
    <div className="container mt-5">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            name="name"
            value={productName}
            onChange={handleInputChange}
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
            name="price"
            value={productPrice}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
