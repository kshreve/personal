import { Component } from 'react';
import { connect } from 'react-redux';
import { connectReduxForm, initialize } from 'redux-form';

import App from './App.jsx';

function validateApp(data, dispatch) {
    return new Promise((resolve, reject) => {
        const errors = {};

        resolve(errors);
    });
}

const formName = 'app';
const fields = ['appNumber'];
const appForm = connectReduxForm({
    form:            formName,
    fields:          fields,
    asyncBlurFields: fields,
    asyncValidate:   validateApp
})(App);

export default connect(
    (state) => ({
        app: state.app
    }),
    (dispatch) => ({})
)(appForm);
