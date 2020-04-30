import * as actionTypes from "../actions/actionTypes";

const friends = (state = { friends: [] }, action) => {
  switch (action.type) {
    case actionTypes.FRIENDS:
      return { ...state, friends: action.payload };
    default:
      return state;
  }
};

export default friends;
