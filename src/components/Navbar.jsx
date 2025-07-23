import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg bg-success text-white px-3" style={{ backgroundColor:'palegreen', padding: "10px"}} >
      <div className="container-fluid"  >
        <h1 className="navbar-brand text-white">🐇 Rabbit Farm</h1>

        <button className="menu-toggle btn btn-outline-light d-lg-none" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home" className="nav-link text-white" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/animallist" className="nav-link text-white" onClick={() => setIsOpen(false)}>Animal List</Link>
            </li>

            {/* 🔽 Bootstrap Dropdown */}
            <li className="nav-item dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Options
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item active" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>

          <div className="d-flex gap-2">
            <Link to="/signup" className="btn btn-outline-light" onClick={() => setIsOpen(false)}>Sign Up</Link>
            <Link to="/login" className="btn btn-outline-light" onClick={() => setIsOpen(false)}>Log In</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
