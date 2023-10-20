import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Imagefile from './image.jpg'
export function Home() {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    if (!auth) {
      setAuth(true);
      navigate('/loginform'); // Navigating to the "loginform" route
    }
  };

  const handleCalculatorClick = () => {
    if (!auth) {
      setAuth(true);
      navigate('/calculator2'); // Navigating to the "/loginform" route
    }
  };
  return (
    <div>
      <center>
      <h1>Welcome to the Home page!!</h1>
      <p>
        Hello everyone!<br />
        I am Naveenkumar. Here I am presenting the Home page with Router specifications.
      </p>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleCalculatorClick}>Calculator</button>
      <img src="image.jpg" height="150px" width="200px"/>
      </center>
    </div>
  );
}
