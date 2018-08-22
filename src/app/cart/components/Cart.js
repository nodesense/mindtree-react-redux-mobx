// Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [ 
            			{id: 1, name: 'P1', price: 100, qty: 5}
            	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
 
    }
    
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        // BAD
        // this.state.items.push(item)
         // or BAD
         // let items = this.state.items
         // items.push(item) // BAD
         
         // GOOD
         let items = [...this.state.items, item]
         this.setState({
             items
             // items: items sugar
         }, () => {
             //callback, called after render method
             console.log("Cart add item setState callback");
             //Works, BAD,  trigger render again
             //this.recalculate(this.state.items)
         })

         // BAD/wrong, setState is async, refer to old state
         //this.recalculate(this.state.items)

         // Good
         this.recalculate(items)
    }
    
    removeItem = (id) => {
        //TODO
    }

    updateItem = (id, qty) => {
        //TODO
    }

    empty = () => {
        
        this.setState({
            items: []
        })

        this.recalculate([])
         
    }

    //dummy
    refresh = () => {
        this.setState({
            flag: true
        })
    }

    // derived data from state
    recalculate(items) {
        
        let count = 0, 
            amount = 0;

        for (let item of items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        this.setState({
            amount,
            count
        })

    }

    //TODO:
    //componentWillMount
    componentWillMount() {
        this.recalculate(this.state.items)
    }
    
    
    render() {
        console.log("Cart render")
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>


            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>
            

            <CartList  items={this.state.items}  
                       removeItem={this.removeItem}
            />

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}
            />

            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}