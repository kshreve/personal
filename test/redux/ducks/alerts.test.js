import React from 'react';
import {describe, before, it} from 'mocha';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

import reducer, {initialState, ADD_ALERT, REMOVE_ALERT}  from '../../../js/redux/ducks/alerts.jsx';

describe('alerts Duck', () => {
    it('Add Alert', () => {
        const alert = {text: 'text', type: 'type'},
            stateBefore = Object.assign({}, initialState),
            action = {
                type: ADD_ALERT,
                      alert
            },
            stateAfter = Object.assign([], initialState, [
                alert
            ]);

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });

    it('Remove Alert at position', () => {
        const alerts = [
                {text: 'text0', type: 'type0'},
                {text: 'text1', type: 'type1'},
                {text: 'text2', type: 'type2'}
            ],
            stateBefore = Object.assign([], initialState, alerts),
            action = {
                type:     REMOVE_ALERT,
                position: 1
            },
            stateAfter = Object.assign([], initialState, [
                {text: 'text0', type: 'type0'},
                {text: 'text2', type: 'type2'}
            ]);

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });
});
