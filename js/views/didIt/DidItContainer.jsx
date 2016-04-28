import {connect} from 'react-redux';

import DidIt from './DidIt.jsx';
import {getDidIt, setPersonId, postDidIt} from './../../redux/ducks/didIt.jsx';

export default connect(
    (state) => ({
        didIt: state.didIt
    }),
    (dispatch) => ({
        setPersonId:    (person) => dispatch(setPersonId(person)),
        getDidIt:       (id) => dispatch(getDidIt(id)),
        incrementDidIt: (person) => dispatch(postDidIt(Object.assign({}, person, {
            times: person.times + 1
        })))
    })
)(DidIt);
