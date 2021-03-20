import React from "react";
import SearchButton from "../button/search-button";

const Search = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search" className="search-input" />
      <SearchButton />
    </div>
  );
};

export default Search;
