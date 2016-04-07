import React from 'react';
import {Link} from 'react-router';

import BaseComponent from './BaseComponent.jsx';
import Routes from './../routes.jsx';

export default class Nav extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            experiments: ''
        };
    }

    openExperiments() {
        if (this.state.experiments === '') {
            this.setState({
                experiments: 'nav__experiments-container--active'
            });
        } else {
            this.setState({
                experiments: ''
            });
        }
    }

    render() {
        let navRoutes = Routes[0].props.children.filter((route) => route.props.nav),
            experimentRoutes = Routes[0].props.children.filter((route) => route.props.experiment);

        return (
            <nav className="nav">
                <ul className="flexzone container">
                    {
                        navRoutes.map((route) => {
                            return <li key={route.key} className="list-item-unstyled nav__item-container"><Link className="nav__item" to={`/${route.key}`} activeClassName="nav__item--active">{route.props.title}</Link></li>;
                        })
                    }
                    <li className="list-item-unstyled flexzone--reverse" onClick={this.openExperiments}><a>Experiments <span className={`icon ${this.state.experiments ? 'icon-circle-up' : 'icon-circle-down'}`}/></a>
                        <ul className={`nav__experiments-container ${this.state.experiments}`}>
                            {
                                experimentRoutes.map((route) => {
                                    return <li key={route.key} className="list-item-unstyled"><Link className="nav__item" to={`/${route.key}`} activeClassName="nav__item--active">{route.props.title}</Link></li>;
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
