import { Link } from "react-router-dom";
import no_image from "../../src/assets/no_image.jpeg";
import "./BoardCard.css";

function BoardCard({board, deleteBoard}) {
  const handleDeleteClick = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this board?");
    if (confirmDelete) {
      deleteBoard(board.board_Id);
    }
  };

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
            <Link to = {`/boards/${board.board_Id}`}>
            <i className="material-icons">
      
              View Board
            </i>
            </Link>
            <i className="material-icons" onClick={handleDeleteClick}>
            Delete Board
            </i>


          </div>

        </div>
      </div>
    </div>
  );
}

export default BoardCard;