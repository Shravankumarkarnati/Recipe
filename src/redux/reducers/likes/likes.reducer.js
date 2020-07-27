import likesActionTypes from "./likes.types";

const INITIAL_STATE = {
  likes: {},
  countLikes: 0,
};

const likesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case likesActionTypes.ADD_TO_LIKES:
      const { id: recipe_id, ...otherPayload } = action.payload;
      if (state.likes[recipe_id])
        return {
          ...state,
        };
      state.likes[recipe_id] = { ...otherPayload, recipe_id };
      return {
        ...state,
        likes: {
          ...state.likes,
        },
        countLikes: state.countLikes + 1,
      };
    case likesActionTypes.REMOVE_FROM_LIKES:
      const id = action.payload;
      if (state.likes[id]) {
        delete state.likes[id];
      } else {
        return {
          ...state,
        };
      }
      return {
        ...state,
        likes: {
          ...state.likes,
        },
        countLikes: state.countLikes - 1,
      };
    default:
      return {
        ...state,
      };
  }
};

export default likesReducer;
