// import { useState, useEffect } from "react";
// import axios from "axios";
import "./OptionsBar.css"
import CreateBoardModal from "../CreateBoardModal/CreateBoardModal";
// import { useState } from "react";
// import CreateBoardModal from "../createBoardModal/createBoardModal";
// TODO: export function for createNewBoard from Jessica
// TODO: import {function name} from <whereever it is from>

const OptionsBar = ({   
    setShowCreateBoardModal,
    setBoardInfo,
    handleRecentSort,
    handleFilterByCategory,
    fetchBoards
     }) => {

    function createNewBoard (){
        // TODO: add logic from Jessica
        setBoardInfo({})
        setShowCreateBoardModal(true);
    }

    return (
        <>
        <div className="options">
            <div className="card-options-bar">
                <button onClick={() => handleFilterByCategory("All")}>All</button>
                <button onClick={handleRecentSort}>Recent</button>
                <button onClick={() => handleFilterByCategory("Celebration")}>Celebration</button>
                <button onClick={() => handleFilterByCategory("Thank_You")}>Thank You</button>
                <button onClick={() => handleFilterByCategory("Inspiration")}>Inspiration</button>
            </div>
            <div className= "create-board-button">
                <button onClick={createNewBoard}>Create a New Board</button>
                
            </div> 
        </div>

        </>
    )

}

export default OptionsBar
