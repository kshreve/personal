import React from 'react';

import BaseComponent from './../../controls/BaseComponent';

export default class SudokuSquare extends BaseComponent {
    constructor (props) {
        super(props);
    }

    componentDidUpdate (previousProps) {
        let { square, isSquareValid } = this.props,
            { editing } = square;

        if (previousProps.square.editing && previousProps.square.editing != editing) {
            isSquareValid(square);
        }
    }

    render () {
        const { square, editSquareContent, toggleEditSquare } = this.props;

        return (
            <div className="sudoku__square" onClick={() => !square.editing && toggleEditSquare(square)}>
                {square.editing && <input pattern="[0-9]" maxLength="1" className="sudoku__square-input" defaultValue={square.content} onBlur={(e) => editSquareContent(square, parseInt(e.target.value, 10)) && toggleEditSquare(square)}/>}
                {!square.editing && <span className={`${square.valid ? 'sudoku__square-number--valid' : 'sudoku__square-number--invalid'}`}>{square.content}</span>}
            </div>
        );
    }
}
