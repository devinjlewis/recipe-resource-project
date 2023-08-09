import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Search.css";
import { searchResults } from "../Api/Api";

function Search() {
  const [searchRecipesResult, setSearchRecipesResult] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const { input } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    handleSearch();
  }, [input]);

  async function handleSearch() {
    try {
      let result = await searchResults(searchInput);
      setSearchRecipesResult(result);
    } catch (e) {
      console.error("Error fetching search results:", e);
    }
  }

  return (
    <div className="search-container">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="search-btn"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="btn btn-success"
          type="button"
          id="search-btn"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
