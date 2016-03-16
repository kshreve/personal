import React from 'react';

import BaseComponent from './../../controls/BaseComponent.jsx';

export default class BlogDetail extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let {params: {id}} = this.props;
        return (
            <div>
                BlogDetail id:{id}
            </div>
        );
    }
}
