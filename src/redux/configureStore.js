import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";

const initialState = {};

const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, logger)
      // window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //   window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
};

export default configureStore;
