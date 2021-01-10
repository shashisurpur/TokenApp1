import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCDT6CSxA2jCh6FB9Og7CuxIuXWbzJwHXE",
    authDomain: "firestoresample-bdb98.firebaseapp.com",
    databaseURL: "https://firestoresample-bdb98.firebaseio.com",
    projectId: "firestoresample-bdb98",
    storageBucket: "firestoresample-bdb98.appspot.com",
    messagingSenderId: "595900204209",
    appId: "1:595900204209:web:30c7c79706693e71"
};

firebase.initializeApp(firebaseConfig);


export default firebase;