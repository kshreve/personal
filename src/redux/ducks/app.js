export const GET_APP_REQUEST = "GET_APP_REQUEST";
export const GET_APP_SUCCESS = "GET_APP_SUCCESS";
export const GET_APP_FAIL = "GET_APP_FAIL";

export const initialState = {
    isError:    false,
    isFetching: false
};

export default (state = initialState, action = null) => {
    switch (action.type) {
        case GET_APP_REQUEST:
        case GET_APP_SUCCESS:
        case GET_APP_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                isError:    false
            });
        default:
            return state;
    }
};

export const getApp = (url) => {
    return {
        types:         [GET_APP_REQUEST, GET_APP_SUCCESS, GET_APP_FAIL],
        shouldCallAPI: () => true,
        fetchURL:      url,
        fetchOptions:  {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept':       'application/json'
            }
        }
    };
};

export const load = (data) => ({type: GET_APP_SUCCESS, data});
