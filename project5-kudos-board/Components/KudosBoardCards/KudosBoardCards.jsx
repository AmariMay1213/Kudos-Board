// import pageLogo from './assets/k.png'
// import './App.css'
import { useParams, useNavigate } from "react-router-dom";
//THIS IS FOR WHEN YOU PRESS A BOARD ON THE HOME PAGE WANT TO LOOK AT SPECIFIC CARDS OF THAT BOARD

function KudosBoardCards({ cards, createCard, deleteCard }){
    // back button to home page
    // kudo board logo
    // title of card
    // create card button
    // container for cards

    const { board_Id } = useParams(); 

    const navigate = useNavigate();


    const handleBack = () => {
        navigate("/"); // TODO: make sure this matches with the route in app.jsx and amari's backend
    }

    // const createCard = () => {
    //     // TODO: get this info from Jessica
    // }


    return (
        <>
        <div className="back-button">
            <button onClick={handleBack}>Home Page</button>
        </div>
        {/* title of card would have to come from jessica */}
        <div className= "board-title">
            <h2>{board_Id}</h2>
        </div>


        <div className="create-card-button">
            <button onClick={createCard}>Create a Card</button>
        </div>
        <div>
            {/* container for cards */}

        </div>

        </>
    );

};

export default KudosBoardCards