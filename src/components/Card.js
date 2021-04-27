import React, { useContext, useState } from "react";
import DeleteIcon from "../assets/trash.svg";
import { DataContext } from "../context/store";
import "../sass/Card.scss";

const Card = ({ item, id }) => {
  const {deleteCard} = useContext(DataContext);
  const [text, setText] = useState(item.title);
  const [edit, setEdit] = useState(false);

  const isEdit = () => {
    setEdit(true);
  };

  const closeEdit = () => {
    setEdit(false);
  };

  const cardDelete = () => {
    deleteCard(item.id, id)
  }

  return (
    <div className="card-list">
      {edit ? (
        <form onsubmit={closeEdit}>
          <input value={text} onBlur={closeEdit} type="text" autoFocus />
        </form>
      ) : (
        <div className="card-list__text">
          <p onClick={isEdit}> {item.title}</p>
          <img onClick={cardDelete} src={DeleteIcon} alt="delete" />
        </div>
      )}
    </div>
  );
};

export default Card;
