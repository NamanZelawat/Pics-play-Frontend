import * as actionTypes from "../actions/actionTypes";

const search = (state = { search: [] }, action) => {
  switch (action.type) {
    case actionTypes.SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default search;
