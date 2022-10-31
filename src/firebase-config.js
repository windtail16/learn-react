import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOTm7-ITpru-Y9549B8qEbKCqM7qKixaA",
  authDomain: "portfolio-184808.firebaseapp.com",
  databaseURL: "https://portfolio-184808.firebaseio.com",
  projectId: "portfolio-184808",
  storageBucket: "portfolio-184808.appspot.com",
  messagingSenderId: "814298444468",
  appId: "1:814298444468:web:b4296a1f57a8624b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);