import React, { useContext, useState } from "react";
import { DataContext } from "../context/store";
import "../sass/BoardTitle.scss"

const BoardTitle = ({ title, id }) => {
  const { changeTitle } = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(title);
  const openInput = () => {
    setOpen(true);
  };
  const closeInput = () => {
    changeTitle(id, text);
    setOpen(false);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="board-title">
      {open ? (
        <form onSubmit={closeInput}>
          <input
            autoFocus
            type="text"
            onBlur={closeInput}
            value={text}
            onChange={handleChange}
          />
        </form>
      ) : (
        <h3 onClick={openInput}>{title}</h3>
      )}
    </div>
  );
};

export default BoardTitle;
