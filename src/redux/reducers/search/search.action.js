import searchTypes from "./search.types";

export const setSearch = (string) => {
  return {
    type: searchTypes.SET_SEARCH_STRING,
    payload: string,
  };
};
