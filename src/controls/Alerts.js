import React from 'react';

import BaseComponent from './BaseComponent';

export default class Alerts extends BaseComponent {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(previousProps) {
        let {alerts, removeAlert} = this.props;

        if (alerts.length > 0 && previousProps.alerts.length < alerts.length) {
            setTimeout(() => {
                removeAlert(0);
            }, 5000);
        }
    }

    renderAlert(alert) {
        return (
            <div className={`alerts-container alerts-container--${alert.type}`}>
                <div className="container">
                    <span className={`alert-item`}>{alert.text}</span>
                </div>
            </div>
        );
    }

    render() {
        let {alerts} = this.props;

        return (
            <div>
                {alerts.length > 0 && this.renderAlert(alerts[0])}
            </div>
        );
    }
}
