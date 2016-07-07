import React from 'react';

import BaseComponent from './../../controls/BaseComponent';

export default class Sudoku extends BaseComponent {
    constructor (props) {
        super(props);
    }


    render () {
        let {sudoku:{board}} = this.props;

        return (
            <div>
                Sudoku
                <div>{board}</div>
            </div>
        );
    }
}
