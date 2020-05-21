import { takeEvery, all /* takeLatest */ } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes';
//import { characterAddModifierSaga  } from './characterAddBonusSaga';
import { 
    authSaga,
    logoutSaga,
    authAutologinSaga,

} from './authSagas';


export function* watchAuth () {
    // All può essere utilizzato per eseguire simultaneamente diversi compiti come chiamate asincrone!
    // AUTH
    yield all([
        takeEvery( actionTypes.AUTH_INIT, authSaga),
        takeEvery( actionTypes.AUTH_LOGOUT_INIT, logoutSaga),
        takeEvery( actionTypes.AUTH_AUTOLOGIN, authAutologinSaga),
    ],
    );   
}


