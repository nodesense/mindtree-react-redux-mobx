import React from "react";
import PropTypes from "prop-types";

import {withRouter} from 'react-router-dom';

import CounterContainer from "../containers/CounterContainer";

// functional component/pure functional component
// presentational component
// stateless component
// No state/no this
// create and return virtual dom
function Footer(props) { 
        console.log('Footer render', props)
        // props should be read only/immutable
        // Error
        //props.year = 2020
        //props.address = {}
        //BAD, changing props is bad
        //props.address.city = 'Chennai'

        return (
            <div> 
                <hr />
                <p>Copyrights @{props.year}, {props.company}</p>
                <p>City: {props.address.city}</p>
                {/* <p>Build {VERSION}</p> */}

                <button onClick={ () => props.history.push("/login")}>
                    Login
                </button>

                <CounterContainer />
            </div>
        )
} 

//keyword
Footer.defaultProps = {
    company: 'MindTree'
}

//keyword, optional
//GOOD, RECOMMENDED
Footer.propTypes = {
    company: PropTypes.string, // optional
    year: PropTypes.number.isRequired, //mandatory
    //address: PropTypes.object
    // custom data structure
    address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        pincode: PropTypes.pincode // optional
    }).isRequired
}

// return a wrapper component
// Higher order component

//const FooterContainer = withRouter(Footer)
//export default FooterContainer;
//or 
export default withRouter(Footer);