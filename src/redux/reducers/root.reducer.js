import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import resultsReducer from "./results/results.reducer";
import searchReducer from "./search/search.reducer";
import likesReducer from "./likes/likes.reducer";
import cartReducer from "./cart/cart.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "likes"],
  blacklist: ["search", "results"],
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  search: searchReducer,
  results: resultsReducer,
  likes: likesReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
