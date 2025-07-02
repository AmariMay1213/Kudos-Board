import { Link } from "react-router-dom";
import no_image from "../../src/assets/no_image.jpeg";
import "./BoardCard.css";

//Making this comment, so that the file names can change.

function BoardCard({board}) {
  return (
    <div className="BoardCard">

    {/* Image */}
      <div className="media">
        <Link to={`/${board.board_Id}`}>
          {board.image_url ? (
            <img src={board.image_url} alt="board cover" />
          ) : (
            <img src={no_image} alt="board cover" />
          )}
        </Link>
      </div>

      <div className="board-info">
        <div className="info">
          <p className="board-name">{board.title}</p>
          <p className="board-category">{board.category}</p>
        </div>
        <div className="actions">
          <div className="buttons">

            {/* Need to add a click that brings the user to the card route whenever they click view board */}
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

export default BoardCard;