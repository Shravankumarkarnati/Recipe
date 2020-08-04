import searchTypes from "./search.types";

export const setSearch = (string) => {
  return {
    type: searchTypes.SET_SEARCH_STRING,
    payload: string,
  };
};

export const hamburgerClick = (flag) => {
  return {
    type: searchTypes.HAMBURGER_CLICKED,
    payload: flag,
  };
};
