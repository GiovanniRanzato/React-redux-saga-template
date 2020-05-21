import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// React ROUTER
import {BrowserRouter} from 'react-router-dom';

// REDUX
// Import applyMiddleware per applicare thunk all'app
// Import compose per applicare thunk all'app
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';

// import thunk per utilizzare codice asincrono con redux
import thunk from 'redux-thunk';
import ui from './store/reducers/ui';
import auth from './store/reducers/auth';
// END Redux component import

// REDUX-SAGA
import createSagaMiddleware from 'redux-saga';
import { watchAuth } from './store/sagas/index';
// END Redux-saga component import

// Redux dev-tools advanced setup
// Utilizzo la variabile globlale process.env.NODE_ENV per verificare se sono in developmente mode e quindi attivare redux tools o menoxw

const composeEnhancers = (process.env.NODE_ENV === "development" ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null  )|| compose;
const rootReducer = combineReducers ({
    ui: ui,
    auth: auth
    // other reducers....
});
// REDUX-SAGA: aggiunto sagaMiddleware a applyMiddleware
// creiamo una costante con all'interno un middleware della saga da aggiungere allo store nella funzione create store
// Una volta collegata la saga allo store, possiamo farla partire con il comando run (vedi sotto)
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers( applyMiddleware (thunk, sagaMiddleware)));
// Redux Setup

// END Redux setup (need to wrap the App with the provider)

// REDUX-SAGA: faccio partire la saga per testarlo:
sagaMiddleware.run(watchAuth);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
