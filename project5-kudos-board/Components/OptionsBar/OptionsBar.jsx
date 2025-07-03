// import { useState, useEffect } from "react";
import axios from "axios";
import "./OptionsBar.css"
import CreateBoardModal from "../CreateBoardModal/CreateBoardModal";
import { useState } from "react";
// import CreateBoardModal from "../createBoardModal/createBoardModal";
// TODO: export function for createNewBoard from Jessica
// TODO: import {function name} from <whereever it is from>

const OptionsBar = ({ setKudosBoards, setShowCreateBoardModal, setBoardInfo }) => {
    //const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);
    //const [boardInfo, setBoardInfo] = useState({});

    async function getAll (){
        console.log("Geting the sort for all available cards: "); // log the search query to the console

        try {
            const { data } = await axios.get(
                // TODO: insert some link from back end + get all route
                "http://localhost:3000/boards/"
            );
            setKudosBoards(data); // update kudosBoard display with the search results
        } catch (err) {
            console.error("Error finding this input: ", err);
        }
    }


    async function getRecents (){
        console.log("Geting the sort for all available cards most recently made to least recently made order: "); // log the search query to the console

        try {
            const { data } = await axios.get(
                // TODO: insert some link from back end + get recents route (most to least recent)
                "http://localhost:3000/boards?sort=created_at_desc"
            );
            setKudosBoards(data); // update kudosBoard display with the search results
        } catch (err) {
            console.error("Error finding this input: ", err);
        }
    }

    async function getCelebrations (){
        console.log("Geting the sort for all celebration cards "); // log the search query to the console

        try {
            const { data } = await axios.get(
                // TODO: insert some link from back end + get celebrations route 
                "http://localhost:3000/boards?category=Celebration"
            );
            setKudosBoards(data); // update kudosBoard display with the search results
        } catch (err) {
            console.error("Error finding this input: ", err);
        }
        
    }

    async function getThankYous (){
        console.log("Geting the sort for all thank you cards "); // log the search query to the console

        try {
            const { data } = await axios.get(
                // TODO: insert some link from back end + get thank yous route 
                "http://localhost:3000/boards?category=Thank_You"
            );
            setKudosBoards(data); // update kudosBoard display with the search results
        } catch (err) {
            console.error("Error finding this input: ", err);
        }
        
    }

    async function getInspirations (){
            console.log("Geting the sort for all inspiration cards "); // log the search query to the console

        try {
            const { data } = await axios.get(
                // TODO: insert some link from back end + get inspiration route 
                "http://localhost:3000/boards?category=Inspiration"
            );
            setKudosBoards(data); // update kudosBoard display with the search results
        } catch (err) {
            console.error("Error finding this input: ", err);
        }
    }

    function createNewBoard (){
        // TODO: add logic from Jessica
        setBoardInfo({})
        setShowCreateBoardModal(true);
    }

    return (
        <>
        <div className="options">
            <div className="card-options-bar">
                <button onClick={getAll}>All</button>
                <button onClick={getRecents}>Recent</button>
                <button onClick={getCelebrations}>Celebration</button>
                <button onClick={getThankYous}>Thank You</button>
                <button onClick={getInspirations}>Inspiration</button>
            </div>
            <div className= "create-board-button">
                <button onClick={createNewBoard}>Create a New Board</button>
                
            </div> 
        </div>

        </>
    )

}

export default OptionsBar
