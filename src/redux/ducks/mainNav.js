import { REHYDRATE } from 'redux-persist/constants';

const TOGGLE_MENU = "TOGGLE_MENU";
const TOGGLE_ITEM = "TOGGLE_ITEM";

const initialState = {
    open:  true,
    items: [
        {
            title: 'About',
            path:  '/about',
            open:  false
        },
        {
            title: 'Blog',
            path:  '/blog',
            open:  false
        },
        {
            title: 'Experiments',
            path:  '/experiment',
            open:  false,
            items: [
                {
                    title: 'crankings',
                    path:  '/crankings',
                    open:  false
                },
                {
                    title: 'I did it!',
                    path:  '/didIt',
                    open:  false
                },
                {
                    title: 'White Labeling',
                    path:  '/whitelabel',
                    open:  false
                },
                {
                    title: 'XKCD - 1335',
                    path:  '/xkcd1335',
                    open:  false
                }
            ]
        }
    ]
};

export default function reducer (state = initialState, action = null) {
    switch (action.type) {
        case REHYDRATE:
            return initialState;
        case TOGGLE_MENU:
            return Object.assign({}, state, {
                open: !state.open
            });
        case TOGGLE_ITEM: {
            let items = state.items.map((item) => {
                if (item === action.test) {
                    return Object.assign({}, item, {
                        open: !item.open
                    });
                }

                return Object.assign({}, item, {
                    open: false
                });
            });

            return Object.assign({}, state, {
                items
            });
        }
        default:
            return state;
    }
}

export function toggleMainMenu () {
    return {
        type: TOGGLE_MENU
    };
}

export function toggleItem (item) {
    return {
        type: TOGGLE_ITEM,
        test: item
    };
}
