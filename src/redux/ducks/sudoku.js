import { REHYDRATE } from 'redux-persist/constants';

const MASSAGE_BOARD = 'MASSAGE_BOARD';

const initialState = {
    initialBoard: [
        1, 2, 3, 4, 5, 6, 7, 8, 9,
        4, 6, 9, 1, 7, 8, 3, 2, 5,
        2, 7, 6, 9, 3, 1, 4, 5, 8,
        3, 8, 4, 5, 9, 7, 2, 6, 1,
        5, 1, 2, 6, 8, 3, 9, 4, 7,
        9, 3, 1, 8, 6, 4, 5, 7, 2,
        7, 5, 8, 3, 4, 2, 1, 9, 6,
        6, 9, 7, 2, 1, 5, 8, 3, 4,
        8, 4, 5, 7, 2, 9, 6, 1, 3
    ],
    board:        []
};

export default function reducer (state = initialState, action = null) {
    switch (action.type) {
        case MASSAGE_BOARD:
            let board = action.board.map((square, i) => {
                return {
                    content: square,
                    row:     Math.floor(i / 9),
                    column:  i % 9,
                    region:  i
                };
            });
            return Object.assign({}, state, {
                board
            });
        default:
            return state;
    }
}

export const massageBoard = (board) => ({
    type: MASSAGE_BOARD,
          board
});

