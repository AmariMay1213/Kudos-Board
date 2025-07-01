import CardCard from "./CardCard/CardCard";
import "./CardGrid.css";

function CardGrid({ cards = [] }) {
  return (
    <div id="Buy" className="cardGrid">
      <div className="content">
        <div className="grid">
          {!cards?.length ? (
            <div className="card">
              <p>No cards available</p>
            </div>
          ) : (
            cards.map((board) => <CardCard key={card.id} card={card} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
