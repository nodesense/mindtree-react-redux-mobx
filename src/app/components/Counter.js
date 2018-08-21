//Counter.js
// state, state apis, event, 
// this context/bind (es5), =>,  es.next 

import React from 'react';

export default class Counter extends React.Component {
    constructor() {
        super(); // MUST, 

        //keyword
        // state is owned by each component instance
        // mutable*
        this.state = {
            counter: 0,
            show: true,
            flag: true
        }
    }

    increment() {
        console.log('increment called')
        //BAD, mutating state directly is not good
        this.state.counter++;

        //keyword
        //BAD, explained later
        // trigger react to call render
        this.forceUpdate()
    }

    //ES.NEXT
    //create function only once per instance
    // solve this context
    decrement = () => {
      //  console.trace()
        console.log('decrement called')

        //GOOD, setState
        // keyword
        // async
        // batch update
        // merge state => nextState
        // request react to call render
        console.log("before ", this.state.counter)
        this.setState({
            counter: this.state.counter - 1
        })
        // does trigger another render
        // batch update
        this.setState({
            flag: !this.state.flag
        })

        console.log("after ", this.state.counter)
    }

    //keyword
    // create virtual dom
    render() {
        console.log('Counter render')

        return (
            <div>
                <h2>Counter7</h2>
                <span>{this.state.counter}</span>

                <br />

                {/* JSX Comment */}
                {/* passing func ref to react, react callback 
                 increment method on click */}

                 {/* BAD, note: () => created on every render */}
                <button onClick={() => this.increment()}>
                    +1
                </button>

                <div onClick={this.decrement}>
                    <button onClick={this.decrement} >
                        -1
                    </button>
                </div>

                <button >
                    +2
                </button>
                
            </div>
        )

    }
}