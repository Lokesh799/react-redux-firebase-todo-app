import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCeTyjk71i2-ISUfaJfABhOVGx1Q-9lIqM",
  authDomain: "react-redux-todolist-5a162.firebaseapp.com",
  databaseURL: "https://react-redux-todolist-5a162-default-rtdb.firebaseio.com",
  projectId: "react-redux-todolist-5a162",
  storageBucket: "react-redux-todolist-5a162.appspot.com",
  messagingSenderId: "81281333382",
  appId: "1:81281333382:web:79c3f46dc0fc5b7dc83907",
  measurementId: "G-CRBHR0HWSZ"
})

export { firebaseConfig as firebase };