//counterReducer.js
import * as ActionTypes from './action-types';

const INITIAL_STATE = 0

// action is passed by dispatch (your component)
// state is passed by store
// who call reducer? store calls reducer
// called few times during creation stage, initialize default
// when reducer called, on every dispatch
export default function counterReducer(state = INITIAL_STATE, 
                                        action ) {
    console.log('counter Reducer ', state, action)
    switch(action.type) {
        case ActionTypes.INCREMENT:
            return state + action.payload.value
        
        case ActionTypes.RESET:
            return INITIAL_STATE

        default: 
            return state;
    }
}