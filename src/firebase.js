import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA8mdJUsajkjlExyGuagJpquH-7uB29XiQ",
    authDomain: "atividadesomativa2-5ea32.firebaseapp.com",
    projectId: "atividadesomativa2-5ea32",
    storageBucket: "atividadesomativa2-5ea32.appspot.com",
    messagingSenderId: "165147076686",
    appId: "1:165147076686:web:9bcc751172d202966622ad"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
