import React from 'react';
import {Link} from 'react-router';

import BaseComponent from './../controls/BaseComponent.jsx';

export default class Nav extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="two columns"><Link to="/about">About</Link></div>
                <div className="two columns"><Link to="/blogs">Blog List</Link></div>
            </div>
        );
    }
}
