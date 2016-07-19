import React from 'react';

import BaseComponent from './../../controls/BaseComponent';
import Input from './../../controls/Input';

export default class WhiteLabel extends BaseComponent {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(previousProps) {
        if (previousProps.theme.name != this.props.theme.name) {
            this.props.addAlert({ text: 'Successfully Created Theme!', type: 'success' });
            this.props.initializeForm({});
        }
    }

    render() {
        let { fields: { theme, primary, secondary, accentOne, accentTwo }, handleSubmit, submitting, createCustomTheme, clearTheme } = this.props;

        return (
            <form onSubmit={handleSubmit(createCustomTheme)}>
                <Input type="text" field={theme} label="Name of Theme"/>
                <Input type="text" field={primary} label="Primary Color"/>
                <Input type="text" field={secondary} label="Secondary Color"/>
                <Input type="text" field={accentOne} label="Accent One Color"/>
                <Input type="text" field={accentTwo} label="Accent Two Color"/>
                <button type="submit" className="button-primary" disabled={submitting}>Submit</button>
                <button type="button" disabled={submitting} onClick={clearTheme}>Clear Theme</button>
            </form>
        );
    }
}
