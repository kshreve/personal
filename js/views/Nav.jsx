import React from 'react';
import { Link } from 'react-router';

import BaseComponent from './../controls/BaseComponent.jsx';
import Routes from './../routes.jsx';

export default class Nav extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let navRoutes = Routes[0].props.children.filter((route) => route.props.nav);
        
        return (
            <nav className="nav">
                <ul className="container">
                    {
                        navRoutes.map((route) => {
                            return <li className="list-item-unstyled"><Link className="nav__item" to={`/${route.key}`} activeClassName="nav__item--active">{route.props.title}</Link></li>;
                        })
                    }
                    <li className="list-item-unstyled"><a className="nav__item" href='/resume.pdf'>Resume</a></li>
                </ul>
            </nav>
        );
    }
}
