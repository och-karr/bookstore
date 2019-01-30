import Rebase from "re-base";
import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBnQVqJtUoLg6yJZofsxbd6AgxCoEhEPhM",
    authDomain: "clockwork-bookstore-91b67.firebaseapp.com",
    databaseURL: "https://clockwork-bookstore-91b67.firebaseio.com",
    projectId: "clockwork-bookstore-91b67",
    storageBucket: "clockwork-bookstore-91b67.appspot.com",
    messagingSenderId: "302483840690"
});

const fbase = Rebase.createClass(firebaseApp.database());

export {fbase, firebaseApp};