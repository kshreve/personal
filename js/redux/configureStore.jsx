import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';

import rootReducer from './rootReducer.jsx';
import api from '../middleware/api.jsx';
import logger from '../middleware/logger.jsx';

let middleware = [
    api,
    thunk
];

if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger];
}

const createStoreWithMiddleware = compose(
    applyMiddleware(...middleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)(createStore);

export default (initialState) => {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./rootReducer.jsx', () => {
            const nextRootReducer = require('./rootReducer.jsx');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};
