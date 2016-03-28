import React from 'react';

import BaseComponent from './BaseComponent.jsx';

export default class Input extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let { field, label, type, helpText, value } = this.props;

        return (
            <div {...this.props}>
                <label title="">{label}:</label>
                <input {...this.props} type={type} value={value || ''} {...field}/>
                <small>{helpText}</small>
            </div>
        );
    }
}
