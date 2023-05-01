import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyDaepZo8evUPo7ftyngb1plnaBgug-3neA",
    authDomain: "viscara-ecfc3.firebaseapp.com",
    projectId: "viscara-ecfc3",
    storageBucket: "viscara-ecfc3.appspot.com",
    messagingSenderId: "1018969139148",
    appId: "1:1018969139148:web:1fa8faeadaf90df6d69f69"
  };
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();