import React from 'react';

import BaseComponent from './../../controls/BaseComponent.jsx';
import Input from './../../controls/Input.jsx';

export default class CrankingsDataImport extends BaseComponent {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(previousProps, previousState) {
        let { postSuccess } = this.props;

        if (previousProps.postSuccess != postSuccess && postSuccess) {
            this.props.addAlert({ text: 'Data added Successfully!', type: 'success' });
            this.props.initializeForm({});
        }
    }

    render() {
        let { fields: { teamName, footballRank, basketballRank }, handleSubmit, submitting, postDocuments } = this.props;

        return (
            <form onSubmit={handleSubmit(postDocuments)}>
                <Input type="text" field={teamName} label="Team Name"/>
                <Input type="text" field={footballRank} label="Football Rank"/>
                <Input type="text" field={basketballRank} label="Basketball Rank"/>
                <button type="submit" disabled={submitting}>Submit</button>
            </form>
        );
    }
}
