import firebase from "firebase";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBh09SULq8yL5fZMFvWJOmnxlrAvo6yqHY",
//   authDomain: "shiv-dream-homes-46d1f.firebaseapp.com",
//   databaseURL: "https://shiv-dream-homes-46d1f.firebaseio.com",
//   projectId: "shiv-dream-homes-46d1f",
//   storageBucket: "shiv-dream-homes-46d1f.appspot.com",
//   messagingSenderId: "111267378672",
//   appId: "1:111267378672:web:8cbea2b24ef8dff13e5935",
//   measurementId: "G-3HMYCZQCWK"
// };

// var firebaseApp = firebase.initializeApp(firebaseConfig);

try {
  firebase.initializeApp({
    apiKey: "AIzaSyBh09SULq8yL5fZMFvWJOmnxlrAvo6yqHY",
    authDomain: "shiv-dream-homes-46d1f.firebaseapp.com",
    databaseURL: "https://shiv-dream-homes-46d1f.firebaseio.com",
    projectId: "shiv-dream-homes-46d1f",
    storageBucket: "shiv-dream-homes-46d1f.appspot.com",
    messagingSenderId: "111267378672",
    appId: "1:111267378672:web:8cbea2b24ef8dff13e5935",
    measurementId: "G-3HMYCZQCWK"
  });
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error raised", err.stack);
  }
}
const firebaseApp = firebase;

var db = firebaseApp.firestore();

export { db };
