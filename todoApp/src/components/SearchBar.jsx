import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="🔍 Search todos..."
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;