import { get, post, parseAndAddStrings } from './../../convenience/functions.jsx';
import { MONGO_LAB } from '../../constants/endpoints.jsx';

const GET_MONGO_LAB_DOCUMENTS_REQUEST = "GET_MONGO_LAB_DOCUMENTS_REQUEST";
const GET_MONGO_LAB_DOCUMENTS_SUCCESS = "GET_MONGO_LAB_DOCUMENTS_SUCCESS";
const GET_MONGO_LAB_DOCUMENTS_FAIL = "GET_MONGO_LAB_DOCUMENTS_FAIL";

const POST_MONGO_LAB_DOCUMENTS_REQUEST = "POST_MONGO_LAB_DOCUMENTS_REQUEST";
const POST_MONGO_LAB_DOCUMENTS_SUCCESS = "POST_MONGO_LAB_DOCUMENTS_SUCCESS";
const POST_MONGO_LAB_DOCUMENTS_FAIL = "POST_MONGO_LAB_DOCUMENTS_FAIL";

const COLLECTION_NAME = 'Rankings';

const initialState = {
    documents:   [],
    postSuccess: false
};

export default (state = initialState, action = null) => {
    switch (action.type) {
        case GET_MONGO_LAB_DOCUMENTS_SUCCESS:
            let documents = action.response.map((document) => Object.assign({}, document, {
                combinedRank: parseAndAddStrings(document.footballRank, document.basketballRank)
            }));

            return Object.assign({}, state, {
                documents: documents.sort((a, b) => a.combinedRank - b.combinedRank)
            });
        case GET_MONGO_LAB_DOCUMENTS_REQUEST:
        case GET_MONGO_LAB_DOCUMENTS_FAIL:
            return Object.assign({}, state, {
                documents: initialState.documents
            });
        case POST_MONGO_LAB_DOCUMENTS_REQUEST:
            return Object.assign({}, state, {
                postSuccess: initialState.postSuccess
            });
        case POST_MONGO_LAB_DOCUMENTS_SUCCESS:
            return Object.assign({}, state, {
                    documents:   [].concat(...state.documents).concat(Object.assign({}, action.payload, {
                        combinedRank: parseAndAddStrings(action.payload.footballRank, action.payload.basketballRank)
                    })),
                    postSuccess: !initialState.postSuccess
                }
            );
        case POST_MONGO_LAB_DOCUMENTS_FAIL:
            return Object.assign({}, state, {
                postSuccess: initialState.postSuccess,
                error:       true
            });
        default:
            return state;
    }
};

export const getRecords = () => (get([GET_MONGO_LAB_DOCUMENTS_REQUEST, GET_MONGO_LAB_DOCUMENTS_SUCCESS, GET_MONGO_LAB_DOCUMENTS_FAIL], MONGO_LAB(COLLECTION_NAME)));
export const postDocuments = (data) => (post(data, [POST_MONGO_LAB_DOCUMENTS_REQUEST, POST_MONGO_LAB_DOCUMENTS_SUCCESS, POST_MONGO_LAB_DOCUMENTS_FAIL], MONGO_LAB(COLLECTION_NAME)));
