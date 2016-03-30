import { reduxForm } from 'redux-form';

import CrankingsDataImport from './CrankingsDataImport.jsx';
import { postDocuments } from './../../redux/ducks/crankings.jsx';

let formName = 'crankingsDataImport',
    fields = ['teamName', 'footballRank', 'basketballRank'];

export default reduxForm({
        form:   formName,
        fields: fields
    },
    (state) => ({}),
    (dispatch) => ({
        postDocuments: (data) => (dispatch(postDocuments(data)))
    })
)(CrankingsDataImport);
