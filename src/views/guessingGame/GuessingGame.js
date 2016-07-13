import React from 'react';

import BaseComponent from './../../controls/BaseComponent';

export default class GuessingGame extends BaseComponent {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        return this.props.getGame();
    }

    render () {
        let { guessingGame: { situation, gameId } } = this.props;

        return (
            <div className="guessing-game">
                <h3>Game ID: {gameId}</h3>
                <div className="guessing-game__situation">
                    {situation && situation.map(x =>
                        <div className="guessing-game__situation-item">{x > 0 ? 'X' : 'O'}</div>
                    )}
                </div>
            </div>
        );
    }
}
