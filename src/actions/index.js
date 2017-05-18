/* @flow */
/*global setTimeout*/

export const START_FETCHING_DATA = "START_FETCHING_DATA";
export const SUCCESS_FETCHING_DATA = "SUCCESS_FETCHING_DATA";
export const ERROR_FETCHING_DATA = "SUCCESS_FETCHING_DATA";
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export const START_LOADING_WEBCAMS = "START_LOADING_WEBCAMS";
export const FINISH_LOADING_WEBCAMS = "FINISH_LOADING_WEBCAMS";
export const ERROR_LOADING_WEBCAMS = "ERROR_LOADING_WEBCAMS";

export const INCREASE = "INCREASE";

const startFetchingData = () => {
    return {
        type: START_FETCHING_DATA
    }
}
const successFetchingData = (data) => {
    return {
        type: SUCCESS_FETCHING_DATA,
        payload: data
    }
}
const errorFetchingData = (e) => {
    return {
        type: ERROR_FETCHING_DATA,
        payload: e
    }
}

const changeLanguage = (lang) => {
    return {
        type: CHANGE_LANGUAGE,
        payload: lang
    }
}

export const changeLang = (lang) => {
    return (dispatch) => dispatch({
        type: CHANGE_LANGUAGE,
        payload: lang
    });
}

export const loadWebcams = (param="") => {
    return (dispatch)=>{
        dispatch({type:START_LOADING_WEBCAMS});
        const url = "https://www.instagram.com/smena8m/media/"+param;
        console.log(url);
        fetch(url)
        .then( (data)=> {
            return data.json();
        })
        .then( (data)=>{
            return data.items
        })
        .then( (items)=>{
            return items.filter((item)=>{
                console.log(item.type);
                return item.type === "image"
            })
        })
        .then((json)=>dispatch({type:FINISH_LOADING_WEBCAMS,payload:json}))
        .catch((e)=>dispatch({type:ERROR_LOADING_WEBCAMS}))

    }
}

export const increase = (number) => {
    return (dispatch) => dispatch({
        type: INCREASE,
        payload: number
    });
}

