import likesActionTypes from "./likes.types";

const INITIAL_STATE = {
  likes: {},
  countLikes: 0,
};

const likesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case likesActionTypes.ADD_LIKED:
      const { recipe_id, ...otherPayload } = action.payload;
      if (state.likes[recipe_id])
        return {
          ...state,
        };
      state.likes[recipe_id] = { ...otherPayload };
      return {
        ...state,
        likes: {
          ...state.likes,
        },
        countLikes: state.countLikes + 1,
      };
    default:
      return {
        ...state,
      };
  }
};

export default likesReducer;
