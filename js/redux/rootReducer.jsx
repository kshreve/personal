import { combineReducers } from 'redux';
import es6Promise from 'es6-promise';

es6Promise.polyfill();

import app from './ducks/app.jsx';
import { reducer as form } from 'redux-form';
import theme from './ducks/theme.jsx';

export default combineReducers({
    app,
    form,
    theme
});
