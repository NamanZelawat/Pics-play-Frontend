import * as actionTypes from "../actions/actionTypes";

const chat = (state = { chat: [] }, action) => {
  switch (action.type) {
    case actionTypes.CHAT:
      return { ...state, chat: action.payload };
    default:
      return state;
  }
};

export default chat;
