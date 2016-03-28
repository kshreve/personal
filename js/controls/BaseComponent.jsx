import React, { Component } from 'react';

export default class BaseComponent extends Component {
    constructor(props) {
        super(props);

        // Auto-magically bind this to each method call.
        Object.getOwnPropertyNames(Object.getPrototypeOf(this)).forEach((method) => {
            if (typeof this[method] !== 'function') {
                return;
            }
            this[method] = this[method].bind(this);
        });
    }
}
