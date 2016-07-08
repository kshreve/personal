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

    render () {
        const { sudoku:{ board, valid }, isSquareValid, isBoardValid } = this.props;


        let squares = board.map((square, i) => <div className="sudoku__square" key={i} onClick={() => isSquareValid(square)}>
            <span className={`${square.valid ? 'sudoku__square-number--valid' : 'sudoku__square-number--invalid'}`}>{square.content}</span>
        </div>);

        return (
            <div className="sudoku">
                <div className="sudoku__board">
                    {squares}
                </div>

                <button className="sudoku__winner-button" onClick={isBoardValid} disabled={valid}>{!valid ? `Winner?` : 'Winner!'}</button>
            </div>
        );
    }
}
