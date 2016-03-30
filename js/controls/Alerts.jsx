import React from 'react';

import BaseComponent from './BaseComponent.jsx';

export default class Alerts extends BaseComponent {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(previousProps, previousState) {
        let { alerts, removeAlert } = this.props;

        if (alerts.length > 0 && previousProps.alerts.length < alerts.length) {
            setTimeout(() => {
                removeAlert(0);
            }, 5000);
        }
    }

    render() {
        let { alerts } = this.props;

        return (
            <div className="alerts-container">
                {
                    alerts.length > 0 && <span className="alert-item">{alerts[0]}</span>
                }
            </div>
        );
    }
}
