import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/api/login', { username, password })
      .then((res) => {
        console.log('login:', res.data);
        if (res.data.Status === 'Success') {
          alert('Login successful! Welcome.');
          navigate('/dashboard');
        } else {
          alert('Invalid username or password. Please try again.');
        }
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              autoComplete="off"
              name="username"
              className="form-control rounded-0"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>
        <p>Already Have an Account</p>
        <Link
          to="/"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
