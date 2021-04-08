import { applyMiddleware, createStore } from "redux";
import createRootReducer from "./reducers";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const store = createStore(
  createRootReducer( history ),
  applyMiddleware(
    routerMiddleware( history )
  )
);

export default store;