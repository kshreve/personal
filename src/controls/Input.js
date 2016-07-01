import React from 'react';

import BaseComponent from './BaseComponent';

export default class Input extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let {field, label, type} = this.props;

        return (
            <div {...this.props}>
                <label title="">{label ? `${label}:` : ''}</label>
                <input className="form-control" {...this.props} type={type} {...field}/>
            </div>
        );
    }
}
