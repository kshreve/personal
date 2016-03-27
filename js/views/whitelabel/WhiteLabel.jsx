import React from 'react';

import BaseComponent from './../../controls/BaseComponent.jsx';

export default class WhiteLabel extends BaseComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.load('initial connecting test complete');
    }

    render() {
        return (
            <div>
                White Labeling
            </div>
        );
    }
}
