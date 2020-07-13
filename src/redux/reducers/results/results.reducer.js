import resultsActionTypes from "./results.types";
import resultsTypes from "./results.types";

const INITIAL_STATE = {
  results: null,
  pageNum: 1,
  selectedRecipe: null,
  changedIngredients: null,
};

const resultsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case resultsActionTypes.SET_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    case resultsTypes.CHANGE_PAGE_NUM:
      return {
        ...state,
        pageNum: action.payload,
      };
    case resultsTypes.SELECTED_RECIPE:
      return {
        ...state,
        selectedRecipe: action.payload,
        // ingredients: action.payload.ingredients,
      };
    case resultsTypes.CHANGE_INGR:
      return {
        ...state,
        changedIngredients: action.payload,
      };
    default:
      return state;
  }
};

export default resultsReducer;
