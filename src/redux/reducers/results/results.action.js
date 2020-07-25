import resultsTypes from "./results.types";

export const setResults = (results) => {
  return {
    type: resultsTypes.SET_RESULTS,
    payload: results,
  };
};

export const searching = (arr) => {
  return {
    type: resultsTypes.SEARCHING,
    payload: arr,
  };
};

export const searchError = (message) => {
  return {
    type: resultsTypes.SEARCH_ERROR,
    payload: message,
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

export const onSearchAsync = (query) => {
  return (dispatch) => {
    console.log("action searching true true");
    searching([true, true]);
    // const apiKey = process.env.REACT_APP_API_KEY;
    const apiKey = process.env.REACT_APP_API_KEY2;
    let apiString = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}&number=33&sort=popularity`;
    fetch(apiString)
      .then((res) => res.json())
      .then((data) => data.results)
      .then((rec) => {
        dispatch(setResults(rec));
        console.log("action searching false false");
        searching([false, false]);
      })
      .catch((err) => dispatch(searchError(err.message)));
  };
};

export const onSelectedRecipe = (id, image, title) => {
  return (dispatch) => {
    // const apiKey = process.env.REACT_APP_API_KEY;
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
      })
      .catch((err) => dispatch(searchError(err.message)));
  };
};
