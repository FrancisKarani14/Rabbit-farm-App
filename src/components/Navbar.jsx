import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1>🐇 Smart Rabbit</h1>
        </Link>
      </div>
      <div className="navbar-links">
        <NavLink to="/home" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Home</NavLink>
        <NavLink to="/animallist" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>My Rabbits</NavLink>
      </div>
      <div className="navbar-buttons">
        <Link to="/login" className="btn-nav">Sign In</Link>
        <Link to="/signup" className="btn-nav btn-signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
