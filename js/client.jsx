import React from 'react';
import Router from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import BrowserHistory from 'history/lib/createBrowserHistory';

import routes from './routes.jsx';
import configureStore from './redux/configureStore.jsx';

const history = BrowserHistory();
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

render((<Provider store={store}>
        <Router history={history}>{routes}</Router>
    </Provider>
), document.getElementById('route-mount'));
