import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBWXPzFtClCkW2V_5-JQsSSELgwOnEF2uE",
  authDomain: "deliveryapp-50282.firebaseapp.com",
  databaseURL: "https://deliveryapp-50282-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "deliveryapp-50282",
  storageBucket: "deliveryapp-50282.appspot.com",
  messagingSenderId: "735018861584",
  appId: "1:735018861584:web:b96290e8380064af517695"
};

// Initialize Firebase
const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage }