import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_API_apiKey,
  authDomain: process.env.REACT_API_authDomain,
  projectId: process.env.REACT_API_projectId,
  storageBucket: process.env.REACT_API_storageBucket,
  messagingSenderId: process.env.REACT_API_messagingSenderId,
  appId: process.env.REACT_API_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
