import { v4 as uuid } from "uuid";

export const listReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_LIST":
      const { text } = payload;
      const id = `list-${uuid()}`;
      const newList = {
        id,
        title: text,
        card: [],
      };
      const newState = {
        listIds: [...state.listIds, id],
        lists: {
          ...state.lists,
          [id]: newList,
        },
      };
      // console.log(newState);
      return newState;
    default:
      return state;
  }
};
