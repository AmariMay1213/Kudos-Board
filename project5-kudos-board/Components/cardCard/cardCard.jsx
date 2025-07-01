import { Link } from "react-router-dom";
import "./cardCard.css";

function cardCard({ card }) {
  return (
    <div className="cardCard">
      {/*      This is where the gif will be hypothetically   
      <div className="media">
        <Link to={`/${product.id}`}>
          {product.image_url ? (
            <img src={product.image_url} alt="product cover" />
          ) : (
            <img src={codepath} alt="product cover" />
          )}
        </Link>
      </div> */}

      <div className="card-info">
        <div className="info">
          <p className="card-name">{card.name}</p>
          <p className="card-category">{card.category}</p>
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

export default cardCard;
