import React from 'react';

import { makepuzzle as makeBoard, solvepuzzle as solveBoard } from 'sudoku';
import BaseComponent from './../../controls/BaseComponent';
import SudokuSquareContainer from './SudokuSquareContainer';


export default class Sudoku extends BaseComponent {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        let { massageBoard } = this.props;

        return massageBoard(makeBoard());
    }

    render () {
        const { sudoku:{ initialBoard, board, valid }, isBoardValid } = this.props;

        return (
            <div className="sudoku">
                <div className="sudoku__board">
                    {board.map((square, i) => <SudokuSquareContainer key={i} square={square}/>)}
                </div>

                <button className="sudoku__winner-button" onClick={isBoardValid} disabled={valid}>{!valid ? `Winner?` : 'Winner!'}</button>
                <button onClick={() => this.props.massageBoard(solveBoard(initialBoard))}>Solve Board</button>
            </div>
        );
    }
}