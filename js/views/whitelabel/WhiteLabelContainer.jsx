import { reduxForm } from 'redux-form';

import WhiteLabel from './WhiteLabel.jsx';
import { createCustomTheme } from './../../redux/ducks/theme.jsx';

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
        createCustomTheme: (data) => dispatch(createCustomTheme(data))
    })
)(WhiteLabel);
