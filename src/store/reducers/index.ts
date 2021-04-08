import { connectRouter, RouterState } from "connected-react-router";
import { combineReducers } from "redux";
import testReducers from "./test.reducers";
import { History } from 'history';
import { AuthState } from "./auth.reducer";
import authReducer from "./auth.reducer";

export interface AppState {
    router: RouterState,
    auth: AuthState;
}

const createRootReducer = ( history: History ) => combineReducers( {
    router: connectRouter( history ),
    test: testReducers,
    auth: authReducer
} );

export default createRootReducer;