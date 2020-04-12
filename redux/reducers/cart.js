import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "../actions/actionTypes";

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = action.payload;
      let items = state.items;
      const updateditem = items.find(
        (stateItem) =>
          stateItem.drink === newItem.drink &&
          stateItem.option === newItem.option
      );
      if (updateditem) {
        updateditem.quantity += newItem.quantity;
      } else {
        items = [...items, { ...newItem }];
      }
      return {
        ...state,
        items: [...items],
      };
    case "REMOVE_ITEM":
      const removeItem = action.payload;
      return {
        ...state,
        items: state.items.filter((stateItem) => stateItem !== removeItem),
      };
    case "CHECKOUT":
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default reducer;
