import React, { useContext, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import "../sass/Button.scss";
import Cancel from "../assets/cancel.svg";
import { DataContext } from "../context/store";

const Button = ({id, list }) => {
    const {addCard}=useContext(DataContext);

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const openForm = () => setOpen(true);
  const closeForm = () => setOpen(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const cardAdd=()=>{
     if (text) {
        addCard(id,text)
     }
      setText("")
  }

  const showForm = () => {
    const textButton = list ? "Add List" : "Add Card";
    const placeholder = list ? "Enter List Title" : "Enter Card Title";
    return (
      <div className="form-box">
        <TextareaAutosize
        required
          value={text}
          autoFocus
          placeholder={placeholder}
          className="text-area"
          onBlur={closeForm}
          onChange={handleChange}
        />
        <button onMouseDown={cardAdd} className="add">{textButton}</button>
        <button className="close" onClick={closeForm}>
          <img src={Cancel} alt="cancel" />
        </button>
      </div>
    );
  };

  const showButton = () => {
    const textButton = list ? "Add Another List" : "Add New card";
    const opacityButton = list ? 1 : 0.5;
    const colorButton = list ? "white" : "inherit";
    const backgroundButton = list ? "rgba(0,0,0,0.25)" : "inherit";
    return (
      <div
        className="add-button"
        onClick={openForm}
        style={{
          opacity: opacityButton,
          color: colorButton,
          background: backgroundButton,
        }}
      >
        + {textButton}
      </div>
    );
  };

  return open ? showForm() : showButton();
};

export default Button;
