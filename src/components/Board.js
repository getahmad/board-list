import React from "react";
import "../sass/Board.scss"
import BoardTitle from "./BoardTitle";

const Board = ({data}) => {
  return (
    <div className="board">
      <BoardTitle title={data.title} id={data.id}/>
      <div>card</div>
      <button>add</button>
    </div>
  );
};

export default Board;
