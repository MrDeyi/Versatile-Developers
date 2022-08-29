// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaGTJJqlOczDyUTuCx65fnvybhW4AXmT0",
  authDomain: "versatile-developers.firebaseapp.com",
  projectId: "versatile-developers",
  storageBucket: "versatile-developers.appspot.com",
  messagingSenderId: "445741404387",
  appId: "1:445741404387:web:c76fda19fc041a1a3335d6",
  measurementId: "G-DTCHKDJYN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
export {auth}

// export default app;
