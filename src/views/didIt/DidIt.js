import React from 'react';

import BaseComponent from './../../controls/BaseComponent';

export default class DidIt extends BaseComponent {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        let { didIt:{ person:{ id } }, setPersonId } = this.props;

        if (!id) {
            setPersonId();
        }
    }

    componentDidUpdate (previousProps) {
        let { didIt: { person, personNotFound }, incrementDidIt } = this.props;

        if (personNotFound && previousProps.didIt.personNotFound !== personNotFound) {
            incrementDidIt(person);
        }
    }

    render () {
        let { didIt: { person, processing }, incrementDidIt } = this.props,
            { times } = person;

        return (
            <div>
                <div>You did it: {times}</div>
                <button className="did-it__button" onClick={() => incrementDidIt(person)} disabled={processing}>I did it</button>
            </div>
        );
    }
}
