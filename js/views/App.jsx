import React from 'react';

import BaseComponent from './../controls/BaseComponent.jsx';
import Nav from './Nav.jsx';

export default class App extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            client: ''
        };
    }

    componentWillMount() {
        if (this.props.location.query) {
            let { client } = this.props.location.query;
            if (client) {
                this.setState({ client: client });
            }
        }
    }

    render() {
        let { client } = this.state;

        return (
            <div>
                <link href={`${client}/theme.min.css`} type="text/css" rel="stylesheet"/>
                <Nav/>
                <div className="container content">
                    <div className="row">
                        <h2>{this.props.children.props.route.title}</h2>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
