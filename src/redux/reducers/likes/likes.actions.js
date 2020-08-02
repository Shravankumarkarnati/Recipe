import likesActionTypes from "./likes.types";

export const addToLikes = (item) => {
  return {
    type: likesActionTypes.ADD_TO_LIKES,
    payload: item,
  };
};

export const removeFromLikes = (recipe_id) => {
  return {
    type: likesActionTypes.REMOVE_FROM_LIKES,
    payload: recipe_id,
  };
};

export const deleteAllLikes = () => {
  return {
    type: likesActionTypes.DELETE_ALL_LIKES,
  };
};
