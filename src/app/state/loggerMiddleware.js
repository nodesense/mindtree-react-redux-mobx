//loggerMiddleware.js
export default function loggerMiddleware(store) { // called once
    return function(nextCallback) { // called once
        return function(action) { // called on every dispatch
                console.log("LOGGER ", action);

                //if (action.type == 'COUNTER.RESET')
                //    return false;

                // forward action to next middleware
                // if no next middleware, it goes reducers
                

                return nextCallback(action)
        }
    }
}