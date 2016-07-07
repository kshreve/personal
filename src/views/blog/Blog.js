import React from 'react';

import BaseComponent from './../../controls/BaseComponent';

export default class Blog extends BaseComponent {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h3>Experiment Blog posts</h3>
                <ul>
                    <li><a href="https://github.com/kshreve/personal/wiki/Crankings">Crankings</a></li>
                    <li><a href="https://github.com/kshreve/personal/wiki/DidIt">Did It</a></li>
                    <li><a href="https://github.com/kshreve/personal/wiki/White-Labeling">White Labeling</a></li>
                    <li><a href="https://github.com/kshreve/personal/wiki/XKCD---1335">XKCD - 1335</a></li>
                </ul>
            </div>
        );
    }
}
