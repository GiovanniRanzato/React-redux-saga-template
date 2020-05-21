// React
import React , {useEffect, useCallback} from 'react';
// REDUX
import  * as actions from './store/actions';
import {useDispatch, useSelector } from 'react-redux';

// React-Router
// import {BrowserRouter} from 'react-router-dom';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
// Config
import {PagesConfig} from './config/pagesConfig';

// Parse
import Parse from 'parse';
// Custom Component
import Layout from './Layout/Layout';

import {TOOLBAR_PATH} from './config/path';

// Parse Server Connection Inizialization:
Parse.initialize("app-id", "javascript-id");


const App = ()=> {
  const isAuth = useSelector(state =>  state.auth.isAuth);
  let routes=null;
  const dispatch = useDispatch();

  const onTryAutoLogin = useCallback(() => dispatch(actions.authAutologin()), [dispatch]);
  useEffect( () => {
    onTryAutoLogin ();
  }, [onTryAutoLogin]); 

  
  if (isAuth) {
    routes = PagesConfig.authMenu.map(config=><Route key={config.id} path={config.path} >{config.component}</Route>)
    // set default auth starting page
    routes.push(<Redirect key='redirectPath' to={TOOLBAR_PATH.USER_DASHBOARD} />);
  }else{
    routes = PagesConfig.notAuthMenu.map(config=><Route key={config.id} path={config.path} >{config.component}</Route>)
    // set default auth starting page
    routes.push(<Redirect key='redirectPath' to={TOOLBAR_PATH.LOGIN} />);
  }
  
  
  return (
    <div className="App">
      <Layout isAuthenticated={isAuth}>
        <Switch>
          {routes}
        </Switch>
      </Layout>
    </div>
  );
}

export default withRouter(App);
