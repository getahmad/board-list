import { createContext, useState } from "react";

const cards = [
  {
    id: "card-1",
    title: "learning about react",
  },
  {
    id: "card-2",
    title: "learning about redux",
  },
  {
    id: "card-2",
    title: "learning about testing",
  },
];

const initialState = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "backlog",
      card: cards,
    },
    "list-2": {
      id: "list-2",
      title: "onProgress",
      card: [],
    },
  },
  listIds: ["list-1", "list-2"],
};

export const DataContext = createContext();
export const DataProvider = (props) => {
  const [store, setStore] = useState(initialState);

  const changeTitle = (id, text) => {
    const item = store.lists[id]
    item.title = text
    const newStore = {
      ...store,
      lists: {
        ...store.lists,
        [id]: item
      }
    }
    setStore(newStore)
  }
  
  return (
    <DataContext.Provider value={{ store, changeTitle }}>
      {props.children}
    </DataContext.Provider>
  );
};
