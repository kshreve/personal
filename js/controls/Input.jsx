import React, { PropTypes } from 'react';

import BaseComponent from './BaseComponent.jsx';

export default class Input extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let { field, label, type, disabled, maxLength } = this.props;

        return (
            <div {...this.props}>
                <label title={label}>{label}</label>
                <input {...this.props} type={type} {...field} disabled={disabled} maxLength={maxLength}/>
            </div>
        );
    }
}
