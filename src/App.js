import React, { useContext } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import { DataContext } from "./context/store";
import "./App.scss";
import Button from "./components/Button";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const App = () => {
  const { store, updateDrag,listsKanban } = useContext(DataContext);

  const onDragEnd = (result) => {
    // console.log(result);
    const { destination, source, draggableId, type } = result;
    if (!destination) return;
    if (type === "list") {
      const newListIds = store.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      const newStore = {
        ...store,
        listIds: newListIds,
      };
      updateDrag(newStore);
      return
    }
    const sourceList = store.lists[source.droppableId];
    const destinationList = store.lists[destination.droppableId];
    const draggingCard = sourceList.card.find(
      (card) => card.id === draggableId
    );
    if (sourceList === destinationList) {
      sourceList.card.splice(source.index, 1);
      destinationList.card.splice(destination.index, 0, draggingCard);
      const newStore = {
        ...store,
        lists: {
          ...store.lists,
          [sourceList.id]: destinationList,
        },
      };
      updateDrag(newStore);
    } else {
      sourceList.card.splice(source.index, 1);
      destinationList.card.splice(destination.index, 0, draggingCard);
      const newStore = {
        ...store,
        lists: {
          ...store.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      updateDrag(newStore);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="app" type="list" direction="horizontal">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Header />
            <div className="container">
              {store.listIds.map((id, index) => {
                const data = store.lists[id];
                return <Board key={id} data={data} index={index} />;
              })}
              <Button list />
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default App;
