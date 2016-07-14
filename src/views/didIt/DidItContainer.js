import { connect } from 'react-redux';

import DidIt from './DidIt';
import { getDidIt, setPersonId, postDidIt } from './../../redux/ducks/didIt';

export default connect(
    (state) => ({
        didIt: state.didIt
    }),
    (dispatch) => ({
        setPersonId:    () => dispatch(setPersonId()),
        incrementDidIt: (person) => dispatch(postDidIt(Object.assign({}, person, {
            times: person.times + 1
        })))
    })
)(DidIt);
