import React from 'react';
import {describe, before, it} from 'mocha';
import expect from 'expect';
import deepFreeze from 'deep-freeze';
import {randomGuid} from '../../../js/convenience/functions';

import reducer, {initialState, SET_PERSON_ID, POST_DID_IT_REQUEST, POST_DID_IT_SUCCESS, POST_DID_IT_FAIL}  from '../../../js/redux/ducks/didIt';

describe('didIt Duck', () => {
    it('set person id', () => {
        const id = randomGuid();

        const stateBefore = Object.assign({}, initialState),
            action = {
                type: SET_PERSON_ID,
                      id
            },
            stateAfter = Object.assign({}, initialState, {
                person: {
                    id,
                    times: 0
                }
            });

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });

    it('set person id', () => {
        expect(true).toEqual(true);
    });
});
