import { post } from './../../genericApiFunctions.jsx';
import { CUSTOM_THEME } from './../constants/endpoints.jsx';

const CREATE_CUSTOM_THEME_REQUEST = "CREATE_CUSTOM_THEME_REQUEST";
const CREATE_CUSTOM_THEME_SUCCESS = "CREATE_CUSTOM_THEME_SUCCESS";
const CREATE_CUSTOM_THEME_FAIL = "CREATE_CUSTOM_THEME_FAIL";

const initialState = {
    name: ''
};

export default (state = initialState, action = null) => {
    switch (action.type) {
        case CREATE_CUSTOM_THEME_SUCCESS:
            return Object.assign({}, state, {
                name: action.payload.theme
            });
        case CREATE_CUSTOM_THEME_REQUEST:
        case CREATE_CUSTOM_THEME_FAIL:
            return Object.assign({}, state, {
                name: initialState.name
            });
        default:
            return state;
    }
};

//post = (data, types, endpoint, queryParameters) => {
export const createCustomTheme = (data) => (post(data, [CREATE_CUSTOM_THEME_REQUEST, CREATE_CUSTOM_THEME_SUCCESS, CREATE_CUSTOM_THEME_FAIL], CUSTOM_THEME));
