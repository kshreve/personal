import React from 'react';

import BaseComponent from './../../controls/BaseComponent.jsx';
import { DID_IT } from './../../constants/strings.jsx';
import { randomGuid } from './../../convenience/functions.jsx';

export default class DidIt extends BaseComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let {getDidIt} = this.props,
            personId = localStorage.getItem(DID_IT);

        if (!personId) {
            personId = randomGuid();
            localStorage.setItem(DID_IT, personId);
        } else {
            getDidIt(personId);
        }
    }

    render() {
        let {didIt: {person: {times}}, incrementDidIt} = this.props;

        return (
            <div>
                <div>You did it: {times}</div>
                <button onClick={(person) => incrementDidIt(person)}>I did it</button>
            </div>
        );
    }
}
