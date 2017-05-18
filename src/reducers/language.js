/**
 * Created by serg on 13.05.2017.
 */
import * as types from "../actions";

export default language = (state = {
    language: "ru"
}, action) => {
    switch (action.type) {
        case types.CHANGE_LANGUAGE:
            return {...state, language: action.payload}
        default:
            return state;
    }
};