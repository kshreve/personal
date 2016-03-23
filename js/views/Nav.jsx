import React from 'react';
import {Link} from 'react-router';

import BaseComponent from './../controls/BaseComponent.jsx';

export default class Nav extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="nav">
                <ul className="container">
                    <li className="list-item-unstyled"><Link className="nav__item" to="/about" activeClassName="nav__item--active">About</Link></li>
                    <li className="list-item-unstyled"><Link className="nav__item" to="/blog" activeClassName="nav__item--active">Blog</Link></li>
                    <li className="list-item-unstyled"><a className="nav__item" href='/resume.pdf'>Resume</a></li>
                </ul>
            </nav>
        );
    }
}
