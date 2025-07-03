import "./OptionsBar.css"

const OptionsBar = ({
  setShowCreateBoardModal,
  setBoardInfo,
  handleFilterByCategory,
  handleRecentSort,
  categories = []
}) => {

  function createNewBoard() {
    setBoardInfo({});
    setShowCreateBoardModal(true);
  }

  return (
    <div className="options">
      <div className="card-options-bar">
        <button onClick={() => window.location.reload()}>All</button>
        <button onClick={handleRecentSort}>Recent</button>
        {categories.map((cat) => (
          <button key={cat} onClick={() => handleFilterByCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>
      <div className="create-board-button">
        <button onClick={createNewBoard}>Create a New Board</button>
      </div>
    </div>
  );
};

export default OptionsBar;
