import { useState, useEffect } from "react";
import axios from "axios";
import "./OptionsBar.css"
import CreateBoardModal from "../CreateBoardModal/CreateBoardModal";
// import CreateBoardModal from "../createBoardModal/createBoardModal";
// TODO: export function for createNewBoard from Jessica
// TODO: import {function name} from <whereever it is from>

const OptionsBar = ({ setKudosBoards, setShowCreateBoardModal, setBoardInfo, boards, setBoards, fetchBoards }) => {
    //const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);
    //const [boardInfo, setBoardInfo] = useState({});


    async function getAll() {
        try {
            const { data } = await axios.get(`http://localhost:3000/boards/`);
            console.log(data);
            setBoards(data);
            console.log("Fetched boards:", data);
        } catch (err) {
            console.error("Error boards: ", err);
        }
    }

    useEffect(() => {
        getAll();
    }, []);
    

    async function getRecents (){
        console.log("Geting the sort for all available cards most recently made to least recently made order: "); // log the search query to the console

        try {
            const { data } = await axios.get(
                // TODO: insert some link from back end + get recents route (most to least recent)
            );
            setBoards(data); // update kudosBoard display with the search results
        } catch (err) {
            console.error("Error finding this input: ", err);
        }
    }

    useEffect(() => {
        getRecents();
    }, []);

    async function getCelebrations (){
        console.log("Geting the sort for all celebration cards "); // log the search query to the console

        try {
            const { data } = await axios.get(
                // TODO: insert some link from back end + get celebrations route 
            );
            setBoards(data); // update kudosBoard display with the search results
        } catch (err) {
            console.error("Error finding this input: ", err);
        }
        
    }

    useEffect(() => {
        getCelebrations();
    }, []);

    async function getThankYous (){
        console.log("Geting the sort for all thank you cards "); // log the search query to the console

        try {
            const { data } = await axios.get(
                // TODO: insert some link from back end + get thank yous route 
            );
            setBoards(data); // update kudosBoard display with the search results
        } catch (err) {
            console.error("Error finding this input: ", err);
        }
        
    }

    useEffect(() => {
        getThankYous();
    }, []);


    async function getInspirations (){
        console.log("Geting the sort for all inspiration cards "); // log the search query to the console

        try {
            const { data } = await axios.get(
                // TODO: insert some link from back end + get inspiration route 
            );
            setBoards(data); // update kudosBoard display with the search results
        } catch (err) {
            console.error("Error finding this input: ", err);
        }
    }

    useEffect(() => {
        getInspirations();
    }, []);

    function createNewBoard (){
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
