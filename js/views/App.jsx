import React from 'react';

import BaseComponent from './../controls/BaseComponent.jsx';
import Nav from './../controls/Nav.jsx';
import AlertsContainer from './../controls/AlertsContainer.jsx';

export default class App extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            theme: ''
        };
    }

    componentDidUpdate(previousProps, previousState) {
        let { theme: { name } } = this.props;
        if (previousProps.theme.name != name) {
            this.setState({
                theme: name
            });
        }
    }

    render() {
        let { theme } = this.state;

        return (
            <div>
                {
                    theme && <link href={`${theme}/theme.min.css`} type="text/css" rel="stylesheet"/>
                }

                <Nav />
                <AlertsContainer />
                <div className="container content">
                    <div className="row">
                        <h1>{this.props.children.props.route.title}</h1>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}