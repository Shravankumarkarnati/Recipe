import cartActionTypes from "./cart.types";
import { REHYDRATE } from "redux-persist";

const INITIAL_STATE = {
  cartItems: {},
  allIngredients: {},
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
    case cartActionTypes.ADD_ALL_INGREDIENTS:
      return {
        ...state,
        allIngredients: action.payload,
      };
    case cartActionTypes.ADJUST_INGREDIENT:
      const { ing_id, amount } = action.payload;
      if (state.allIngredients[ing_id]) {
        state.allIngredients[ing_id].amount = amount;
        return {
          ...state,
          allIngredients: {
            ...state.allIngredients,
          },
        };
      }
      return {
        ...state,
      };
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: {},
        allIngredients: {},
        cartCount: 0,
      };
    case cartActionTypes.DELETE_INGREDIENT:
      const i_id = action.payload;
      if (state.allIngredients[i_id]) {
        delete state.allIngredients[i_id];
      }
      return {
        ...state,
        allIngredients: {
          ...state.allIngredients,
        },
      };
    case REHYDRATE:
      if (action.payload) {
        return {
          ...state,
          cartItems: {
            ...action.payload.cart.cartItems,
          },
          allIngredients: {
            ...action.payload.cart.allIngredients,
          },
          cartCount: action.payload.cart.cartCount,
        };
      }
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
