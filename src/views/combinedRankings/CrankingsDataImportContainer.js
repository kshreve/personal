import { reduxForm } from 'redux-form';

import CrankingsDataImport from './CrankingsDataImport';
import { postDocuments } from './../../redux/ducks/crankings';
import { addAlert } from './../../redux/ducks/alerts';

let formName = 'crankingsDataImport',
    fields = ['teamName', 'footballRank', 'basketballRank'];

export default reduxForm({
        form:   formName,
        fields: fields
    },
    (state) => ({
        postSuccess: state.crankings.postSuccess
    }),
    {
        postDocuments: postDocuments,
        addAlert:      addAlert
    }
)(CrankingsDataImport);
