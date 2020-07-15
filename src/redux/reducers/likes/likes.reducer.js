import likesActionTypes from "./likes.types";

const INITIAL_STATE = {
  likes: {},
  countLikes: 0,
  likesResult: {},
};

const likesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case likesActionTypes.ADD_LIKED:
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
    case likesActionTypes.REMOVE_LIKED:
      const id = action.payload;
      if (state.likes[id]) {
        delete state.likes[id];
      }
      return {
        ...state,
        likes: {
          ...state.likes,
        },
        countLikes: state.countLikes - 1,
      };
    case likesActionTypes.SET_LIKES_RESULTS:
      return {
        ...state,
        likesResult: state.likes,
      };
    case likesActionTypes.REMOVE_LIKES_RESULTS:
      return {
        ...state,
        likesResult: {},
      };
    default:
      return {
        ...state,
      };
  }
};

export default likesReducer;
