
function createStore(reducers, initialState = {}){
    let state = initialState;
    let listeners = [];
    
    function getState(){
        return state;
    }

    function subscribe(listener){
        listeners.push(listener);
    }

    function dispatch(action) {
        state = reducers(state, action);
        for ( let listener of listeners){
            listener(this);
        }
    }

    return {
        getState,
        subscribe,
        dispatch
    };
}
