import { get, post } from './../../genericApiFunctions.jsx';
import { MONGO_LAB } from './../constants/endpoints.jsx';

const GET_MONGO_LAB_DOCUMENTS_REQUEST = "GET_MONGO_LAB_DOCUMENTS_REQUEST";
const GET_MONGO_LAB_DOCUMENTS_SUCCESS = "GET_MONGO_LAB_DOCUMENTS_SUCCESS";
const GET_MONGO_LAB_DOCUMENTS_FAIL = "GET_MONGO_LAB_DOCUMENTS_FAIL";

const POST_MONGO_LAB_DOCUMENTS_REQUEST = "POST_MONGO_LAB_DOCUMENTS_REQUEST";
const POST_MONGO_LAB_DOCUMENTS_SUCCESS = "POST_MONGO_LAB_DOCUMENTS_SUCCESS";
const POST_MONGO_LAB_DOCUMENTS_FAIL = "POST_MONGO_LAB_DOCUMENTS_FAIL";

const initialState = {
    documents: []
};

export default (state = initialState, action = null) => {
    switch (action.type) {
        case GET_MONGO_LAB_DOCUMENTS_SUCCESS:
            return Object.assign({}, state, {
                documents: action.response
            });
        case GET_MONGO_LAB_DOCUMENTS_REQUEST:
        case GET_MONGO_LAB_DOCUMENTS_FAIL:
            return Object.assign({}, state, {
                documents: initialState.documents
            });
        default:
            return state;
    }
};

export const getRecords = () => (get([GET_MONGO_LAB_DOCUMENTS_REQUEST, GET_MONGO_LAB_DOCUMENTS_SUCCESS, GET_MONGO_LAB_DOCUMENTS_FAIL], MONGO_LAB));
export const postDocuments = (data) => (post(data, [POST_MONGO_LAB_DOCUMENTS_REQUEST, POST_MONGO_LAB_DOCUMENTS_SUCCESS, POST_MONGO_LAB_DOCUMENTS_FAIL], MONGO_LAB));
