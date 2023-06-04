import { useState } from "react";
import { Card } from "./Card";

export const List = ({ title }) => {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    setCards((currCards) => {
      return [<Card />, ...currCards];
    });
  };

  return (
    <div className="list">
      <h1>{title}</h1>
      <div>
        {cards.length ? (
          <>
            {cards.map((card) => {
              return card;
            })}
          </>
        ) : null}
      </div>
      <button onClick={() => addCard()}>Add a card</button>
    </div>
  );
};
