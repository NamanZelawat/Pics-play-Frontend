import * as actionTypes from "../actions/actionTypes";

const login = (state = { auth: true }, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, auth: action.payload };
    default:
      return state;
  }
};

export default login;
