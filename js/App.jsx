import React from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookie';
import ReactDOM from 'react-dom';

import BaseComponent from './controls/BaseComponent.jsx';
import Input from './controls/Input.jsx';

export default class App extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let { fields }  = this.props;
        return (
            <div>
                <Input label="HELLO" field={''}/>
                <Input label="HELLO" field={''}/>
                <Input label="HELLO" field={''}/>
                <Input label="HELLO" field={''}/>
                <Input label="HELLO" field={''}/>
            </div>
        );
    }
}
