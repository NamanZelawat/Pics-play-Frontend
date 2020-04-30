import * as actionTypes from "../actions/actionTypes";

const token = (state = { token: "" }, action) => {
  switch (action.type) {
    case actionTypes.TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default token;
