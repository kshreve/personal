import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';

import rootReducer from './rootReducer.jsx';
import logger from '../middleware/logger.jsx';

const createStoreWithMiddleware = compose(
    applyMiddleware(
        thunk,// lets us dispatch() functions
        logger
    ),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if(module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./rootReducer.jsx', () => {
            const nextRootReducer = require('./rootReducer.jsx');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
