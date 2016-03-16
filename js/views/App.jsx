import React from 'react';

import BaseComponent from './../controls/BaseComponent.jsx';
import Nav from './Nav.jsx';

export default class App extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav/>
                {this.props.children}
            </div>
        );
    }
}
