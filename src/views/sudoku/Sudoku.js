import React from 'react';

import BaseComponent from './../../controls/BaseComponent';

export default class Sudoku extends BaseComponent {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        let { sudoku:{ initialBoard }, massageBoard } = this.props;

        return massageBoard(initialBoard);
    }

    checkRegion (square) {
        return this.props.sudoku.board.filter((item) => item.region === square.region && item.content === square.content).length === 1;
    }

    checkColumn (square) {
        return this.props.sudoku.board.filter((item) => item.column === square.column && item.content === square.content).length === 1;
    }

    checkRow (square) {
        return this.props.sudoku.board.filter((item) => item.row === square.row && item.content === square.content).length === 1;
    }

    checkValidity (square) {
        let valid = this.checkRow(square) && this.checkColumn(square) && this.checkRegion(square);
        console.log(valid);
        return valid;
    }

    render () {
        let { sudoku:{ board } } = this.props,
            squares = board.map((square, i) => <div className="sudoku__square" key={i} onClick={() => this.checkValidity(square)}>{square.content}</div>);


        return (
            <div className="sudoku">
                <div className="sudoku__board">
                    {squares}
                </div>
            </div>
        );
    }
}
