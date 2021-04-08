import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import testReducers from "./test.reducers";
import { History } from 'history';
const createRootReducer = ( history: History ) => combineReducers( {
    router: connectRouter( history ),
    test: testReducers
} );

export default createRootReducer;