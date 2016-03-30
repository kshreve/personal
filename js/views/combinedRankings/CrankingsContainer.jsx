import { connect } from 'react-redux';

import Crankings from './Crankings.jsx';
import { getRecords } from './../../redux/ducks/crankings.jsx';

export default connect(
    (state) => ({}),
    (dispatch) => ({
        getRecords: dispatch(getRecords())
    })
)(Crankings);
