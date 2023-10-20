import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ products }) {
  return (
    <div  className="card shadow m-3 m-5">
    <div className="container mt-5">
      <h1 className="mb-4" style={{fontWeight:700}}>Product List</h1>
      <Link to="/add-product" className="text-decoration-none btn btn-primary m-4">
        Add Product
      </Link>
      <ul className="list-group m-5 shadow">
        {products.map((product) => (
          <li key={product._id} className="list-group-item d-flex justify-content-between align-items-center">
            <Link to={`/products/${product._id}`} className="text-decoration-none">
              {product.name}
            </Link>
            <Link to={`/edit-product/${product._id}`} className="text-decoration-none btn btn-success">
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default ProductList;
