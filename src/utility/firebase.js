import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "tic-tac-toe-a8e17.firebaseapp.com",
  projectId: "tic-tac-toe-a8e17",
  storageBucket: "tic-tac-toe-a8e17.appspot.com",
  messagingSenderId: "555326024875",
  appId: "1:555326024875:web:3aaf30a3ffd42f64031bee",
};

const app = initializeApp(firebaseConfig);
