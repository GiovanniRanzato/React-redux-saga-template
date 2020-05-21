// REDUX
import * as actionTypes from './actionsTypes';

// AUTH
export const authInit = (email,password, isSignUp) => {
    return ({
        type: actionTypes.AUTH_INIT,
        email: email,
        password: password,
        isSignUp: isSignUp
    });
}; 
export const authStart = () =>{
    return {
        type: actionTypes.AUTH_START
    };
};
export const authSuccess = (params) =>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        params: params
    };
};
export const authFail = (error) =>{
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};
// LOGOUT
export const authLogoutInit = () => {
    return {
        type: actionTypes.AUTH_LOGOUT_INIT
    }
};
export const authLogoutSuccess = () => {
    return ( {
        type: actionTypes.AUTH_LOGOUT_SUCCESS
    });
}
export const authLogoutFail = (error) => {
    return ( {
        type: actionTypes.AUTH_LOGOUT_FAIL,
        error: error
    });
}

// CONTROLS
export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.AUTH_SET_REDIRECT_PATH,
        path: path
    }
}

export const authAutologin = () => {
    return {
        type: actionTypes.AUTH_AUTOLOGIN
    }
}