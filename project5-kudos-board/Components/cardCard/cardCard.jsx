import { Link } from "react-router-dom";
import no_image from "../../src/assets/no_image.jpeg";
import "./CardCard.css";
import { useState } from "react";
import axios from "axios";

//Adding a comment so that there is something to commit
//Seeing if I can do a pull request from this

function CardCard({ card, deleteCard}) {

  const [upvotes, setUpvotes] = useState(card.upVotes || 0);

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this card?");
    if (confirmDelete){
      deleteCard(card.card_Id);
    }
  };

  const handleUpvote = async () => {
    try {
      await axios.patch(`http://localhost:3000/cards/${card.card_Id}/upvote`);
      setUpvotes((prev) => prev + 1); //Increases upvotes on the click of upvote
    } catch (err) {
      console.error("Error upvoting card:", err);
    }
  };

  return (
    <div className="cardCard">
      <div className="media">
        <Link to={`/${card.card_Id}`}>
          {card.gif_Url ? (
            <img src={card.gif_Url} alt="card cover" />
          ) : (
            <img src={no_image} alt="card cover" />
          )}
        </Link>
      </div>

      <div className="card-info">
        <div className="info">
          <p className="card-name">Title: {card.title}</p>
          <p className="card-description">Description: {card.description}</p>
        </div>
        <div className="actions">
          <div className="buttons">
            <i className="material-icons" onClick={handleUpvote}>
              Upvote
            </i>
            <span>{upvotes}</span> 
            <i className="material-icons" onClick={handleDeleteClick}>
             Delete Card
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCard;
