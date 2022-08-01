import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import './index.css';

import App from './app';
import { StateProvider } from './context/state-provider';
import { initialState } from './context/initial-state';
import reducer from './context/reducer';
import { app } from './firebase.config';

let authStatus = '';

const login = async () => {
    try {
        const firebaseAuth = getAuth(app);
        const provider = new GoogleAuthProvider();
        const response = await signInWithPopup(firebaseAuth, provider);
        authStatus = 'success';
        console.log(response);
    } catch (e) {
        console.log(e)
    }
    
}

const Auth = () => {
    return (<div className='flex justify-center items-center w-56 h-80 bg-headingColor' onClick={() => login()}>
    </div>)
}

const Main = () => {
    return (authStatus === 'success' ?
    <BrowserRouter>
     <StateProvider intialState={initialState} reducer={reducer}>
         <App />
     </StateProvider>
 </BrowserRouter> : <Auth />)
}

ReactDom.render( <Main />
, document.getElementById('root'));

