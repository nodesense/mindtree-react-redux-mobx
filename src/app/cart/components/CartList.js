// CartList.js

import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 //TODO: PureComponent
 // PureComponent already implement shouldComponentUpdate
 // compare next props and state with current props and state

export default class CartList extends PureComponent {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate
    
    render() {
        console.log("CartList Render");

        let {items} = this.props;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }

                    {
                        items.map(item => (
                            <CartItem item={item} 
                                      key={item.id}
                            />
                        ))
                    }
                </tbody>
            </table>
            </div>
        )
    }
} 

CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}