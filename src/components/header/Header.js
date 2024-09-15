import React from 'react';
import { Search } from 'lucide-react';
import logo from './Logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="Trademarkia" className="logo" />
        </div>
        <div className="search-container">
          <div className="search-wrapper">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search Trademark Here e.g. Mickey Mouse"
              className="search-input"
            />
          </div>
          <div>
          <button className="search-button">Search</button>
        </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;