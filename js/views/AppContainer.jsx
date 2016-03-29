import { connect } from 'react-redux';

import App from './App.jsx';

export default connect(
    (state)=> ({
        theme: state.theme
    }),
    (dispatch)=> ({})
)(App);