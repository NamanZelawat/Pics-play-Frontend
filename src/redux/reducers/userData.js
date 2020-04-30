import * as actionTypes from "../actions/actionTypes";

const userData = (state = { userData: {} }, action) => {
  switch (action.type) {
    case actionTypes.USERDATA:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};

export default userData;
