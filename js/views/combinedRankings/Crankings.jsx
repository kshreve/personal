import React from 'react';

import BaseComponent from './../../controls/BaseComponent.jsx';

export default class Crankings extends BaseComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getRecords();
    }

    render() {
        return (
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
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
