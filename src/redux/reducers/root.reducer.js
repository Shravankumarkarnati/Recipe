import { combineReducers } from "redux";

import resultsReducer from "./results/results.reducer";
import searchReducer from "./search/search.reducer";
import likesReducer from "./likes/likes.reducer";
// import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  search: searchReducer,
  results: resultsReducer,
  likes: likesReducer,
  //   cart: cartReducer,
});
