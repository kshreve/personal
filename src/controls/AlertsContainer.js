import {connect} from 'react-redux';

import Alerts from './Alerts';
import {removeAlert} from './../redux/ducks/alerts';

export default connect(
    (state) => ({
        alerts: state.alerts
    }),
    (dispatch) => ({
        removeAlert: (position) => dispatch(removeAlert(position))
    })
)(Alerts);
