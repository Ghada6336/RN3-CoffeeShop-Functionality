import { CHECKOUT, REMOVE_ITEM, ADD_ITEM } from "./actionTypes";

export const addItemToCart = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const removeItemFromCart = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};

export const checkoutCart = () => {
  return {
    type: CHECKOUT,
  };
};
