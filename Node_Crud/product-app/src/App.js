import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from your backend API and update the 'products' state
    fetch('http://localhost:9000/api/v1/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <Router>
      <div className="app">
        <div className="left-panel">
          <ProductList products={products} />
        </div>
        <div className="right-panel">
          <Routes>
              <Route path="/" element={<Outlet />}>
              <Route path="/products/:productId" element={<ProductDetail products={products} />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/edit-product/:productId" element={<EditProduct products={products} />} />
          </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
