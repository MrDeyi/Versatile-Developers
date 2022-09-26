// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import {getAuth} from 'firebase/auth'
import 'firebase/firestore'
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

export const db = getFirestore(app);
const auth = getAuth(app)
export {auth}

export const createUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = db.doc(`Users/${user.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = user;
    const { displayName } = additionalData;

    try {
      await userRef.set({
        displayName,
        email,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log('Error in creating user', error);
    }
  }
};

// export default app;
