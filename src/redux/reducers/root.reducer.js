import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import resultsReducer from "./results/results.reducer";
import searchReducer from "./search/search.reducer";
import likesReducer from "./likes/likes.reducer";
import cartReducer from "./cart/cart.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["likes", "cart"],
  // whitelist: ["likes", "cart", "results", "search"],
};

const rootReducer = combineReducers({
  search: searchReducer,
  results: resultsReducer,
  likes: likesReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
