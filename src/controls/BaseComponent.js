import React from 'react';

export default class BaseComponent extends React.Component {
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
