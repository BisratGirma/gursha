import React from 'react';
import ReactDom from 'react-dom';
import { useDispatch, useSelector, Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import './index.css';

import App from './app';
import store from './store'
import { log } from './context/slices';
import { app } from './firebase.config';


const Auth = () => {
    const dispatch = useDispatch()

    const login = () => {
            const firebaseAuth = getAuth(app);
            const provider = new GoogleAuthProvider();
            signInWithPopup(firebaseAuth, provider).then(result => {
                dispatch(log({user: result.user}))
                console.log(result);
            }).catch((e) => {
                console.log(e)
            });    
    }

    return (<div className='flex justify-center items-center 
    w-56 h-50 border-2 border-headingColor'
    onClick={() => login()} >
    Sign in with Google
    </div>)
}

const Main = () => {
    const user = useSelector((state) => state.user)
    console.log(user)

    return (user ?
    <BrowserRouter>
         <App />
 </BrowserRouter> : <Auth />)
}

ReactDom.render(
<Provider store={store}>
    <Main />
</Provider>
, document.getElementById('root'));

