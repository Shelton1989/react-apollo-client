import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Redux/store settings

import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Reducer imports
import indexReducer from './reducers/index';

// Reactstrap stylesheet
import 'semantic-ui-css/semantic.min.css';

const defaultState = {};

const store = createStore(
    indexReducer,
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__()?
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__()
    ):
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
