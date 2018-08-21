//main.js
// bootstrapping react app into browser

// React engine, events, diff, patching
import {render} from 'react-dom'; //real dom

import React from 'react'; // virtual dom

import App from './app/App';

// host virtual into real dom
// Data Flow Virtual DOM to REAL DOM (one direction)
render(<App /> , //v.dom
        document.getElementById('root')) // real dom