import React from "react";
import SearchButton from "../button/search-button";

const Search = () => {
  return (
    <div className="search-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="search-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input type="text" placeholder="Search" className="search-input" />
      <SearchButton />
    </div>
  );
};

export default Search;
