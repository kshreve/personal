import { connect } from 'react-redux';

import Crankings from './Crankings';
import { getRecords } from './../../redux/ducks/crankings';

export default connect(
    (state) => ({
        crankings: state.crankings
    }),
    {
        getRecords: getRecords
    }
)(Crankings);
