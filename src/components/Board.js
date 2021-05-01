import React from "react";
import "../sass/Board.scss";
import BoardTitle from "./BoardTitle";
import Menu from "../assets/menu.svg";
import Card from "./Card";
import Button from "./Button";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Board = ({ data, index }) => {
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="board"
        >
          <div className="board__title">
            <BoardTitle title={data.title} id={data.id} />
            <div className="menu">
              <img src={Menu} alt="menu" />
            </div>
          </div>
          <Droppable droppableId={data.id}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {data.card.map((card, index) => (
                  <Card index={index} key={card.id} item={card} id={data.id} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Button id={data.id} />
        </div>
      )}
    </Draggable>
  );
};

export default Board;
