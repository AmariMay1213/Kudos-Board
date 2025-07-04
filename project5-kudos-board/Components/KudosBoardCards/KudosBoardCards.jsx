// import pageLogo from './assets/k.png'
// import './App.css'
//import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import CardGrid from "../CardGrid/CardGrid"
import CreateCard from "../CreateCardModal/createCardModal"

//THIS IS FOR WHEN YOU PRESS A BOARD ON THE HOME PAGE WANT TO LOOK AT SPECIFIC CARDS OF THAT BOARD


function KudosBoardCards({ deleteCard }){

    // back button to home page
    // kudo board logo
    // title of card
    // create card button
    // container for cards


    console.log("Kudos board");
    const { board_Id } = useParams(); 

    const navigate = useNavigate();
    const [board, setBoard] = useState(null);
    const [cards, setCards] = useState([]);

    const [showCreateCardModal, setShowCreateCardModal] = useState(false);
    const [cardInfo, setCardInfo] = useState({});

    const createCard = async (cardData) => {
      try {
        const res = await axios.post("http://localhost:3000/cards", {
          ...cardData,
          board_Id: board_Id, // Attach board ID
        });
        console.log("Card created:", res.data);

        // Refresh card list
        const cardRes = await axios.get(
          `http://localhost:3000/cards/${board_Id}/board`
        );
        setCards(cardRes.data);
      } catch (err) {
        console.error("Error creating card:", err);
      }
    };


    useEffect (() => {
        
        const fetchData = async () => {
            try {
              console.log("board_Id param:", board_Id);
              const boardRes = await axios.get(
                `http://localhost:3000/boards/${board_Id}`
              );
              const cardRes = await axios.get(
                `http://localhost:3000/cards/${board_Id}/board`
              );

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
        navigate("/"); 
    }


    return (
      <>
        <div className="back-button">
          <button onClick={handleBack}>Home Page</button>
        </div>

        {/* Fixed extra div */}
        <div className="board-title">
          <h2>{board_Id}</h2>

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
          <CardGrid cards={cards} deleteCard={deleteCard} />
          {/* Making changes to try to push */}
        </div>
      </>
    );

};

export default KudosBoardCards