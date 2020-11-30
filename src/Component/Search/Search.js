import React from "react";
import StarRating from "../StarRating";
import "./search.css";

const Search = ({
  handleSearch,
  searchValue,
  handleSearchRate,
  searchRate,
}) => {
  return (
    <div className="header-container">
      <h1>MovieApp</h1>
      <div className="search-container">
        <input type="text" value={searchValue} onChange={handleSearch} />
        <StarRating rate={searchRate} handleRate={handleSearchRate} />
      </div>
    </div>
  );
};

export default Search;
