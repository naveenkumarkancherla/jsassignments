import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail({ products }) {
  const { productId } = useParams();
  const product = products.find((p) => p._id === productId);

  if (!product) {
    return <div className="container mt-5">Product not found</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Product Details</h2>
          <p className="card-text"><strong>ID:</strong> {product._id}</p>
          <p className="card-text"><strong>Name:</strong> {product.name}</p>
          <p className="card-text"><strong>Price:</strong> ₹{product.price}</p>
          <Link to={`/edit-product/${product._id}`} className="text-decoration-none btn btn-success">
              Edit
          </Link>
          <Link to="/" className="btn btn-danger m-3">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
