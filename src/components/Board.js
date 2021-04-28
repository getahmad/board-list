import React from "react";
import "../sass/Board.scss";
import BoardTitle from "./BoardTitle";
import Menu from "../assets/menu.svg";
import Card from "./Card";

const Board = ({ data }) => {
  return (
    <div className="board">
      <div className="board__title">
        <BoardTitle title={data.title} id={data.id} />
        <div className="menu">
          <img src={Menu} alt="menu" />
        </div>
      </div>
      <div>
        {data.card.map((card, index) => (
        
          <Card index={index} key={index} item={card} id={data.id} />
        ))}
      </div>
      <button>add</button>
    </div>
  );
};

export default Board;
