//store.js
import {createStore, combineReducers}
        from 'redux';

import counterReducer from './state/counterReducer';

const rootReducer = combineReducers({
    // stateName: reducer function
    counter: counterReducer, 
    // more reducers goes here
})

// initialize with defaults
// const store = createStore(rootReducer)

// seed values
const store = createStore(rootReducer, { counter: 100 })

export default store;