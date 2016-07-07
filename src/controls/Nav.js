import React from 'react';
import { Link } from 'react-router';

import BaseComponent from './BaseComponent';

export default class Nav extends BaseComponent {
    constructor (props) {
        super(props);
    }

    keyboardOpen (event, item) {
        if (event.key === 'Enter') {
            return this.toggleItem(item);
        }
    }

    toggleItem (item) {
        return this.props.toggleItem(item);
    }

    renderNavItem (item) {
        let { toggleItem } = this;

        let navItem = (<li key={item.title} className="list-item-unstyled nav__item-container" onKeyPress={(e) => this.keyboardOpen(e, item)} onClick={() => toggleItem(item)}>
            <Link className="nav__item" to={item.path} activeClassName="nav__item--active">{item.title}</Link>
        </li>);

        if (item.items && item.items.length > 0) {
            navItem = (<li key={item.title} className="list-item-unstyled flexzone--reverse" onKeyPress={(e) => this.keyboardOpen(e, item)} onClick={() => toggleItem(item)} tabIndex="0">
                <span className="fake-link">Experiments <span className={`icon ${item.open ? 'icon-circle-up' : 'icon-circle-down'}`}/></span>
                <ul className={`nav__item-parent-container ${item.open && 'nav__item-parent-container--active'}`}>
                    {
                        item.items.map((childRoute) =>
                            <li key={childRoute.title} className="list-item-unstyled">
                                <Link className="nav__item" to={`${item.path}${childRoute.path}`} activeClassName="nav__item--active">{childRoute.title}</Link>
                            </li>
                        )
                    }
                </ul>
            </li>);
        }

        return navItem;
    }

    render () {
        let { mainNav: { items } } = this.props;

        return (
            <nav className="nav">
                <ul className="flexzone container">
                    {
                        items && items.map((item) => this.renderNavItem(item))
                    }
                    <li className="list-item-unstyled"><a className="nav__item" href={require('./../../assets/resume.pdf')}>Resume</a></li>
                </ul>
            </nav>
        );
    }
}
