/**
 * Created by serg on 13.05.2017.
 */
import * as types from "../actions";

export default myTestData = (state = {
    isFetching: false,
    done: false,
    items: [],
    error: {
        state: false,
        message: ""
    }
}, action) => {
    switch (action.type) {
        case types.START_FETCHING_DATA:
            return {...state, isFetching: true}

        case types.SUCCESS_FETCHING_DATA:
            return {...state, isFetching:false, done:true, items: action.payload}

        case types.ERROR_FETCHING_DATA: // vse poshlo po pizde
            return {...state, isFetching: false, done: false, error: {state: true,message:action.payload}}

        default:
            return state;
    }
};
