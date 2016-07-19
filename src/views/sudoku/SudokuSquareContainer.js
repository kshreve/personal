import { connect } from 'react-redux';

import SudokuSquare from './SudokuSquare';
import { isSquareValid, toggleEditSquare, editSquareContent } from './../../redux/ducks/sudoku';

export default connect(
    () => ({}),
    {
        isSquareValid:     isSquareValid,
        toggleEditSquare:  toggleEditSquare,
        editSquareContent: editSquareContent
    }
)(SudokuSquare);
