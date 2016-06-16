import React from 'react';
import {Link} from 'react-router';

import BaseComponent from './BaseComponent';

export default class Nav extends BaseComponent {
    constructor(props) {
        super(props);
    }

    keyboardOpen(event) {
        if (event.key === 'Enter') {
            return this.props.toggleItem();
        }
    }

    renderNavItem(item) {
        let {toggleItem} = this.props,
            navItem = <li key={item.title} className="list-item-unstyled nav__item-container"><Link className="nav__item" to={item.path} activeClassName="nav__item--active">{item.title}</Link></li>;

        if (item.items && item.items.length > 0) {
            navItem = (<li key={item.title} className="list-item-unstyled flexzone--reverse" onKeyPress={this.keyboardOpen} onClick={toggleItem} tabIndex="0"><span className="fake-link">Experiments <span className={`icon ${item.open ? 'icon-circle-up' : 'icon-circle-down'}`}/></span>
                <ul className={`nav__item-parent-container ${item.open && 'nav__item-parent-container--active'}`}>
                    {/*                   {
                     item.props.children.map((childRoute) => {
                     if (childRoute.props.nav) {
                     return <li key={childRoute.title} className="list-item-unstyled"><Link className="nav__item" to={`/${item.path}/${childRoute.path}`} activeClassName="nav__item--active">{childRoute.title}</Link></li>;
                     }
                     })
                     }*/}
                </ul>
            </li>);
        }

        return navItem;
    }

    render() {
        let {mainNav: {items}} = this.props;

        return (
            <nav className="nav">
                <ul className="flexzone container">
                    {
                        items && items.map((item) => this.renderNavItem(item))
                    }
                    {/*TODO: FIX THE RESUME LINK <li className="list-item-unstyled"><a className="nav__item" href={'/resume.pdf'}>Resume</a></li>*/}
                </ul>
            </nav>
        );
    }
}
