import React from 'react';

import BaseComponent from './../../controls/BaseComponent';

export default class DidIt extends BaseComponent {
    constructor (props) {
        super(props);
    }

    render () {
        let { didIt: { processing, times }, id, incrementDidIt } = this.props;

        return (
            <div>
                <div>You did it: {times}</div>
                <button className="did-it__button" onClick={() => incrementDidIt(id, times)} disabled={processing}>I did it</button>
            </div>
        );
    }
}
