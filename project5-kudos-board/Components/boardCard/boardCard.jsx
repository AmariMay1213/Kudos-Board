import { Link } from "react-router-dom";
import "./boardCard.css";

function boardCard({ board}) {
  return (
    <div className="boardCard">
{/*      This is where the elements will be hypothetically   
      <div className="media">
        <Link to={`/${product.id}`}>
          {product.image_url ? (
            <img src={product.image_url} alt="product cover" />
          ) : (
            <img src={codepath} alt="product cover" />
          )}
        </Link>
      </div> */}

      <div className="board-info">
        <div className="info">
          <p className="board-name">{board.name}</p>
          <p className="board-category">{board.category}</p>
        </div>
        <div className="actions">
          <div className="buttons">

            <i className="material-icons">
              View Board
            </i>
            <i className="material-icons">
              Delete Board
            </i>
          </div>

        </div>
      </div>
    </div>
  );
}

export default boardCard;
