import { combineReducers } from "redux";
import testReducers from "./test.reducers";

const rootReducers = combineReducers({
    test: testReducers
})

export default rootReducers;