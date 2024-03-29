import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/indexReducers";
import { forbiddenWordsMiddleware } from "../middleware/indexMiddleware";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
);
export default store;
