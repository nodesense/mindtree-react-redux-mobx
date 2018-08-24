// App.js
// vendor, from node_modules, npm packages
import React from 'react';

import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./components/About";

import Cart from './cart/components/Cart';
import Login from "./components/Login";

import AuthRoute from "./components/AuthRoute";

import ReduxCounter from "./components/ReduxCounter";

import CounterContainer 
            from "./containers/CounterContainer";


import {BrowserRouter as Router, // html 5 browser history
        Route, 
        Switch} from 'react-router-dom';

// class component
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            auth: false
        }
    }
    // create and return v.dom
    render() {
        console.log("App render");
        return (
            <Router>
            <div>
                <Header appTitle = 'Product app' />
                
                { !this.state.auth && 
                <button onClick={ () => this.setState({auth: true})}>
                    Login
                </button>
                }

                 { this.state.auth && 
                <button onClick={ () => this.setState({auth: false})}>
                    Logout
                </button>
                 }


                <Switch>
                    <Route path="/" exact component={Counter} />
                    <AuthRoute path="/cart" exact component={Cart} auth={this.state.auth} />
                    <Route path="/about" exact component={About}  auth={this.state.auth} />
                    
                    <Route path="/redux-counter" component={ReduxCounter} />
                    <Route path="/counter" component={CounterContainer} />
                    <Route path="/login" exact component={Login} />
                </Switch>

                
                {/* <About />
                <Cart />
                <Counter /> */}

                <Footer year={2018}
                        address = { {city: 'BLR', state: 'KA', pincode: 560001} }
                        />
            </div>
            </Router>
        )
    }
}