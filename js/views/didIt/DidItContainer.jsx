import { connect } from 'react-redux';

import DidIt from './DidIt.jsx';
import { getDidIt, setPerson, postDidIt } from './../../redux/ducks/didIt.jsx';

export default connect(
    (state) => ({
        didIt: state.didIt
    }),
    (dispatch) => ({
        getDidIt:       (id) => dispatch(getDidIt(id)),
        incrementDidIt: (person) => dispatch(
            postDidIt(Object.assign({}, person, {
                times: person.times + 1
            }))
        )
    })
)(DidIt);
