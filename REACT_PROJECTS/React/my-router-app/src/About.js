import React from 'react';
import { useNavigate } from 'react-router-dom';

export function About() {
  const navigate = useNavigate();
  
  return (
    <div>
      <center>
      <h2>This is  About page.</h2>
      <button onClick={() => navigate('/')} >Home</button>
      <button onClick={() => navigate('/dashboard')} >Dashboard</button>
      </center>
    </div>
  );
}
