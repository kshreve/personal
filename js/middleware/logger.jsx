/**
 * Logs all actions and states after they are dispatched.
 * see: http://rackt.github.io/redux/docs/advanced/Middleware.html for more details on using middleware
 */
export default store => next => action => {
    // Stop displaying this crap on node
    if (!console.group) {
        return next(action);
    }

    console.groupCollapsed(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result;
};
