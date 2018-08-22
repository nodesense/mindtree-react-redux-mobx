// App.js
// vendor, from node_modules, npm packages
import React from 'react';

import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./components/About";

import Cart from './cart/components/Cart';
import Login from "./components/Login";

import {BrowserRouter as Router, // html 5 browser history
        Route, 
        Switch} from 'react-router-dom';

// class component
export default class App extends React.Component {
    // create and return v.dom
    render() {
        console.log("App render");
        return (
            <Router>
            <div>
                <Header appTitle = 'Product app' />
                
                <Switch>
                    <Route path="/" exact component={Counter} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/about" exact component={About} />
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