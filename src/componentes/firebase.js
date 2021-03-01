import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCYfMnpmHI-IvwZBikLSg9c-PYBB0s0ArU",
    authDomain: "site-portfolio-9f959.firebaseapp.com",
    projectId: "site-portfolio-9f959",
    storageBucket: "site-portfolio-9f959.appspot.com",
    messagingSenderId: "686757569263",
    appId: "1:686757569263:web:5c0a61735f0e372479311a"
});

var db = firebaseApp.firestore();

export{ db };