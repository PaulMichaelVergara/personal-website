import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-container">
          <img src="/pmv.png" alt="PMV Logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500} className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="projects" smooth={true} duration={500} className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" smooth={true} duration={500} className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
