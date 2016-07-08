const MASSAGE_BOARD = 'MASSAGE_BOARD';
const IS_BOARD_VALID = 'IS_BOARD_VALID';
const IS_SQUARE_VALID = 'IS_SQUARE_VALID';
const EDIT_SQUARE = 'EDIT_SQUARE';
const TOGGLE_EDIT_SQUARE = 'TOGGLE_EDIT_SQUARE';

const initialState = {
    initialBoard: [],
    board:        [],
    valid:        false
};

export default function reducer (state = initialState, action = null) {
    switch (action.type) {
        case MASSAGE_BOARD: {
            let board = action.board.map((square, i) => {
                let row = Math.floor(i / 9),
                    column = i % 9,
                    region = (Math.floor(row / 3) * 3) + Math.floor(column / 3);

                return {
                    content: square,
                    valid:   true,
                    editing: false,
                             row,
                             column,
                             region
                };
            });

            return Object.assign({}, state, {
                initialBoard: action.board,
                              board
            });
        }
        case EDIT_SQUARE: {
            let editedBoard = state.board.map((square) => {
                if (square === action.square) {
                    return Object.assign({}, action.square, { content: action.content });
                }

                return square;
            });

            return Object.assign({}, state, {
                board: editedBoard
            });
        }
        case TOGGLE_EDIT_SQUARE: {
            let board = state.board.map((square) => {
                if (square === action.square) {
                    return Object.assign({}, square, {
                        editing: !square.editing
                    });
                }

                return Object.assign({}, square, {
                    editing: false
                });
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

                    return Object.assign({}, square, { valid: true });
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
    return squares.map(square => square.content).reduce((previous, current) => previous + current, 0) <= 45;
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

export const massageBoard = (board) => ({
    type: MASSAGE_BOARD,
          board
});

export const isBoardValid = () => ({
    type: IS_BOARD_VALID
});

export const isSquareValid = (square) => ({
    type: IS_SQUARE_VALID,
          square
});

export const toggleEditSquare = (square) => ({
    type: TOGGLE_EDIT_SQUARE,
          square
});

export const editSquareContent = (square, content) => ({
    type: EDIT_SQUARE,
          square,
          content
});
