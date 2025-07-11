import CardCard from "../CardCard/CardCard";
import "./CardGrid.css";

function CardGrid({ cards = [], deleteCard }) {
  return (
    <div id="Buy" className="CardGrid">
      <div className="content">
        <div className="grid">
          {!cards?.length ? (
            <div className="card">
              <p>No cards available</p>
            </div>
          ) : (
            cards.map((card) => <CardCard
              key={card.card_Id}
              card={card}
              deleteCard={deleteCard}
            />)
          )}
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
