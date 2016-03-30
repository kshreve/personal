import { connect } from 'react-redux';

import Alerts from './Alerts.jsx';
import { removeAlert } from './../redux/ducks/alerts.jsx';

export default connect(
    (state) => ({
        alerts: state.alerts
    }),
    (dispatch) => ({
        removeAlert: (position) => dispatch(removeAlert(position))
    })
)(Alerts);
