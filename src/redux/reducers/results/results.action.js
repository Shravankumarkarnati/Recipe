import resultsTypes from "./results.types";

export const setResults = (results) => {
  return {
    type: resultsTypes.SET_RESULTS,
    payload: results,
  };
};

export const searchStatus = (flag) => {
  return {
    type: resultsTypes.SEARCH_STATUS,
    payload: flag,
  };
};

export const selectedRecipe = (recipe) => {
  return {
    type: resultsTypes.SELECTED_RECIPE,
    payload: recipe,
  };
};

export const changeIngredients = (newIngr) => {
  return {
    type: resultsTypes.CHANGE_INGR,
    payload: newIngr,
  };
};

export const changeServings = (obj) => {
  return {
    type: resultsTypes.CHANGE_SERVINGS,
    payload: obj,
  };
};

export const onSearchAsync = (searchString) => {
  return (dispatch) => {
    dispatch(searchStatus(true));
    const apiKey = process.env.REACT_APP_API_KEY2;
    let apiString = `https://api.spoonacular.com/recipes/complexSearch?query=${searchString}&apiKey=${apiKey}&number=36&sort=popularity`;
    fetch(apiString)
      .then((res) => res.json())
      .then((data) => data.results)
      .then((rec) => {
        dispatch(setResults(rec));
        dispatch(searchStatus(null));
      })
      .catch((err) => dispatch(searchStatus(false)));
  };
};

export const onSelectedRecipe = (id, image, title) => {
  return (dispatch) => {
    dispatch(searchStatus(true));
    const apiKey = process.env.REACT_APP_API_KEY2;
    let apiString = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`;
    fetch(apiString)
      .then((res) => res.json())
      .then((rec) => {
        const recipe = {
          id,
          image,
          title,
          data: rec,
        };
        dispatch(selectedRecipe(recipe));
        dispatch(searchStatus(null));
      })
      .catch((err) => dispatch(searchStatus(false)));
  };
};
