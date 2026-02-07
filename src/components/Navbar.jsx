import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>🐇 Rabbit Farm</h1>
      </div>
      <div className="navbar-links">
        <Link to="/home" className="nav-link">Home</Link>
      </div>
      <div className="navbar-buttons">
        <Link to="/login" className="btn-nav">Sign In</Link>
        <Link to="/signup" className="btn-nav btn-signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
