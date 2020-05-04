import { combineReducers } from "redux";
import token from "./token";
import auth from "./auth";
import page from "./page";
import message from "./message";
import error from "./error";
import posts from "./posts";
import search from "./search";
import friends from "./friends";
import userData from "./userData";
import profile from "./profile";
import chat from "./chat";
import pending from "./pending";

export default combineReducers({
  token: token,
  auth: auth,
  page: page,
  message: message,
  error: error,
  posts: posts,
  search: search,
  friends: friends,
  userData: userData,
  profile: profile,
  chat: chat,
  pending: pending,
});
