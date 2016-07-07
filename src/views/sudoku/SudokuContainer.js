import {connect} from 'react-redux';

import Sudoku from './Sudoku';


export default connect(
    (state) => ({
        sudoku: state.sudoku
    }),
    (dispatch) => ({})
)(Sudoku);
