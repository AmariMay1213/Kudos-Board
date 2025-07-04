import { useState } from "react";
import axios from "axios";
import "./SearchBar.css"
// import './App.css'

const SearchBar = ({ handleSearch }) => { // this was passed in from HomePage.jsx so the hook can be used in SearchBar.jsx
    const [searchQuery, setSearchQuery] = useState(""); // state variable to hold search query and updates as the user types in the search bar

    const handleSearchClick = async () => { 
        // when the user clicks the search button, we want to fetch movies based on the search query.
        console.log("Searching for: ", searchQuery); // log the search query to the console
                handleSearch(searchQuery); 
    }
    
    // clear search results and reset the search query
    const handleClear = async() => {
        console.log("Clear search");

    
        setSearchQuery(""); // clear the search query
        handleSearch(""); 
    }
    
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="search-bar">
            {/* state variable (searchQuery) holds the curr text the user has typed in search bar, gets linked to the value attribute of the <input> element */}
            <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search Here..." /> 
            <button onClick={handleSearchClick}>Search</button>
            <button onClick={handleClear}>Clear</button>
        </div>
    );
}    

export default SearchBar

