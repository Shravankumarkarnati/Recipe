import cartActionTypes from "./cart.types";

export const addToCart = (id, items) => {
  return {
    type: cartActionTypes.ADD_TO_CART,
    payload: { id, items },
  };
};

export const removeFromCart = (id, items) => {
  return {
    type: cartActionTypes.REMOVE_FROM_CART,
    payload: { id, items },
  };
};
