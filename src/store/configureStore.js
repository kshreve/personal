import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import localforage from 'localforage';

import rootReducer from '../redux';
import {logger} from '../redux/middleware/logger';
import api from '../redux/middleware/api';

let middleware = [
    thunk,
    api
];

/* eslint-disable global-require */
if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger];
}

const createStoreWithMiddleware = compose(
    applyMiddleware(...middleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState, autoRehydrate());
    persistStore(store, {
        blackList: ['form', 'mainNav'],
        storage:   localforage
    });

    if (module.hot) {
        module.hot.accept('../redux', () => {
            const nextReducer = require('../redux').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
