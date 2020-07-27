import resultsActionTypes from "./results.types";
import resultsTypes from "./results.types";

const INITIAL_STATE = {
  results: null,
  selectedRecipe: null,
  changedIngredients: {
    servings: null,
    ingredients: null,
  },
  searchStatus: null,
};

const resultsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case resultsActionTypes.SET_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    case resultsTypes.SEARCH_STATUS:
      return {
        ...state,
        searchStatus: action.payload,
      };
    case resultsTypes.SELECTED_RECIPE:
      return {
        ...state,
        selectedRecipe: action.payload,
      };
    case resultsTypes.CHANGE_INGR:
      return {
        ...state,
        changedIngredients: action.payload,
      };
    case resultsTypes.CHANGE_SERVINGS:
      return {
        ...state,
        changedIngredients: action.payload,
      };
    default:
      return state;
  }
};

export default resultsReducer;
