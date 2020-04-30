import * as actionTypes from "../actions/actionTypes";

const posts = (state = { posts: [] }, action) => {
  switch (action.type) {
    case actionTypes.POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default posts;
