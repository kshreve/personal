import React from 'react';

import BaseComponent from './../../controls/BaseComponent';

export default class BlogPost extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let {params: {id}} = this.props;
        return (
            <div>
                BlogPost id:{id}
            </div>
        );
    }
}
