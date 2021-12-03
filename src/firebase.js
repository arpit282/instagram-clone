import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcAhT8-H3aM8jQcUo7h_G6iclF3DBxY4c",
  authDomain: "instagram-83962.firebaseapp.com",
  databaseURL: "https://instagram-83962.firebaseio.com",
  projectId: "instagram-83962",
  storageBucket: "instagram-83962.appspot.com",
  messagingSenderId: "739062245169",
  appId: "1:739062245169:web:81fed4df018d8cc736b210",
  measurementId: "G-T6X50J1RM0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db