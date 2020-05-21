import React from 'react';
// Config
import {TOOLBAR_TEXT} from './text';
import {LOGIN_TEXT}     from './text';
import {SIGNIN_TEXT}     from './text';

//import {LOGOUT_TEXT}     from './text';
import {USER_DASHBOARD}     from './text';
//import {SEL_PROFILE_TEXT}     from './text';
import {LANGUAGE} from './text';
import {TOOLBAR_PATH} from './path';
// UI 
import PageTemplate from '../components/Ui/PageTemplate/PageTemplate';
// App 

import Login from '../components/Pages/Login/Login';
import Logout from '../components/Pages/Logout/Logout'
import Signin from '../components/Pages/SignIn/Signin';


export const  PagesConfig =  {
    
    notAuthMenu: [
        {
            id: 'signin',
            label: TOOLBAR_TEXT.SIGNIN[LANGUAGE],
            path:  TOOLBAR_PATH.SIGNIN,
            component:  <PageTemplate title={SIGNIN_TEXT.TITLE[LANGUAGE]}  lead={SIGNIN_TEXT.LEAD[LANGUAGE]}> <Signin lang={LANGUAGE}/> </PageTemplate>
        },
        {
            id: 'login',
            label: TOOLBAR_TEXT.LOGIN[LANGUAGE],
            path:  TOOLBAR_PATH.LOGIN,
            component: <PageTemplate title={LOGIN_TEXT.TITLE[LANGUAGE]}  lead={LOGIN_TEXT.LEAD[LANGUAGE]}> <Login lang={LANGUAGE}/></PageTemplate>
        }
    ],
    authMenu: [

        {
            id: 'userDashboard',
            label: TOOLBAR_TEXT.USER_DASHBOARD[LANGUAGE],
            path:  TOOLBAR_PATH.USER_DASHBOARD,
            component: <PageTemplate title={USER_DASHBOARD.TITLE[LANGUAGE]}  lead={USER_DASHBOARD.LEAD[LANGUAGE]}>...</PageTemplate>
        },
        {
            id: 'logout',
            label: TOOLBAR_TEXT.LOGOUT[LANGUAGE],
            path:  TOOLBAR_PATH.LOGOUT,
            component: ()=> <Logout />
        }
    ]
}