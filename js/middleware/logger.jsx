export default (store) => (next) => (action) => {
    // Stop displaying this crap on node
    if(!console.group) {
        return next(action);
    }

    console.groupCollapsed(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result;
};
