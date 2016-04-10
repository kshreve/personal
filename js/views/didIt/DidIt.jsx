import React from 'react';

import BaseComponent from './../../controls/BaseComponent.jsx';
import { DID_IT } from './../../constants/strings.jsx';
import { randomGuid } from './../../convenience/functions.jsx';

export default class DidIt extends BaseComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { setPerson, getDidIt } = this.props,
            didItCounter = localStorage.getItem(DID_IT);

        if (!didItCounter) {
            let person = randomGuid();
            setPerson(person);
            localStorage.setItem(DID_IT, person);
        } else {
            setPerson(didItCounter.person);
            getDidIt(didItCounter.person);
        }
    }

    render() {
        let { didIt: { times }, postDidIt } = this.props;

        return (
            <div>
                <div>You did it: {times}</div>
                <button onClick={postDidIt}>I did it</button>
            </div>
        );
    }
}
