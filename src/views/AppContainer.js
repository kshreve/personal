import { connect } from 'react-redux';

import App from './App';
import { setPersonId } from './../redux/ducks/app';

export default connect(
    (state)=> ({
        app:   state.app,
        theme: state.theme
    }),
    (dispatch)=> ({
        setPersonId: () => dispatch(setPersonId())
    })
)(App);
