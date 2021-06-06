import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig =  {
    apiKey: "AIzaSyAsWRiy63nd5uMDVa1R40_khOL4KkMzoOY",
    authDomain: "vue3-login-test.firebaseapp.com",
    projectId: "vue3-login-test",
    storageBucket: "vue3-login-test.appspot.com",
    messagingSenderId: "538913455073",
    appId: "1:538913455073:web:3712ebfd3fe40e0cacf0a0"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;