import React from 'react';

import BaseComponent from './../controls/BaseComponent';

export default class NotFound extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                404 Page Not Found
            </div>
        );
    }
}
