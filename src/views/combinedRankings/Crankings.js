import React from 'react';
import {Link} from 'react-router';

import BaseComponent from './../../controls/BaseComponent';

export default class Crankings extends BaseComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getRecords();
    }

    render() {
        let {crankings: {documents}} = this.props;

        return (
            <div>
                <Link to="/experiment/crankingsData">Create Data</Link>
                <table className="crankings__table">
                    <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Football Rank</th>
                        <th>Basketball Rank</th>
                        <th>Combined Rank</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        documents && documents.map((record, i) => {
                            return (
                                <tr key={i}>
                                    <td>{record.teamName}</td>
                                    <td>{record.footballRank}</td>
                                    <td>{record.basketballRank}</td>
                                    <td>{record.combinedRank}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
