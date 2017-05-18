/* @flow */

import { combineReducers } from "redux";
import myTestData from "./places"
import language from "./language"
import webcams from "./webcams"

const rootReducer = combineReducers({
    myTestData,
    language,
    webcams
});

export default rootReducer;
