//store.js
import {createStore, 
        combineReducers,
        applyMiddleware
    }
        from 'redux';

import thunk from 'redux-thunk';

import counterReducer from './state/counterReducer';
import cartReducer from './redux-cart/state/cartReducer';
import productReducer from './redux-cart/state/productReducer';

import loggerMiddleware from './state/loggerMiddleware';
import storageMiddleware from "./state/storageMiddleware";

const rootReducer = combineReducers({
    // stateName: reducer function
    counter: counterReducer, 
    items: cartReducer,
    product: productReducer
    // more reducers goes here
})

// initialize with defaults
// const store = createStore(rootReducer)

const counter = JSON.parse(localStorage.getItem('counter')) || 100;


// seed values
const store = createStore(rootReducer, 
                                { counter: counter },
                                applyMiddleware(loggerMiddleware,
                                                thunk,
                                                storageMiddleware 
                                                )
                        )

export default store;