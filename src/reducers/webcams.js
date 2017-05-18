import * as types from "../actions";

export default webcams = (state = {
    loading: false,
    done: false,
    items: [],
    error: {
        state: false,
        message: ""
    }
}, action) => {
    switch (action.type) {
        case types.START_LOADING_WEBCAMS:
            return {...state, loading: true}

        case types.FINISH_LOADING_WEBCAMS:
            let newArr = [...state.items, ...action.payload]

            console.log(action.payload);
            console.log(newArr);

            return {...state, loading:false, done:true, items: newArr}

        case types.ERROR_LOADING_WEBCAMS: // vse poshlo po pizde
            return {...state, loading: false, done: false, error: {state: true,message:action.payload}}

        case types.INCREASE: {
            if (state.items.results.length>0) {
                let newItems = state.items.results.map((val) => {
                    if (val.cam_id === action.payload) {
                        if (val.number === NaN || val.number===undefined){
                            val.number = 1;
                        }
                        val.number = val.number + 1;
                    }
                    return val;
                });
                return {...state, items: {results: newItems} }
            }
            return state;
        }

        default:
            return state;
    }
};
