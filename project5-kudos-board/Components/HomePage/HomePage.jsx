// import pageLogo from './assets/k.png'
// import './App.css'
// import KudosList from "./KudosList";

import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./HomePage.css"
import OptionsBar from "../OptionsBar/OptionsBar";
// import KudosBoards from "../KudosBoards/KudosBoards"
import BoardGrid from "../boardGrid/boardGrid"; 

function HomePage() {
  // needs a search bar with a search and clear
  // needs a nav bar with -- all, recent and our other categories : celebration, thank you, inspiration
  // create new board button
  // boards list section

    const [kudosBoards, setKudosBoards] = useState([]);


  return (
    <>
      <SearchBar setKudosBoards={setKudosBoards} />
      <OptionsBar setKudosBoards={setKudosBoards} />

      {/* TODO: lets double check this line, should be a div just for the kudos boards to be listed in a grid, but you never know */}
      <BoardGrid kudosBoards={kudosBoards} />
    </>
  );
}

export default HomePage;
