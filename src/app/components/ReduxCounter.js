// ReduxCounter.js
import React, {Component} from "react";
import PropTypes from "prop-types";

import store from "../store";
import * as actions from "../state/actions";

// Learning Redux API usage

export default class ReduxCounter extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        // subscribe callback called after every dispatch
        // even if no state change
        // every subscribe return unique unsubscribe function
        this.unscribeFn = store.subscribe ( () => {
            console.log("Redux Counter Subscribe ");
            this.forceUpdate();
        })
    }

    componentWillUnmount() {
        // unsusbcribe from redux
        this.unscribeFn()
    }

    increment = () => {
        console.log("***NOW ", new Date().getTime())
        const action = actions.increment(1);
        // call reducer, update state, call all subscribers
        console.log("DISPATCHING ...")
        store.dispatch(action) // Sync
        // after calling reducer, update state, call all subscriber
        console.log("GET STATE ", store.getState())

        for (let i = 0; i < 100; i++) {
            const tempAction = actions.increment(1);
            store.dispatch(tempAction) // Sync
        }

        console.log("***After ", new Date().getTime())
    }
    
    reset = () => {
        //TODO
        const action = actions.reset()
        store.dispatch(action)
    }

    render() {
        const state = store.getState()
        console.log("ReduxCounter render")

        return (
            <div> 
            <h2>Redux Counter</h2>
            <span>{state.counter}</span>

            <button onClick={this.increment}>
                +1
            </button>

            <button onClick={this.reset}>
                Reset
            </button>
            
            </div>
        )
    }
} 


ReduxCounter.defaultProps = {
    
}

ReduxCounter.propTypes = {
    
}