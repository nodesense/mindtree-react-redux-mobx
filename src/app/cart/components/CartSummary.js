// CartSummary.js
import React, {Component} from "react";
import PropTypes from "prop-types";

//TODO: PropTypes

// TODO: PureComponent
export default class CartSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            discount: 0,
            grandTotal: 0
        }
    }
 
    //TODO: componentWillMount
    //TODO: componentWillReceiveProps, recalculate 
 
    //TODO: shouldComponentUpdate

    componentWillMount() {
        this.recalculate(this.props)
    }

    // called whenever parent render called on update cycle
    componentWillReceiveProps(nextProps) {
        console.log('CartSummary receive props');
        console.log("current props", this.props)
        console.log("next props", nextProps)

        if (nextProps.amount != this.props.amount || 
            nextProps.count != this.props.count) {
                this.recalculate(nextProps)
            }
    }

    // nextState is merge of all batch updates
    // called whenever parent render called on update cycle
    // called whenever this.setState on update cycle
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Cart Summary should update");
        console.log("current state", this.state)
        console.log("next State", nextState)

        //not a good approach, not scalable
        return nextProps.amount != this.props.amount || 
               nextProps.count != this.props.count ||
               nextState.grandTotal != this.state.grandTotal ||
               nextState.discount != this.state.discount;

        //return true; // call render
        // return false; //shall not call render
    }


    recalculate(props) {
        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        this.setState({
            discount, 
            grandTotal
        })
    }
     
    render() {
        console.log("CartSummary Render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount : {this.props.amount} </p>
            <p> Count : {this.props.count} </p>

            <p> Discount: {this.state.discount} %</p>
            <p> Grand Total: {this.state.grandTotal} </p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}