import cardCard from "../cardCard/cardCard";
import "./cardGrid.css";

function cardGrid({ cards = [] }) {
  return (
    <div id="Buy" className="cardGrid">
      <div className="content">
        <div className="grid">
          {!cards?.length ? (
            <div className="card">
              <p>No cards available</p>
            </div>
          ) : (
            cards.map((board) => <cardCard key={card.id} card={card} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default cardGrid;
