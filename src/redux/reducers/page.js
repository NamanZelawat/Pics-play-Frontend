import * as actionTypes from "../actions/actionTypes";

const page = (state = { page: 0 }, action) => {
  switch (action.type) {
    case actionTypes.PAGER:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export default page;
