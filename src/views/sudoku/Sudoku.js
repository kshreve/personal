import React from 'react';

import BaseComponent from './../../controls/BaseComponent';

export default class Sudoku extends BaseComponent {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        let { massageBoard } = this.props;

        return massageBoard();
    }

    checkSum (squares) {
        return squares.map(square => square.content).reduce((previous, current) => previous + current, 0) === 45;
    }

    checkRegion (square) {
        let region = this.props.sudoku.board.filter((item) => item.region === square.region);
        return this.checkSum(region) && region.filter((item) => item.content === square.content).length === 1;
    }

    checkColumn (square) {
        let column = this.props.sudoku.board.filter((item) => item.column === square.column);
        return this.checkSum(column) && column.filter((item) => item.content === square.content).length === 1;
    }

    checkRow (square) {
        let row = this.props.sudoku.board.filter((item) => item.row === square.row);
        return this.checkSum(row) && row.filter((item) => item.content === square.content).length === 1;
    }

    checkValidity (square) {
        return this.checkRow(square) && this.checkColumn(square) && this.checkRegion(square);
    }

    checkWholePuzzle () {
        let { sudoku: { board } } = this.props;

        return board.map((square) => !this.checkValidity(square) && square).filter((valid) => valid).length === 0;
    }

    render () {
        let { sudoku:{ board } } = this.props,
            squares = board.map((square, i) => <div className="sudoku__square" key={i} onClick={() => this.checkValidity(square)}>{square.content}</div>);

        return (
            <div className="sudoku">
                <div className="sudoku__board">
                    {squares}
                </div>
                <div>{this.checkWholePuzzle() ? `Valid` : `Invalid`}</div>
            </div>
        );
    }
}
