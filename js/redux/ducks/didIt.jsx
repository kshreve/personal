import { post, get } from './../../convenience/functions.jsx';
import { MONGO_LAB }from '../../constants/endpoints.jsx';

const POST_DID_IT_REQUEST = 'POST_DID_IT_REQUEST';
const POST_DID_IT_SUCCESS = 'POST_DID_IT_SUCCESS';
const POST_DID_IT_FAIL = 'POST_DID_IT_FAIL';

const GET_DID_IT_REQUEST = 'GET_DID_IT_REQUEST';
const GET_DID_IT_SUCCESS = 'GET_DID_IT_SUCCESS';
const GET_DID_IT_FAIL = 'GET_DID_IT_FAIL';

const SET_PERSON = 'SET_PERSON';
const COLLECTION_NAME = 'DidIt';

const initialState = {
    person:      '',
    times:       0,
    postSuccess: false
};

export default (state = initialState, action = null) => {
    switch (action.type) {
        case SET_PERSON:
            return Object.assign({}, state, {
                person: action.person
            });
        case POST_DID_IT_SUCCESS:
            return Object.assign({}, state, {
                postSuccess: true
            });
        case POST_DID_IT_REQUEST:
        case POST_DID_IT_FAIL:
            return Object.assign({}, state, {
                postSuccess: initialState.postSuccess
            });
        default:
            return state;
    }
};

export const setPerson = (person) => ({
    type: SET_PERSON,
          person
});

export const getDidIt = () => (get([GET_DID_IT_REQUEST, GET_DID_IT_SUCCESS, GET_DID_IT_FAIL], MONGO_LAB(COLLECTION_NAME)));
export const postDidIt = () => (post({ thing: 1 }, [POST_DID_IT_REQUEST, POST_DID_IT_SUCCESS, POST_DID_IT_FAIL], MONGO_LAB(COLLECTION_NAME)));
