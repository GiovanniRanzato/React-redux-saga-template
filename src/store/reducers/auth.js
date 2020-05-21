// Actions
import * as actionsTypes from '../actions/actionsTypes';
// Utility
const intialState = {
    isAuth: false,
    userId: null,
    userPublic: null,
    name: null,
    secondName: null,
    email: null,
    error: null
}

const authInit = (state) => {
    const updatedState = {...state};
    return (updatedState);
}

const auth = (state, action) => {
    const updatedState = {...state, isAuth: true, userId: action.params.userId, email: action.params.email, userPublic: action.params.userPublic ? action.params.userPublic : null , loading: false};
    return (updatedState);
}
const authFail = (state, action) => {
    const updatedState = {...state, isAuth: false, error: action.error, loading: false};
    return (updatedState);
}
const logout = (state) => {
    const updatedState = {...intialState};
    return (updatedState);
}
const userGetPublicData = (state, action) => {
    const updatedState = {...state, name: action.params.name, secondName: action.params.secondName, userPublic: action.params.userPublic };
    return (updatedState);
}



const reducer = (state = intialState, action) => {
    switch (action.type){
        case actionsTypes.AUTH_INIT: return authInit (state, action)
        case actionsTypes.AUTH_SUCCESS: return auth(state,action);
        case actionsTypes.AUTH_FAIL: return authFail(state,action);
        case actionsTypes.AUTH_LOGOUT_SUCCESS: return logout(state);                   
        default:
            return state;
    }
    
}
export default reducer;