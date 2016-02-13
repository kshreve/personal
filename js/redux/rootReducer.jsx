import { combineReducers } from 'redux';
import es6Promise from 'es6-promise';

es6Promise.polyfill();

import app from './ducks/app.jsx';

// For more information on reducers and combining reducers:
// http://rackt.github.io/redux/docs/basics/Reducers.html
const rootReducer = combineReducers({
    app
});

export default rootReducer;
