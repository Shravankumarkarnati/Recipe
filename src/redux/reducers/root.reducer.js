import { combineReducers } from "redux";

import resultsReducer from "./results/results.reducer";
import searchReducer from "./search/search.reducer";
// import cartReducer from "./cart/cart.reducer";
// import likeReducer from "./likes/like.reducer";

export default combineReducers({
  search: searchReducer,
  results: resultsReducer,
  //   cart: cartReducer,
  //   likes: likeReducer,
});
