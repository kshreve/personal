import { connect } from 'react-redux';

import SudokuSquare from './SudokuSquare';
import { isSquareValid, toggleEditSquare, editSquareContent } from './../../redux/ducks/sudoku';

export default connect(
    (state) => ({}),
    (dispatch) => ({
        isSquareValid:     (square) => dispatch(isSquareValid(square)),
        toggleEditSquare:  (square) => dispatch(toggleEditSquare(square)),
        editSquareContent: (square, content) => dispatch(editSquareContent(square, content))
    })
)(SudokuSquare);
