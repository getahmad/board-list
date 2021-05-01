import { createContext, useReducer, useState } from "react";
// import { v4 as uuid } from "uuid";
import { cardReducer } from "../reducers/cardReducer";
import { listReducer } from "../reducers/listReducer";

let cards = [
  {
    id: "card-1",
    title: "learning about react",
  },
  {
    id: "card-2",
    title: "learning about redux",
  },
  {
    id: "card-3",
    title: "learning about testing",
  },
];

let initialState = {
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

  const [cards,cardDispatch]=useReducer(cardReducer,initialState)
  const [listsKanban,listDispatch] = useReducer(listReducer,initialState);

  const changeTitle = (id, text) => {
    const item = store.lists[id];
    item.title = text;
    const newStore = {
      ...store,
      lists: {
        ...store.lists,
        [id]: item,
      },
    };
    setStore(newStore);
  };

  // const deleteCard = (cardId, listId) => {
  //   const item = store.lists[listId];
  //   const removeCard = item.card.filter((item) => item.id !== cardId);
  //   item.card = removeCard;
  //   const newStore = {
  //     ...store,
  //     lists: {
  //       ...store.lists,
  //       [listId]: item,
  //     },
  //   };
  //   setStore(newStore);
  // };

  const editCard = (listId, cardId, idx, text) => {
    const item = store.lists[listId];
    const card = item.card.find((item) => item.id === cardId);
    card.title = text;
    item.card.splice(idx, 1, card);
    const newStore = {
      ...store,
      lists: {
        ...store.lists,
        [listId]: item,
      },
    };
    setStore(newStore);
  };

  // const addCard = (listId, text) => {
  //   const item = store.lists[listId];
  //   const id = uuid();
  //   const newCard = {
  //     id: `card-${id}`,
  //     title: text,
  //   };
  //   item.card = [...item.card, newCard];
  //   const newStore = {
  //     ...store,
  //     listId: {
  //       ...store.lists,
  //       [listId]: item,
  //     },
  //   };
  //   setStore(newStore);
  // };

  // const addList = (text) => {
  //   const id = `list-${uuid()}`;
  //   const newList = {
  //     id,
  //     title: text,
  //     card: [],
  //   };
  //   const newStore = {
  //     listIds: [...store.listIds, id],
  //     lists: {
  //       ...store.lists,
  //       [id]: newList,
  //     },
  //   };
  //   setStore(newStore);
  // };

  const updateDrag = (data) => {
    setStore(data);
  };

  return (
    <DataContext.Provider
      value={{
        store,
        changeTitle,
        // deleteCard,
        editCard,
        // addCard,
        // addList,
        updateDrag,
        
        cards,
        cardDispatch,
        listsKanban,
        listDispatch,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
