import * as actionTypes from "../actions/actionTypes";

const signup = (state = { auth: true }, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP:
      return { ...state, auth: action.payload };
    default:
      return state;
  }
};

export default signup;
