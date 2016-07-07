const MASSAGE_BOARD = 'MASSAGE_BOARD';

const initialState = {
    initialBoard: [
        1, 9, 2, 4, 5, 6, 3, 7, 8,
        7, 3, 4, 9, 2, 8, 1, 5, 6,
        6, 5, 8, 7, 3, 1, 9, 2, 4,
        2, 4, 7, 6, 9, 5, 8, 3, 1,
        3, 8, 6, 1, 4, 7, 5, 9, 2,
        9, 1, 5, 2, 8, 3, 4, 6, 7,
        4, 2, 1, 3, 6, 9, 7, 8, 5,
        5, 6, 9, 8, 7, 4, 2, 1, 3,
        8, 7, 3, 5, 1, 2, 6, 4, 9
    ],
    board:        [],
    valid:        false
};

export default function reducer (state = initialState, action = null) {
    switch (action.type) {
        case MASSAGE_BOARD:
            let board = action.board.map((square, i) => {
                let row = Math.floor(i / 9),
                    column = i % 9,
                    region = (Math.floor(row / 3) * 3) + Math.floor(column / 3);

                return {
                    content: square,
                             row,
                             column,
                    region:  region
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

