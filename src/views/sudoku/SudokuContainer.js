import { connect } from 'react-redux';

import Sudoku from './Sudoku';
import { massageBoard, isBoardValid } from './../../redux/ducks/sudoku';

export default connect(
    (state) => ({
        sudoku: state.sudoku
    }),
    (dispatch) => ({
        massageBoard: () => dispatch(massageBoard()),
        isBoardValid: () => dispatch(isBoardValid()),
    })
)(Sudoku);
