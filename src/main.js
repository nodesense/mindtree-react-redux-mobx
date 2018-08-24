//main.js
// bootstrapping react app into browser

// React engine, events, diff, patching
import {render} from 'react-dom'; //real dom

import React from 'react'; // virtual dom

import App from './app/App';

// webpack external
import config from 'config'; 
import siteinfo from "siteInfo";

import store from "./app/store";
import {Provider} from 'react-redux';

//resolved at build time
console.log("VERSION ", VERSION);
console.log("APP TITLE", APP_TITLE);

console.log("Config ", config)
console.log("site ", siteinfo)



// host virtual into real dom
// Data Flow Virtual DOM to REAL DOM (one direction)
// Provider expose store as react context
render(<Provider store={store}>
        <App />
        </Provider>
         ,  
        document.getElementById('root')) // real dom