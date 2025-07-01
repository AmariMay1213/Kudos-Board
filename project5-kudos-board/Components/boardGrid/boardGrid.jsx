import boardCard from "../boardCard/boardCard";
import "./boardGrid.css";

function boardGrid({boards = [],}) {
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
              <boardCard
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

export default boardGrid;
