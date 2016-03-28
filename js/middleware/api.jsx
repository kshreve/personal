import fetch from 'isomorphic-fetch';

export default ({ dispatch, getState }) => {
    return (next) => {
        return (action) => {
            const {
                types,
                fetchURL,
                fetchOptions = {},
                shouldCallAPI = () => true,
                payload = {}
            } = action;

            let state = getState();

            if (!types) {
                return next(action);
            }

            if (!Array.isArray(types) || types.length !== 3 || !types.every(type => typeof type === 'string')) {
                throw new Error('Expected an array of three string types.');
            }

            if (!fetchURL) {
                throw new Error('Expected fetchURL to be set.');
            }

            if (!shouldCallAPI(state)) {
                return;
            }

            const [requestType, successType, failureType] = types;

            dispatch(Object.assign({}, {
                type: requestType,
                      payload
            }));

            return fetch(fetchURL, fetchOptions)
                .then(response => {
                        if (response.ok && response.status === 200) {
                            response.json()
                                    .then((json) => handleSuccess(json, successType, payload, dispatch))
                                    .catch((error) => handleError(error, failureType, payload, dispatch));
                        } else {
                            response.json()
                                    .then((json) => handleError(json, failureType, payload, dispatch))
                                    .catch((error) => handleError(error, failureType, payload, dispatch));
                        }
                    }
                ).catch((error) => handleError(error, failureType, payload, dispatch));
        };
    };
};

const handleError = (error, type, payload, dispatch) => {
    dispatch(Object.assign({}, {
        error: error,
        type:  type,
               payload
    }));
};

const handleSuccess = (json, type, payload, dispatch) => {
    dispatch(Object.assign({}, {
        response: json,
        type:     type,
                  payload
    }));
};
