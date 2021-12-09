import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBLugWDQj3i-pVI3z9lgmzZGPSDmhQvcig",
  authDomain: "projet-firebase-6d72e.firebaseapp.com",
  projectId: "projet-firebase-6d72e",
  storageBucket: "projet-firebase-6d72e.appspot.com",
  messagingSenderId: "28285005480",
  appId: "1:28285005480:web:e75f218eae2f6514fa1c9d",
  measurementId: "${config.measurementId}"
};

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

export default firebase;