import cartActionTypes from "./cart.types";

const INITIAL_STATE = {
  cartItems: {},
  cartCount: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      const { id, items } = action.payload;
      state.cartItems[id] = items;
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
        },
        cartCount: state.cartCount + 1,
      };
    case cartActionTypes.REMOVE_FROM_CART:
      const { id: r_id } = action.payload;
      if (state.cartItems[r_id]) {
        delete state.cartItems[r_id];
      } else {
        return {
          ...state,
        };
      }
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
        },
        cartCount: state.cartCount - 1,
      };
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
