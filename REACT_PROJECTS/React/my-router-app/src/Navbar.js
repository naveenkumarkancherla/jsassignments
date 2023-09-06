import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><Link to="/" style={linkStyle}>Home</Link></li>
        <li style={liStyle}><Link to="/dashboard" style={linkStyle}>Dashboard</Link></li>
        <li style={liStyle}><Link to="/about" style={linkStyle}>About</Link></li>
        <li style={liStyle}><Link to="/calculator1" style={linkStyle}>Calculator1</Link></li>
        <li style={liStyle}><Link to="/calculator2" style={linkStyle}>React Calculator2</Link></li>
        <li style={liStyle}><Link to="/loginform" style={linkStyle}>Login Form</Link></li>
        <li style={liStyle}><Link to="/filterdata" style={linkStyle}>Search default input</Link></li>
        <li style={liStyle}><Link to="/displayname" style={linkStyle}>Input Name List</Link></li>
      </ul>
    </nav>
  );
}

// CSS styles
const navStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
};

const ulStyle = {
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const liStyle = {
  marginRight: '30px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  fontSize:25,
};
