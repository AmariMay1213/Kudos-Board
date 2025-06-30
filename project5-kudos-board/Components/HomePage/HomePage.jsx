// import pageLogo from './assets/k.png'
// import './App.css'
// import KudosList from "./KudosList";

import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";

function HomePage() {
  // needs a search bar with a search and clear
  // needs a nav bar with -- all, recent and our other categories : celebration, thank you, inspiration
  // create new board button
  // boards list section

    const [kudosBoards, setKudosBoards] = useState([]);


  return (
    <>
      <SearchBar setKudosBoards={setKudosBoards} />
    </>
  );
}

export default HomePage;
