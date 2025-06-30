import { useState, useEffect } from "react";
import axios from "axios";
// import './App.css'

const SearchBar = ({ setKudosBoards }) => { // this was passed in from HomePage.jsx so the hook can be used in SearchBar.jsx
    const [searchQuery, setSearchQuery] = useState(""); // state variable to hold search query and updates as the user types in the search bar


    const handleSearch = async () => { 
        // when the user clicks the search button, we want to fetch movies based on the search query.
        console.log("Searching for: ", searchQuery); // log the search query to the console

        try {
            const { data } = await axios.get(
                // TODO: insert some link from back end + search query route
            );
            setKudosBoards(data.results); // update kudosBoard display with the search results
        } catch (err) {
            console.error("Error finding this input: ", err);
        }
    }
    
    // clear search results and reset the search query
    const handleClear = async() => {
        console.log("Clear search");
        try {
            // get the search query from a call
            const { data } = await axios.get(
                // TODO: insert some link from back end + get all titles route
            );
            setKudosBoards(data.results); // update kudosBoard dispaly with the original results
    
        } catch (err) {
            console.error("Error clearing the input: ", err);
        }
        setSearchQuery(""); // clear the search query
    }
    
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="search-bar">
            {/* state variable (searchQuery) holds the curr text the user has typed in search bar, gets linked to the value attribute of the <input> element */}
            <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search Here..." /> 
            <button onClick={handleSearch}>Search</button>
            <button onClick={handleClear}>Clear</button>
        </div>
    );
}    


export default SearchBar


