import { applyMiddleware, createStore } from "redux";
import createRootReducer from "./reducers";
import {createHashHistory } from 'history';
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";

export const history = createHashHistory();

const sagaMiddle = createSagaMiddleware();

const store = createStore(
  createRootReducer( history ),
  applyMiddleware(
    routerMiddleware( history ),
    sagaMiddle
  )
);

sagaMiddle.run( rootSaga );

export default store;