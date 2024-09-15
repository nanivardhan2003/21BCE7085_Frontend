import React from 'react';
import { Search } from 'lucide-react';
import './SearchBar.css';

const SearchBar = () => (
  <div className="search-container">
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search Trademark Here eg: Mickey Mouse"
        className="search-input"
      />
      <button className="search-button">
        <Search size={20} />
      </button>
    </div>
  </div>
);

export default SearchBar;
