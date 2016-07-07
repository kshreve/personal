import {REHYDRATE} from 'redux-persist/constants';

const initialState = {
    board: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
};

export default function reducer (state = initialState, action = null) {
    switch (action.type) {
        case REHYDRATE:
            return initialState;
        default:
            return state;
    }
}
