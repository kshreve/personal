import React from 'react';

import BaseComponent from './../../controls/BaseComponent.jsx';
import { DID_IT } from './../../constants/strings.jsx';
import { randomGuid } from './../../convenience/functions.jsx';

export default class DidIt extends BaseComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let {getDidIt, setPerson} = this.props,
            personId = localStorage.getItem(DID_IT);

        if (!personId) {
            personId = randomGuid();
            localStorage.setItem(DID_IT, personId);
        } else {
            getDidIt(personId);
        }
        
        setPerson({id: personId, times: 0})
    }

    componentDidUpdate(previousProps, previousState) {
        let {didIt: {person, personNotFound}, incrementDidIt} = this.props;

        if (personNotFound && previousProps.didIt.personNotFound !== personNotFound) {
            incrementDidIt(person);
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
