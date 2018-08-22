
import React, {Component} from "react";
import PropTypes from "prop-types";

import {Redirect} from 'react-router-dom';

export default class AuthRoute extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        let Component = this.props.component;
        let auth = this.props.auth;

        return (
           auth? <Component /> : <Redirect to="/login" />
        )
    }
} 


AuthRoute.defaultProps = {
    
}

AuthRoute.propTypes = {
    
}