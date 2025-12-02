import React, { useContext } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { isDarkMode } = useTheme();
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-container">
          <img 
            src={isDarkMode ? "/pmvlight.png" : "/pmv.png"} 
            alt="PMV Logo" 
            className="logo" 
          />
        </div>
        <div className="nav-right">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
