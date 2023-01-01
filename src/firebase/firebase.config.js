import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  // apiKey: process.env.REACT_API_apiKey,
  // authDomain: process.env.REACT_API_authDomain,
  // projectId: process.env.REACT_API_projectId,
  // storageBucket: process.env.REACT_API_storageBucket,
  // messagingSenderId: process.env.REACT_API_messagingSenderId,
  // appId: process.env.REACT_API_appId,

  apiKey: "AIzaSyCv7mbXtQApNPnCsqPUvc7mEvYtQMnmOLE",
  authDomain: "job-box-a4521.firebaseapp.com",
  projectId: "job-box-a4521",
  storageBucket: "job-box-a4521.appspot.com",
  messagingSenderId: "627705358620",
  appId: "1:627705358620:web:842228d9e049a4383372d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
