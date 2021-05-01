import React, { useContext, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { delCardAct } from "../actions/cardAction";
import DeleteIcon from "../assets/trash.svg";
import { DataContext } from "../context/store";
import "../sass/Card.scss";

const Card = ({ item, id, index }) => {
  const { 
    // deleteCard, 
    editCard,
    // cards,
    cardDispatch
  } = useContext(DataContext);
  const [text, setText] = useState(item.title);
  const [edit, setEdit] = useState(false);

  const isEdit = () => {
    setEdit(true);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const closeEdit = () => {
    editCard(id, item.id, index, text);
    setEdit(false);
  };

  const cardDelete = (itemId,id) => {
    // console.log(itemId,id);
    // console.log(id);
    // deleteCard(item.id, id);
    cardDispatch(delCardAct(itemId,id))
  };

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className="card-list"
        >
          {edit ? (
            <form onSubmit={closeEdit}>
              <input
                onChange={handleChange}
                value={text}
                onBlur={closeEdit}
                type="text"
                autoFocus
              />
            </form>
          ) : (
            <div className="card-list__text">
              <p onClick={isEdit}> {item.title}</p>
              <img onClick={()=>cardDelete(item.id,id)} src={DeleteIcon} alt="delete" />
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default Card;
