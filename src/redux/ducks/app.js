export const SET_PERSON_ID = 'SET_PERSON_ID';

import { randomGuid } from './../../convenience/functions';

export const initialState = {
    id:         '',
    isError:    false,
    isFetching: false
};

export default (state = initialState, action = null) => {
    switch (action.type) {
        case SET_PERSON_ID:
            return Object.assign({}, state, {
                id: randomGuid()
            });
        default:
            return state;
    }
};

export const setPersonId = () => ({
    type: SET_PERSON_ID
});
