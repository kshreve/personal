import React from 'react';
import Router, { Route, Redirect, IndexRoute } from 'react-router';
import App from './App.jsx';

export default [
    <Route key="/" path="/" component={App}>
        <IndexRoute key="indexRoute" component={App}/>
    </Route>,

    //Not Found
    <Route key="*" path="*" component={App}/>
];
