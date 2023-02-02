import React, { useState } from "react";

const Search = (props) => {
  const [query, setQuery] = useState("");

  return (
    <div className="search">
      <input
        type="text"
        className="search"
        placeholder="Search for teacher name , your price , your level or subjects ..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="btn btn-secondary searchButton"
        type="button"
        onClick={() => props.search(query)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;