import { get, post } from './../../genericApiFunctions.jsx';
import { MONGO_LAB } from './../constants/endpoints.jsx';

const GET_MONGO_LAB_COLLECTIONS_REQUEST = "GET_MONGO_LAB_COLLECTIONS_REQUEST";
const GET_MONGO_LAB_COLLECTIONS_SUCCESS = "GET_MONGO_LAB_COLLECTIONS_SUCCESS";
const GET_MONGO_LAB_COLLECTIONS_FAIL = "GET_MONGO_LAB_COLLECTIONS_FAIL";

const POST_MONGO_LAB_COLLECTIONS_REQUEST = "POST_MONGO_LAB_COLLECTIONS_REQUEST";
const POST_MONGO_LAB_COLLECTIONS_SUCCESS = "POST_MONGO_LAB_COLLECTIONS_SUCCESS";
const POST_MONGO_LAB_COLLECTIONS_FAIL = "POST_MONGO_LAB_COLLECTIONS_FAIL";

const initialState = {
    collections: []
};

export default (state = initialState, action = null) => {
    switch (action.type) {
        case GET_MONGO_LAB_COLLECTIONS_SUCCESS:
            return Object.assign({}, state, {
                collections: action.response
            });
        case GET_MONGO_LAB_COLLECTIONS_REQUEST:
        case GET_MONGO_LAB_COLLECTIONS_FAIL:
            return Object.assign({}, state, {
                collections: initialState.collections
            });
        default:
            return state;
    }
};

export const getRecords = () => (get([GET_MONGO_LAB_COLLECTIONS_REQUEST, GET_MONGO_LAB_COLLECTIONS_SUCCESS, GET_MONGO_LAB_COLLECTIONS_FAIL], MONGO_LAB));
export const postDocuments = (data) => (post(data, [POST_MONGO_LAB_COLLECTIONS_REQUEST, POST_MONGO_LAB_COLLECTIONS_SUCCESS, POST_MONGO_LAB_COLLECTIONS_FAIL], MONGO_LAB));
