import * as actionsTypes from './actionsTypes';
export const setLanguage = (language)=>{
    return {
        type: actionsTypes.SET_LANGUAGE,
        language: language
    }
};

export const setLoadingTrue = ()=>{
    return {
        type: actionsTypes.SET_LOADING_TRUE,
    }
};
export const setLoadingFalse = ()=>{
    return {
        type: actionsTypes.SET_LOADING_FALSE,
    }
};