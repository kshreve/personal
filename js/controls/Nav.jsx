import React from 'react';
import {Link} from 'react-router';

import BaseComponent from './BaseComponent.jsx';
import Routes from './../routes.jsx';

export default class Nav extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            parentContainerActiveClass: ''
        };
    }

    openParentContainer() {
        if (this.state.parentContainerActiveClass === '') {
            this.setState({
                parentContainerActiveClass: 'nav__item-parent-container--active'
            });
        } else {
            this.setState({
                parentContainerActiveClass: ''
            });
        }
    }

    keyboardOpen(event) {
        if (event.key === 'Enter') {
            return this.openParentContainer();
        }
    }

    renderNavItem(route) {
        let {parentContainerActiveClass} = this.state,
            navItem = <li key={route.key} className="list-item-unstyled nav__item-container"><Link className="nav__item" to={`/${route.props.path}`} activeClassName="nav__item--active">{route.props.title}</Link></li>;

        if (!!route.props.hasChildren) {
            navItem = (<li key={route.key} className="list-item-unstyled flexzone--reverse" onKeyPress={this.keyboardOpen} onClick={this.openParentContainer} tabIndex="0"><span className="fake-link">Experiments <span className={`icon ${parentContainerActiveClass ? 'icon-circle-up' : 'icon-circle-down'}`}/></span>
                <ul className={`nav__item-parent-container ${parentContainerActiveClass}`}>
                    {
                        route.props.children.map((childRoute) => {
                            if (childRoute.props.nav) {
                                return <li key={childRoute.key} className="list-item-unstyled"><Link className="nav__item" to={`/${route.props.path}/${childRoute.props.path}`} activeClassName="nav__item--active">{childRoute.props.title}</Link></li>;
                            }
                        })
                    }
                </ul>
            </li>);
        }

        return navItem;
    }

    render() {
        let navRoutes = Routes[0].props.children.filter((route) => route.props.nav);

        return (
            <nav className="nav">
                <ul className="flexzone container">
                    {
                        navRoutes.map((route) => this.renderNavItem(route))
                    }
                    <li className="list-item-unstyled"><a className="nav__item" href='/resume.pdf'>Resume</a></li>
                </ul>
            </nav>
        );
    }
}
