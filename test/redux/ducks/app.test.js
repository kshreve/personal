import React from 'react';
import {describe, before, it} from 'mocha';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

import reducer, {initialState, GET_APP_REQUEST, GET_APP_SUCCESS, GET_APP_FAIL}  from '../../../js/redux/ducks/app';

describe('app Duck', () => {
    it('app request', () => {
        const stateBefore = Object.assign({}, initialState),
            action = {
                type: GET_APP_REQUEST
            },
            stateAfter = Object.assign({}, initialState);

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });
});
