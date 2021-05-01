import { v4 as uuid } from "uuid";

export const cardReducer = (state, action) => {
  const { type, payload } = action;
  const { cardId, listId, text } = payload;
  const item = state.lists[listId];
  const newstate = {
    ...state,
    lists: {
      ...state.lists,
      [listId]: item,
    },
  };
  const id = uuid();

  switch (type) {
    case "DELETE_CARD":
      const removeCard = item.card.filter((item) => item.id !== cardId);
      item.card = removeCard;
      return newstate;

    case "ADD_CARD":
      const newCard = {
        id: `card-${id}`,
        title: text,
      };
      item.card = [...item.card, newCard];
      return newstate;

    default:
      return state;
  }
};
