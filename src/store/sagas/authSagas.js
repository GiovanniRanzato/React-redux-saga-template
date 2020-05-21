// Redux-Saga
import { put} from 'redux-saga/effects';

// Actions
import * as actions from '../actions/index';

// Parse
import Parse from 'parse';

const buildUserData = (response) =>{
    return  {
        userId: response.id,
        email: response.attributes.email,
        userPublic: response.attributes.userPublic,
    }
}
  

export function* logoutSaga (){
     // Log out da Parse Server 
     try {
        yield put( actions.setLoadingTrue());
        yield Parse.User.logOut();
        yield put( actions.authLogoutSuccess());
        
     }catch (error){
        yield put (actions.authLogoutFail(error));
     }  
     yield put( actions.setLoadingFalse()); 
}
export function* authSaga(action) {
    try {
        yield put(actions.setLoadingTrue());
        yield put(actions.authStart());
        let user = yield new Parse.User();
        // ACL Setto i livelli di sicurezza del nuovo utente
        const acl = yield new Parse.ACL();
        yield acl.setPublicReadAccess(true);
        yield user.setACL(acl);
        // Setto attributi classe
        console.log(action);
        yield user.set("username", action.email);
        yield user.set("email", action.email);
        yield user.set("password", action.password);

        if (!action.isSignUp) {
            const response = yield user.signUp();
            yield put( actions.authSuccess(buildUserData(response)));
            console.log("signed up!",response);
        }else{
            const response = yield user.logIn();
            yield put( actions.authSuccess(buildUserData(response)));
            console.log("logged in!",response);

        } 
    } catch (error) {
        yield put (actions.authFail(error));
        console.log(error);
    }
    yield put( actions.setLoadingFalse());    
}
export function* authAutologinSaga () {
    yield put( actions.setLoadingTrue());
    let user = yield Parse.User.current();
    if (!user){
        yield put (actions.authLogoutInit());
        console.log("user data not found...logout");
    }else{
        try{
            console.log('AUTOLOGIN:  ',user);
            yield put( actions.authSuccess(buildUserData(user)));

            console.log("logged in!",user);
        }catch(error){
            yield put (actions.authFail(error));
            console.log(error);
        }
    }
    yield put( actions.setLoadingFalse());
}
   