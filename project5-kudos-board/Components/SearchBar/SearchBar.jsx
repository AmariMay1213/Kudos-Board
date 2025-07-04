import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ handleSearch, handleClear }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchClick = () => {
    if (searchInput.trim() !== "") {
      handleSearch(searchInput);
    }
  };

  const handleClearClick = () => {
    setSearchInput("");
    handleClear();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search for a board..."
      />
      <button onClick={handleSearchClick}>Search</button>
      <button onClick={handleClearClick}>Clear</button>
    </div>
  );
}

export default SearchBar;
