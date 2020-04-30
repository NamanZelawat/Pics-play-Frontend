import * as actionTypes from "../actions/actionTypes";

const error = (state = { error: false }, action) => {
  switch (action.type) {
    case actionTypes.ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default error;
