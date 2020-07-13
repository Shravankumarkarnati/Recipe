import likesActionTypes from "./likes.types";

export const addLiked = (item) => {
  return {
    type: likesActionTypes.ADD_LIKED,
    payload: item,
  };
};
