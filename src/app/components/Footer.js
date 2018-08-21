import React from "react";
import PropTypes from "prop-types";

// functional component/pure functional component
// presentational component
// stateless component
// No state/no this
// create and return virtual dom
export default function Footer(props) { 
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