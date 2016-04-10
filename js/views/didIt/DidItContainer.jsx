import { connect } from 'react-redux';

import DidIt from './DidIt.jsx';
import { getDidIt, setPerson, postDidIt } from './../../redux/ducks/didIt.jsx';

export default connect(
    (state) => ({
        didIt: state.didIt
    }),
    (dispatch) => ({
        getDidIt:  () => dispatch(getDidIt()),
        setPerson: (person) => dispatch(setPerson(person)),
        postDidIt: () => dispatch(postDidIt())
    })
)(DidIt);
