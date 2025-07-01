// import pageLogo from './assets/k.png'
// import './App.css'
import { useNavigate } from "react-router-dom";

function KudosBoardCards(){
    // back button to home page
    // kudo board logo
    // title of card
    // create card button
    // container for cards
    const navigate = useNavigate();


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
        </div>

        </>
    );

};

export default KudosBoardCards