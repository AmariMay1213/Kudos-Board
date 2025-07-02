import BoardCard from "../BoardCard/BoardCard";
import "./BoardGrid.css";

\
function BoardGrid({boards = [],}) {
  return (
    <div id="Buy" className="boardGrid">
      <div className="content">
        <div className="grid">
          {!boards?.length ? (
            <div className="card">
              <p>No boards available</p>
            </div>
          ) : (
            boards.map((board) => (
              <BoardCard
                key={board.id}
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
