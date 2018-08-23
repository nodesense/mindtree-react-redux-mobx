//store.js
import {createStore, 
        combineReducers,
        applyMiddleware
    }
        from 'redux';

import counterReducer from './state/counterReducer';

import loggerMiddleware from './state/loggerMiddleware';
import storageMiddleware from "./state/storageMiddleware";

const rootReducer = combineReducers({
    // stateName: reducer function
    counter: counterReducer, 
    // more reducers goes here
})

// initialize with defaults
// const store = createStore(rootReducer)

const counter = JSON.parse(localStorage.getItem('counter')) || 100;


// seed values
const store = createStore(rootReducer, 
                                { counter: counter },
                                applyMiddleware(loggerMiddleware, 
                                                storageMiddleware)
                        )

export default store;