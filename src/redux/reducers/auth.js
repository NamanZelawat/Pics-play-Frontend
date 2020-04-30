import * as actionTypes from "../actions/actionTypes";

const auth = (state = { auth: true }, action) => {
  switch (action.type) {
    case actionTypes.AUTH:
      return { ...state, auth: action.payload };
    default:
      return state;
  }
};

export default auth;
