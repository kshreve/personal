let appendQueryParameters = (url, queryParameters = []) => {
    if (queryParameters) {
        queryParameters.forEach((option, i) => {
            url += ((i === 0) ? '?' : '&') + `${option.key}=${option.value}`;
        });
    }

    return url;
};

export const get = (types, endpoint, queryParameters) => {
    let url = appendQueryParameters(endpoint, queryParameters);

    return {
        types:         types,
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

export const post = (data, types, endpoint, queryParameters) => {
    let url = appendQueryParameters(endpoint, queryParameters);

    return {
        types:         types,
        shouldCallAPI: () => true,
        fetchURL:      url,
        fetchOptions:  {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept':       'application/json'
            },
            body:    JSON.stringify(data)
        },
        payload:       data
    };
};

export const genericDelete = (data, types, endpoint, queryParameters) => {
    let url = appendQueryParameters(endpoint, queryParameters);

    return {
        types:         types,
        shouldCallAPI: () => true,
        fetchURL:      url,
        fetchOptions:  {
            method: 'DELETE'
        },
        payload:       data
    };
};
