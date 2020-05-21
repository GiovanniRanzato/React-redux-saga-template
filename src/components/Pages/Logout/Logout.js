// REACT
import React, {useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import * as actions from '../../../store/actions/index';

// REACT ROUTER
import {Redirect} from 'react-router-dom';

const Logout = (props) => {
    const dispatch = useDispatch();
    const onLogout = useCallback(() => dispatch(actions.authLogoutInit()), [dispatch]);
    useEffect(() => {
        onLogout();
    }, [onLogout]);
    
    return (
        <Redirect to='/' />
    );

}

export default (Logout);