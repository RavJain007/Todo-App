import firebase from  "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDcDz7er3zmD_7mDf9jf4xi9k3OXn886Cw",
    authDomain: "todo-2-326df.firebaseapp.com",
    databaseURL: "https://todo-2-326df.firebaseio.com",
    projectId: "todo-2-326df",
    storageBucket: "todo-2-326df.appspot.com",
    messagingSenderId: "173643187648",
    appId: "1:173643187648:web:a5756807322b0058887425",
    measurementId: "G-ETJ2EL2VZQ"
  });

const db = firebaseApp.firestore()

export default db;
