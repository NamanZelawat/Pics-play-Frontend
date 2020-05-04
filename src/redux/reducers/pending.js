import * as actionTypes from "../actions/actionTypes";

const pending = (state = { pending: [] }, action) => {
  switch (action.type) {
    case actionTypes.PENDING:
      return { ...state, pending: action.payload };
    default:
      return state;
  }
};

export default pending;
