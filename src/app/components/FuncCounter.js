// FuncCounter.js
import React, {Component} from "react";
import PropTypes from "prop-types";
 
export default  function FuncCounter(props) {
        console.log("FuncCounter render")

        return (
            <div> 
            <h2>Redux Counter</h2>
            <span>{props.counter}</span>

            <button onClick={props.increment}>
                +1
            </button>

            <button onClick={props.reset}>
                Reset
            </button>
            
            </div>
        )
    }



FuncCounter.defaultProps = {
    
}

FuncCounter.propTypes = {
    
}