import { connect } from 'react-redux';

import Sudoku from './Sudoku';
import { massageBoard, isBoardValid } from './../../redux/ducks/sudoku';

export default connect(
    (state) => ({
        sudoku: state.sudoku
    }),
    (dispatch) => ({
        massageBoard: (board, newBoard) => dispatch(massageBoard(board, newBoard)),
        isBoardValid: () => dispatch(isBoardValid())
    })
)(Sudoku);
