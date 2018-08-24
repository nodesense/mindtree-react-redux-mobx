//CounterContainer.js

// bridge between React and Redux
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

// react component
import FuncCounter from '../components/FuncCounter';
// redux actions
import * as actions from '../state/actions';

// container shall call mapStateToProps function
// state? state = store.getState()
// when? called when container component created (first)
// when? called with subscribe, after every dispatch
// return props needed for component
export function mapStateToProps(state) {
    console.log("Counter container mapStateToProps")
    return {
        //propName: value from state
        counter: state.counter
    }
}

// called by container
// when? when container component inst created
// dispatch = store.dispatch
export function mapDispatchToProps(dispatch) {
    console.log("Counter container mapDispatchToProps")
    return {
        //propName: function() {}
        increment: function() {
            let action = actions.increment(1)
            dispatch(action)
        },
        // reset: function() {
        //     dispatch(actions.reset())
        // }
        // create and return wrapper function
        // calling wrapper shall dispatch action
        reset: bindActionCreators(actions.reset, dispatch),
        // wrap all functions in actions
        // props.actions.increment/props.actions.reset
        actions: bindActionCreators(actions, dispatch)
    }
}

// creating container

const connectDecorator = connect(mapStateToProps, 
                                mapDispatchToProps);

// Containers are pure component
// this container, shall FuncCounter when?
// only if counter is differnt
// store is passed as context variable
const CounterContainer= connectDecorator(FuncCounter)

export default CounterContainer;

//export default connect(mapStateToProps, mapDispatchToProps) 
//                (FuncCounter)