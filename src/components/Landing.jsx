import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

const Landing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="landing-page">
      <div className="hero-section" data-aos="fade-up">
        <div className="hero-content">
          <h1>🐇 Welcome to Rabbit Farm Management System</h1>
          <p>Your trusted hub for tracking, managing, and expanding rabbit colonies</p>
          <NavLink to="/animallist" className="cta-button">
            Get Started
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Landing;
