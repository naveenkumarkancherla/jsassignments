import React, { useState } from 'react';
import {Card} from './Card';
import {Cart} from './Cart';

const products = [
  { id: 1, name: 'Movie 1', imageSrc: '/images/image1.gif', price: 100 },
  { id: 2, name: 'Movie 2', imageSrc: '/images/image2.gif', price: 150 },
  { id: 3, name: 'Movie 3', imageSrc: '/images/image3.gif', price: 200 },
  { id: 4, name: 'Movie 4', imageSrc: '/images/image4.gif', price: 340 },
  { id: 5, name: 'Movie 5', imageSrc: '/images/image5.gif', price: 350 },
  { id: 6, name: 'Movie 6', imageSrc: '/images/image6.gif', price: 250 },
];

export const About = () => {
    const [cart, setCart] = useState([]);
    const [count,setCount] = useState(0);
  const addToCart = (product) => {
    setCart([...cart, product]);
    setCount(count+1);
  };

  const removeFromCart = (productId) => {
    alert("1 Item Removed from Cart!");
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    setCount(count-1);
    
  };

  return (
    <div className="container" style={{color:'white'}}>
      <h1 align="center" style={{color:'white',fontWeight:'600'}}>Book now</h1>
      <h2 class="btn btn-light" style={{fontSize:35}}>Cart <span style={{color:'white'}}  class="btn btn-dark">{count}</span></h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <Card
              title={product.name}
              imageSrc={product.imageSrc}
              price={product.price}
              addToCart={() => {
                alert(`${product.name} Added to cart!`);
                addToCart(product)
            }}
            />
          </div>
        ))}
      </div>
      <h2 class="btn btn-light" style={{fontSize:35}}>Cart <span style={{color:'white'}} class="btn btn-dark">{count}</span></h2>
     
      <Cart cart={cart} removeFromCart={removeFromCart} />
      
    </div>
  );
};