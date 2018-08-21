// App.js
// vendor, from node_modules, npm packages
import React from 'react';

import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";


// class component
export default class App extends React.Component {
    // create and return v.dom
    render() {
        console.log("App render");
        return (
            <div>
                <Header appTitle = 'Product app' />
                <Counter />
                <Footer year={2018}
                        address = { {city: 'BLR', state: 'KA', pincode: 560001} }
                        />
            </div>
        )
    }
}