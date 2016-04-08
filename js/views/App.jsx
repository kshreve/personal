import React from 'react';

import BaseComponent from './../controls/BaseComponent.jsx';
import Nav from './../controls/Nav.jsx';
import AlertsContainer from './../controls/AlertsContainer.jsx';

export default class App extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let { theme: { name }, children } = this.props,
            { props: { route: { title } } } = children;

        return (
            <div>
                {
                    name && <link href={`/${name}/theme.min.css`} type="text/css" rel="stylesheet"/>
                }

                <Nav />
                <AlertsContainer />
                <div className="container content">
                    <div className="row">
                        <h1>{title}</h1>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}
