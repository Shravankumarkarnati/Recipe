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

export const addAllIngredients = (ingredients) => {
  return {
    type: cartActionTypes.ADD_ALL_INGREDIENTS,
    payload: ingredients,
  };
};

export const adjustIng = (ing_id, amount) => {
  return {
    type: cartActionTypes.ADJUST_INGREDIENT,
    payload: { ing_id, amount },
  };
};

export const deleteIngredient = (ing_id) => {
  return {
    type: cartActionTypes.DELETE_INGREDIENT,
    payload: ing_id,
  };
};

export const clearCart = () => {
  return {
    type: cartActionTypes.CLEAR_CART,
  };
};
