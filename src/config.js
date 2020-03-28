import Firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBVQUhB1cC7QtS-7iyER9juBd6jZv1CmtI",
    authDomain: "reactnativeapp-d0c5a.firebaseapp.com",
    databaseURL: "https://reactnativeapp-d0c5a.firebaseio.com",
    projectId: "reactnativeapp-d0c5a",
    storageBucket: "reactnativeapp-d0c5a.appspot.com",
    messagingSenderId: "823263466610",
    appId: "1:823263466610:web:fe57e95dff8f5789425eeb",
    measurementId: "G-ZRJ4P155DD"
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.firestore();