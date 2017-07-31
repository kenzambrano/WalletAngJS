import { firebase } from 'firebase';

const config = {
    apiKey: "AIzaSyASQTXK5-95SdY0qut8DpdRketDQHXeBfw",
    authDomain: "walletangjs.firebaseapp.com",
    databaseURL: "https://walletangjs.firebaseio.com",
    projectId: "walletangjs",
    storageBucket: "walletangjs.appspot.com",
    messagingSenderId: "660338280616"
}

firebase.database.enableLogging(true);
firebase.initializedApp(config);

export const db = firebase.database();
export const auth = firebase.auth();