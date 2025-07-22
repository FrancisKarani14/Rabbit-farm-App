
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-icon">
        <h1>🐇 Welcome to the Rabbit Farm!</h1>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/animallist">Animal List</Link>
      </div>
      <div className="navbar-auth">
        <Link to="/signup" className="signup">Sign Up</Link>
        <Link to="/login" className="login">Log In</Link>
      </div>
    </nav> 
  );
}

export default Navbar;

