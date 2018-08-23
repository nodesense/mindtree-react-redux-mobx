//storageMiddleware.js
const storageMiddleware = store => next => action => {

    // forward
    let result = next(action)
    // after calling reducers, store is updated
    if (action.type.indexOf("COUNTER.") >= 0) {
        let counter = store.getState().counter;
        window.localStorage.setItem("counter", JSON.stringify(counter))
    }

    return result;
}

export default storageMiddleware;