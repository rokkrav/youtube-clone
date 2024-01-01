// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBnBaG8c1PzlnJT6Te682VJBdQvC_QqCE",
  authDomain: "utubebyravi.firebaseapp.com",
  projectId: "utubebyravi",
  storageBucket: "utubebyravi.appspot.com",
  messagingSenderId: "854888581930",
  appId: "1:854888581930:web:70bd065f6f55b3986e6c53",
  measurementId: "G-31ZRWX368K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
