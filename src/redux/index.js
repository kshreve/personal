import {combineReducers} from 'redux';
import es6Promise from 'es6-promise';

es6Promise.polyfill();

import app from './ducks/app';
import alerts from './ducks/alerts';
import crankings from './ducks/crankings';
import didIt from './ducks/didIt';
import {reducer as form} from 'redux-form';
import mainNav from './ducks/mainNav';
import sudoku from './ducks/sudoku';
import theme from './ducks/theme';

export default combineReducers({
    app,
    alerts,
    crankings,
    didIt,
    form,
    mainNav,
    sudoku,
    theme
});
