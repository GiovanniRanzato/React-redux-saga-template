// Actions
import * as actionsTypes from '../actions/actionsTypes';
// Utility
//import { updateObject } from '../../shared/utility';
const intialState = {
    language: 0,
    loading: false,
    error: null
}

// characterInit
const setLanguage = (state, action) => {
    const updatedState = {...state, language: action.language};
    return (updatedState);
}
const setLoadingTrue = (state) => {
    const updatedState = {...state, loading: true};
    return (updatedState);
}
const setLoadingFalse = (state) => {
    const updatedState = {...state, loading: false};
    return (updatedState);
}

const reducer = (state = intialState, action) => {
    switch (action.type){
        case actionsTypes.SET_LANGUAGE: return setLanguage(state,action);
        case actionsTypes.SET_LOADING_TRUE: return setLoadingTrue(state);
        case actionsTypes.SET_LOADING_FALSE: return setLoadingFalse(state);                   
        default:
            return state;
    }
    
}
export default reducer;

