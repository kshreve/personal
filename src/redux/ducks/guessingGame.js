import { get } from './../../convenience/functions';
import { GUESSING_GAME } from './../constants/endpoints';

const GUESSING_GAME_REQUEST = 'GUESSING_GAME_REQUEST',
    GUESSING_GAME_SUCCESS = 'GUESSING_GAME_SUCCESS',
    GUESSING_GAME_FAIL = 'GUESSING_GAME_FAIL';

const initialState = {
    situation: null,
    gameId:    null
};

export default function reducer (state = initialState, action = null) {
    switch (action.type) {
        case GUESSING_GAME_SUCCESS:
            return Object.assign({}, state, action.response);
        case GUESSING_GAME_REQUEST:
        case GUESSING_GAME_FAIL:
            return Object.assign({}, initialState);
        default:
            return state;
    }
}

export const getGame = () => get([GUESSING_GAME_REQUEST, GUESSING_GAME_SUCCESS, GUESSING_GAME_FAIL], GUESSING_GAME);
