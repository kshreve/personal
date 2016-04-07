import React from 'react';
import {Link} from 'react-router';

import BaseComponent from './BaseComponent.jsx';
import Routes, {experimentPath} from './../routes.jsx';

export default class Nav extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            experimentsContainerClass: ''
        };
    }

    openExperiments() {
        if (this.state.experimentsContainerClass === '') {
            this.setState({
                experimentsContainerClass: 'nav__experiments-container--active'
            });
        } else {
            this.setState({
                experimentsContainerClass: ''
            });
        }
    }

    render() {
        let {experimentsContainerClass} = this.state,
            navRoutes = Routes[0].props.children.filter((route) => route.props.nav),
            experimentsParent = Routes[0].props.children.filter((route) => route.props.path === experimentPath)[0],
            experimentRoutes = experimentsParent.props.children.filter((route) => route.props.nav);

        return (
            <nav className="nav">
                <ul className="flexzone container">
                    {
                        navRoutes.map((route) => {
                            return <li key={route.key} className="list-item-unstyled nav__item-container"><Link className="nav__item" to={`/${route.props.path}`} activeClassName="nav__item--active">{route.props.title}</Link></li>;
                        })
                    }
                    <li className="list-item-unstyled flexzone--reverse" onClick={this.openExperiments}><a>Experiments <span className={`icon ${experimentsContainerClass ? 'icon-circle-up' : 'icon-circle-down'}`}/></a>
                        <ul className={`nav__experiments-container ${experimentsContainerClass}`}>
                            {
                                experimentRoutes.map((route) => {
                                    return <li key={route.key} className="list-item-unstyled"><Link className="nav__item" to={`/${experimentPath}/${route.props.path}`} activeClassName="nav__item--active">{route.props.title}</Link></li>;
                                })
                            }
                        </ul>
                    </li>
                    <li className="list-item-unstyled"><a className="nav__item" href='/resume.pdf'>Resume</a></li>
                </ul>
            </nav>
        );
    }
}
