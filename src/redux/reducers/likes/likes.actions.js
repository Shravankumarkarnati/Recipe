import likesActionTypes from "./likes.types";

export const addLiked = (item) => {
  return {
    type: likesActionTypes.ADD_LIKED,
    payload: item,
  };
};

export const removeLiked = (recipe_id) => {
  return {
    type: likesActionTypes.REMOVE_LIKED,
    payload: recipe_id,
  };
};

export const setLikesToResults = () => {
  return {
    type: likesActionTypes.SET_LIKES_RESULTS,
  };
};

export const removeLikesFromResults = () => {
  return {
    type: likesActionTypes.REMOVE_LIKES_RESULTS,
  };
};
