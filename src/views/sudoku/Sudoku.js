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

        return massageBoard(makeBoard(), true);
    }

    render () {
        const { sudoku:{ initialBoard, board, valid }, isBoardValid, massageBoard } = this.props;

        return (
            <div className="sudoku">
                <div className="sudoku__board">
                    {board.map((square, i) => <SudokuSquareContainer key={i} square={square}/>)}
                </div>

                <button className="sudoku__button sudoku__button--winner" onClick={isBoardValid} disabled={valid}>{!valid ? `Winner?` : 'Winner!'}</button>
                <button className="sudoku__button sudoku__button--solve" onClick={() => massageBoard(solveBoard(initialBoard))} disabled={valid}>Solve Board</button>
                <button className="sudoku__button sudoku__button--new" onClick={() => massageBoard(makeBoard(), true)}>New Board</button>
            </div>
        );
    }
}
