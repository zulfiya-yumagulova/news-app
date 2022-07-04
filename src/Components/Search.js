import React, { useState } from "react";
import "./Search.css";

export default function Search({ searchText }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. sport"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="btn-search">
          Search
        </button>
      </form>
    </div>
  );
}
