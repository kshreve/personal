import React from 'react';

import BaseComponent from './../../controls/BaseComponent.jsx';
import Input from './../../controls/Input.jsx';

export default class WhiteLabel extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let { fields: { theme, primary, secondary, accentOne, accentTwo }, handleSubmit, load, values } = this.props;

        return (
            <div>
                <Input type="text" field={theme} label="Name of Theme"/>
                <Input type="text" field={primary} label="Primary Color"/>
                <Input type="text" field={secondary} label="Secondary Color"/>
                <Input type="text" field={accentOne} label="Accent One Color"/>
                <Input type="text" field={accentTwo} label="Accent Two Color"/>
                <button onClick={() => handleSubmit(load(values))}>Submit</button>
            </div>
        );
    }
}
