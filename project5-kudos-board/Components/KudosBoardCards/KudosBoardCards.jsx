// import pageLogo from './assets/k.png'
// import './App.css'
//import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import {useState, useEffect} from 'react'

//THIS IS FOR WHEN YOU PRESS A BOARD ON THE HOME PAGE WANT TO LOOK AT SPECIFIC CARDS OF THAT BOARD

function KudosBoardCards(){
    // back button to home page
    // kudo board logo
    // title of card
    // create card button
    // container for cards
    console.log("kudoBoards");

    const navigate = useNavigate();
    const { boardId } = useParams();
    const {board, setBoard} = useState(null);
    const {cards, setCards} = useState([])

    useEffect (() => {
        
        const fetchData = async () => {
            try {
              console.log("board_Id param:", req.params.boardId);
            const boardRes = await axios.get(`http://localhost:3000/boards/${boardId}`);
            const cardRes = await axios.get(`http://localhost:3000/cards/${boardId}/board`);

            console.log("Fetch boards in kudosboard", boardRes.data);
            console.log("Fetch card data",cardRes.data);
            setBoard(boardRes.data);
            
            setCards(cardRes.data);
            // console.log("Fetched boards:", data);
          } catch (err) {
            console.error("Error boards: ", err);
          }
        };

     
          fetchData(); 

    
    
    
    
    }, [])

    const handleBack = () => {
        navigate("/"); // TODO: make sure this matches with the route in app.jsx and amari's backend
    }

    const createCard = () => {
        // TODO: get this info from Jessica
    }


    return (
        <>
        <div className="back-button">
            <button onClick={handleBack}>Home Page</button>
        </div>
        {/* title of card would have to come from jessica */}
        <div className="create-card-button">
            <button onClick={createCard}>Create a Card</button>
        </div>
        <div>
            {/* container for cards */}
         {cards}
        </div>

        </>
    );

};

export default KudosBoardCards