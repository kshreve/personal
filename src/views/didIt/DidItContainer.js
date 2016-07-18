import { connect } from 'react-redux';

import DidIt from './DidIt';
import { postDidIt } from './../../redux/ducks/didIt';

export default connect(
    (state) => ({
        didIt: state.didIt,
        id:    state.app.id
    }),
    (dispatch) => ({
        incrementDidIt: (id, times) => dispatch(postDidIt(Object.assign({}, {
            id:    id,
            times: times + 1
        })))
    })
)(DidIt);
