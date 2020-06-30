import searchTypes from "./search.types";

const INITIAL_STATE = {
  search: null,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchTypes.SET_SEARCH_STRING:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
