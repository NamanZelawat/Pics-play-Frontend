import * as actionTypes from "../actions/actionTypes";

const profile = (state = { profile: undefined }, action) => {
  switch (action.type) {
    case actionTypes.PROFILE:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};

export default profile;
