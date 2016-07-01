import { reduxForm } from 'redux-form';

import WhiteLabel from './WhiteLabel';
import { createCustomTheme } from './../../redux/ducks/theme';
import { addAlert } from './../../redux/ducks/alerts';

let formName = 'whiteLabel',
    fields = ['theme', 'primary', 'secondary', 'accentOne', 'accentTwo'];

export default reduxForm({
        form:   formName,
        fields: fields
    },
    (state) => ({
        theme: state.theme
    }),
    (dispatch) => ({
        createCustomTheme: (data) => dispatch(createCustomTheme(data)),
        addAlert:          (alert) => dispatch(addAlert(alert))
    })
)(WhiteLabel);
