
// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPvaLXBbvlRYJjqptWxC6A_4fVrl1p0RA",
  authDomain: "anbchmp.firebaseapp.com",
  databaseURL: "https://anbchmp-default-rtdb.firebaseio.com",
  projectId: "anbchmp",
  storageBucket: "anbchmp.firebasestorage.app",
  messagingSenderId: "291570744735",
  appId: "1:291570744735:web:b18162c17aa4f4b26f51aa",
  measurementId: "G-HYCSJL8YCL"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
