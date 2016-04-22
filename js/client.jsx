import React from 'react';
import Router, { browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import routes from './routes.jsx';
import configureStore from './redux/configureStore.jsx';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

render((<Provider store={store}>
        <Router history={browserHistory}>{routes}</Router>
    </Provider>
), document.getElementById('route-mount'));
