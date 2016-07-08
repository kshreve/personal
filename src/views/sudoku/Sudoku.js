import React from 'react';

import BaseComponent from './../../controls/BaseComponent';

export default class Sudoku extends BaseComponent {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        let { massageBoard, isBoardValid } = this.props;

        return massageBoard() && isBoardValid();
    }

    render () {
        const { sudoku:{ board, valid }, isSquareValid } = this.props;


        let squares = board.map((square, i) => <div className={`sudoku__square ${square.valid ? 'sudoku__square--valid' : 'sudoku__square--invalid'}`} key={i} onClick={() => isSquareValid(square)}>{square.content}</div>);

        return (
            <div className="sudoku">
                <div className="sudoku__board">
                    {squares}
                </div>
                <div>{valid ? `Valid` : `Invalid`}</div>
            </div>
        );
    }
}
