// import pageLogo from './assets/k.png'
// import './App.css'
// import KudosList from "./KudosList";

import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./HomePage.css";
import OptionsBar from "../OptionsBar/OptionsBar";
// import KudosBoards from "../KudosBoards/KudosBoards"
import BoardGrid from "../boardGrid/boardGrid";
import CreateBoardModal from "../CreateBoardModal/CreateBoardModal";

function HomePage({ boards, createBoard, deleteBoard, categories, handleFilterByCategory, handleRecentSort, handleSearch}) {
  // needs a search bar with a search and clear
  // needs a nav bar with -- all, recent and our other categories : celebration, thank you, inspiration
  // create new board button
  // boards list section

  //const [kudosBoards, setKudosBoards] = useState([]);
  const [boardInfo, setBoardInfo] = useState({});
  const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);

  return (
    <>
      <SearchBar
      handleSearch = {handleSearch}
      />

      <OptionsBar
       setShowCreateBoardModal={setShowCreateBoardModal}
        setBoardInfo={setBoardInfo}
        handleRecentSort={handleRecentSort}                 
      handleFilterByCategory={handleFilterByCategory}     
      categories={categories}                             
    />


      {/* TODO: lets double check this line, should be a div just for the kudos boards to be listed in a grid, but you never know */}
      <BoardGrid kudosBoards={boards} />

      {showCreateBoardModal && (
        <CreateBoardModal
          boardInfo={boardInfo}
          setBoardInfo={setBoardInfo}
          show={showCreateBoardModal}
          setShowCreateBoardModal={setShowCreateBoardModal}
          createBoard={createBoard}
          categories={categories}
        />
      )}
    </>
  );
}

export default HomePage;

