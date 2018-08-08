import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from "./store";

import './config'
import App from './app'

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));