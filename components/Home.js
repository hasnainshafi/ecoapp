import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Home() {
  return (
    <div>
      <h1>Welcome to Eco-Impact Tracker</h1>
      <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
    </div>
  );
}

export default Home;
