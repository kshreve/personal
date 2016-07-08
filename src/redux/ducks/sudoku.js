const MASSAGE_BOARD = 'MASSAGE_BOARD';
const IS_BOARD_VALID = 'IS_BOARD_VALID';
const IS_SQUARE_VALID = 'IS_SQUARE_VALID';

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
        case MASSAGE_BOARD: {
            let board = state.initialBoard.map((square, i) => {
                let row = Math.floor(i / 9),
                    column = i % 9,
                    region = (Math.floor(row / 3) * 3) + Math.floor(column / 3);

                return {
                    content: square,
                    valid:   true,
                             row,
                             column,
                             region
                };
            });
            
            return Object.assign({}, state, {
                board
            });
        }
        case IS_SQUARE_VALID: {
            let newBoard = state.board.map((square) => {
                if (square === action.square) {
                    return Object.assign({}, square, {
                        valid: checkValidity(action.square, state.board)
                    });
                }
                return square;
            });

            return Object.assign({}, state, {
                board: newBoard
            });
        }
        case IS_BOARD_VALID: {
            let invalidSquares = state.board.map((square) => !checkValidity(square, state.board) && square).filter((valid) => valid),
                newBoardWithInvalids = state.board.map((square) => {
                    if (invalidSquares.includes(square)) {
                        return Object.assign({}, square, { valid: false });
                    }
                    return square;
                });

            return Object.assign({}, state, {
                valid: invalidSquares.length === 0,
                board: newBoardWithInvalids
            });
        }
        default:
            return state;
    }
}

const checkSum = (squares) => {
    return squares.map(square => square.content).reduce((previous, current) => previous + current, 0) === 45;
};

const checkRegion = (square, board) => {
    let region = board.filter((item) => item.region === square.region);
    return checkSum(region) && region.filter((item) => item.content === square.content).length === 1;
};

const checkColumn = (square, board) => {
    let column = board.filter((item) => item.column === square.column);
    return checkSum(column) && column.filter((item) => item.content === square.content).length === 1;
};

const checkRow = (square, board) => {
    let row = board.filter((item) => item.row === square.row);
    return checkSum(row) && row.filter((item) => item.content === square.content).length === 1;
};

const checkValidity = (square, board) => {
    return checkRow(square, board) && checkColumn(square, board) && checkRegion(square, board);
};

export const massageBoard = () => ({
    type: MASSAGE_BOARD
});

export const isBoardValid = () => ({
    type: IS_BOARD_VALID
});

export const isSquareValid = (square) => ({
    type: IS_SQUARE_VALID,
          square
});
