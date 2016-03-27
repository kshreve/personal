import { reduxForm } from 'redux-form';

import WhiteLabel from './WhiteLabel.jsx';
import { load } from './../../redux/ducks/app.jsx';

let formName = 'whiteLabel',
    fields = ['primary', 'secondary', 'accentOne', 'accentTwo'];

export default reduxForm({
        form:   formName,
        fields: fields
    },
    (state) => ({
        app: state.app
    }),
    (dispatch) => ({
        load: (data) => dispatch(load(data))
    })
)(WhiteLabel);