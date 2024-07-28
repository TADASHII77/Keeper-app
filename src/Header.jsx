import React from "react";

function Header({ searchTerm, onSearchChange }) {
  return (
    <header>
      <div className="searchcontainer">
        <h1>Keeper</h1>
        <input
          className="searchbox"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>
    </header>
  );
}

export default Header;
