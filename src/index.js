import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import App from './app';
import { StateProvider } from './context/state-provider';
import { initialState } from './context/initial-state';
import reducer from './context/reducer';

ReactDom.render(<BrowserRouter>
    <StateProvider intialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>
</BrowserRouter>
, document.getElementById('root'));