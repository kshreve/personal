import { REHYDRATE } from 'redux-persist/constants';

import { post } from './../../convenience/functions';
import { MONGO_LAB }from './../constants/endpoints';

export const POST_DID_IT_REQUEST = 'POST_DID_IT_REQUEST';
export const POST_DID_IT_SUCCESS = 'POST_DID_IT_SUCCESS';
export const POST_DID_IT_FAIL = 'POST_DID_IT_FAIL';

export const COLLECTION_NAME = 'DidIt';

export const initialState = {
    times:          0,
    processing:     false,
    postSuccess:    false,
    personNotFound: false,
    error:          false
};

export default (state = initialState, action = null) => {
    switch (action.type) {
        case REHYDRATE: {
            let incoming = action.payload.didIt;
            if (incoming) {
                return Object.assign({}, state, incoming);
            }

            return state;
        }
        case POST_DID_IT_SUCCESS:
            return Object.assign({}, state, {
                person:      action.response,
                processing:  initialState.processing,
                postSuccess: true,
                error:       initialState.error,
                times:       state.times + 1
            });
        case POST_DID_IT_REQUEST:
            return Object.assign({}, state, {
                postSuccess: initialState.postSuccess,
                processing:  !initialState.processing,
                error:       false
            });
        case POST_DID_IT_FAIL:
            return Object.assign({}, state, {
                postSuccess: initialState.postSuccess,
                processing:  initialState.processing,
                error:       true
            });
        default:
            return state;
    }
};

export const postDidIt = (id, times) => {
    let data = {
        _id: id,
             times
    };

    post(data, [POST_DID_IT_REQUEST, POST_DID_IT_SUCCESS, POST_DID_IT_FAIL], MONGO_LAB(COLLECTION_NAME));
};
