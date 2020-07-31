import likesActionTypes from "./likes.types";

const INITIAL_STATE = {
  likes: {},
  countLikes: 0,
};

const likesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case likesActionTypes.ADD_TO_LIKES:
      const { id, ...otherPayload } = action.payload;
      if (state.likes[id])
        return {
          ...state,
        };
      state.likes[id] = { ...otherPayload, id };
      return {
        ...state,
        likes: {
          ...state.likes,
        },
        countLikes: state.countLikes + 1,
      };
    case likesActionTypes.REMOVE_FROM_LIKES:
      const r_id = action.payload;
      if (state.likes[r_id]) {
        delete state.likes[r_id];
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
