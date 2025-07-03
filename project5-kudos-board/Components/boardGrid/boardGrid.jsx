import BoardCard from "../boardCard/boardCard";
import "./BoardGrid.css";


function BoardGrid({kudosBoards = [],}) {
  return (
    <div id="Buy" className="BoardGrid">
      <div className="content">
        <div className="grid">
          {!kudosBoards?.length ? (
            <div className="card">
              <p>No boards available</p>
            </div>
          ) : (
            kudosBoards.map((board) => (
              <BoardCard
                key={board.board_Id}
                board={board}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default BoardGrid;