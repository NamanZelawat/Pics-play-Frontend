import * as actionTypes from "../actions/actionTypes";

const message = (state = { message: "" }, action) => {
  switch (action.type) {
    case actionTypes.MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default message;
