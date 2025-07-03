import { Link } from "react-router-dom";
import no_image from "../../src/assets/no_image.jpeg";
import "./CardCard.css";

//Adding a comment so that there is something to commit
//Seeing if I can do a pull request from this

function CardCard({ card }) {
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
          <p className="card-name">{card.title}</p>
          <p className="card-description">{card.description}</p>
        </div>
        <div className="actions">
          <div className="buttons">
            <i className="material-icons">Upvote</i>
            <i className="material-icons">Delete</i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCard;
