import React from 'react';
import { Link } from 'react-router';

import BaseComponent from './../../controls/BaseComponent.jsx';

export default class Crankings extends BaseComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getRecords();
    }

    render() {
        let { crankings: { documents } } = this.props;

        return (
            <div>
                <Link to="/crankingsData">Create Data</Link>
                <table>
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
                            documents && documents.map((record) => {
                                return (
                                    <tr>
                                        <td>{record.teamName}</td>
                                        <td>{record.footballRank}</td>
                                        <td>{record.basketballRank}</td>
                                        <td>{parseInt(record.footballRank, 10) + parseInt(record.basketballRank, 10)}</td>
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
