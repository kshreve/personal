import { connect } from 'react-redux';

import Sudoku from './Sudoku';
import { massageBoard } from './../../redux/ducks/sudoku';


export default connect(
    (state) => ({
        sudoku: state.sudoku
    }),
    (dispatch) => ({
        massageBoard: (board) => dispatch(massageBoard(board))
    })
)(Sudoku);
