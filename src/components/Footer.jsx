import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Smart Rabbit Farm Manager &mdash; Built with ❤️ for modern farmers</p>
      <div className="footer-links">
        <Link to="/home">Home</Link>
        <Link to="/animallist">My Rabbits</Link>
        <Link to="/rabbitform">Add Rabbit</Link>
      </div>
    </footer>
  );
}

export default Footer;
