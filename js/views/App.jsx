import React from 'react';

import BaseComponent from './../controls/BaseComponent.jsx';
import Nav from './Nav.jsx';

export default class App extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Nav/>
                    <h2>{this.props.children.props.route.title}</h2>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
