import React, { useState } from "react";
import "./Search.css";

function Search() {
  const [searchRecipes, setSearchRecipes] = useState([]);

  return (
    <div className="search-container">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="search-btn"
        />
        <button className="btn btn-success" type="button" id="search-btn">
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
