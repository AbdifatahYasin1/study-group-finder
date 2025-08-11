import React from "react";

function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search groups by name or subject..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      style={{
        padding: "0.5rem",
        width: "100%",
        maxWidth: "400px",
        marginBottom: "1.5rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    />
  );
}

export default SearchBar;
