import { connect } from 'react-redux';

import Nav from './Nav';
import { toggleItem } from './../redux/ducks/mainNav';

export default connect(
    (state) => ({
        mainNav: state.mainNav
    }),
    { toggleItem: toggleItem }
)(Nav);
