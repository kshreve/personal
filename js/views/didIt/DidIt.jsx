import React from 'react';

import BaseComponent from './../../controls/BaseComponent.jsx';
import {DID_IT} from './../../constants/strings.jsx';
import {randomGuid} from './../../convenience/functions.jsx';

export default class DidIt extends BaseComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let {getDidIt, setPersonId} = this.props,
            personId = localStorage.getItem(DID_IT);

        if (!personId) {
            personId = randomGuid();
            localStorage.setItem(DID_IT, personId);
        } else {
            getDidIt(personId);
        }

        setPersonId(personId);
    }

    componentDidUpdate(previousProps, previousState) {
        let {didIt: {person, personNotFound}, incrementDidIt} = this.props;

        if (personNotFound && previousProps.didIt.personNotFound !== personNotFound) {
            incrementDidIt(person);
        }
    }

    didIt() {
        this.props.incrementDidIt(this.props.didIt.person);
    }

    render() {
        let {didIt: {person, processing}} = this.props,
            {times} = person;

        return (
            <div>
                <div>You did it: {times}</div>
                <button className="did-it__button" onClick={this.didIt} disabled={processing}>I did it</button>
            </div>
        );
    }
}
