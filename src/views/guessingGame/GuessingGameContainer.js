import { connect } from 'react-redux';

import GuessingGame from './GuessingGame';
import { getGame } from './../../redux/ducks/guessingGame';

export default connect(
    (state) => ({
        guessingGame: state.guessingGame
    }),
    {
        getGame: getGame
    }
)(GuessingGame);
