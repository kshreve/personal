import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

import BaseComponent from './controls/BaseComponent.jsx';

export default class App extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Test
            </div>
        );
    }
}
