
import React from "react";
import PropTypes from "prop-types";


import {NavLink} from 'react-router-dom';
 
 
export default function Header(props) { 
        return (
            <div> 
            <h2>React App</h2>


                <NavLink className="button"
                         activeClassName="success"
                         exact
                         to="/">
                        Counter 
                </NavLink>

                <NavLink className="button"
                         activeClassName="success"
                         to="/cart">
                        Cart  [CartTotal]
                </NavLink>


                <NavLink className="button"
                         activeClassName="success"
                         to="/about">
                        About 
                </NavLink>

                <NavLink className="button"
                         activeClassName="success"
                         to="/login">
                        Login 
                </NavLink>
  
                <hr />
            </div>
        )
} 


Header.defaultProps = {
    
}

Header.propTypes = {
    
}