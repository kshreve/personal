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
            <div>
                Situation: {situation}
                Game ID : {gameId}
            </div>
        );
    }
}
