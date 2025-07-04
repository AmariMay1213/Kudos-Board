// import pageLogo from './assets/k.png'
// import './App.css'
//import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useNavigate, useParams, useLocation } from "react-router-dom";
import {useState, useEffect} from 'react'
import CardGrid from "../CardGrid/CardGrid"
import CreateCard from "../CreateCardModal/createCardModal"
import { useMemo } from "react";


//THIS IS FOR WHEN YOU PRESS A BOARD ON THE HOME PAGE WANT TO LOOK AT SPECIFIC CARDS OF THAT BOARD


function KudosBoardCards({ cards, deleteCard, createCard}){

    // back button to home page
    // kudo board logo
    // title of card
    // create card button
    // container for cards


    console.log("Kudos board");
    const { board_Id } = useParams(); 

    const navigate = useNavigate();
    const [board, setBoard] = useState(null);

    const [showCreateCardModal, setShowCreateCardModal] = useState(false);
    const [cardInfo, setCardInfo] = useState({});




    const location = useLocation();
    const boardTitle = location.state?.title;


    const handleBack = () => {
        navigate("/"); 
    }


    const cardsForBoard = useMemo(() => {
       return cards.filter((card) => card.board_Id === Number(board_Id));
      }, [cards, board_Id]);



    return (
      <>
        <div className="back-button">
          <button onClick={handleBack}>Home Page</button>
        </div>
        <div className= "board-title">
            <h2>{boardTitle}</h2>
        </div>

        <CreateCard
            board_Id = {board_Id}
          show={showCreateCardModal}
          setShowCreateCardModal={setShowCreateCardModal}
          cardInfo={cardInfo}
          setCardInfo={setCardInfo}
          createCard={createCard}
        />
        <div className="create-card-button">
          <button onClick={() => setShowCreateCardModal(true)}>
            Create a Card
          </button>
        </div>
        <div>
          <CardGrid cards={cardsForBoard} deleteCard={deleteCard} 
          />
          
          {/* Making changes to try to push */}
        </div>
      </>
    );

};

export default KudosBoardCards
