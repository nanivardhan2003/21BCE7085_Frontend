import React from 'react';
import './SearchResults.css';

const SearchResults = () => (
  <div className="search-results">
    <p>About 159 Trademarks found for "nike"</p>
    <div className="suggestions">
      <span>Also try searching for</span>
      <button className="suggestion-button">nike'</button>
      <button className="suggestion-button">'ke</button>
    </div>
  </div>
);

export default SearchResults;
