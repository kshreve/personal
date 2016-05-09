export const ADD_ALERT = 'ADD_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

const initialState = [];

export default (state = initialState, action = null) => {
    switch (action.type) {
        case ADD_ALERT:
            return [].concat(...state).concat(action.alert);
        case REMOVE_ALERT:
            return [
                ...state.slice(0, action.position),
                ...state.slice(action.position + 1)
            ];
        default:
            return state;
    }
};

export const addAlert = (alert) => ({
    type: ADD_ALERT,
          alert
});

export const removeAlert = (position) => ({
    type: REMOVE_ALERT,
          position
});
