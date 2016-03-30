import { reduxForm } from 'redux-form';

import CrankingsDataImport from './CrankingsDataImport.jsx';
import { postDocuments } from './../../redux/ducks/crankings.jsx';
import { addAlert } from './../../redux/ducks/alerts.jsx';

let formName = 'crankingsDataImport',
    fields = ['teamName', 'footballRank', 'basketballRank'];

export default reduxForm({
        form:   formName,
        fields: fields
    },
    (state) => ({
        postSuccess: state.crankings.postSuccess
    }),
    (dispatch) => ({
        postDocuments: (data) => dispatch(postDocuments(data)),
        addAlert:      (alert) => dispatch(addAlert(alert))
    })
)(CrankingsDataImport);
