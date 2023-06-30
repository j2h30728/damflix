// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const {
  VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_APP_ID,
  VITE_FIREBASE_AUTH_DOMAIN,
  VITE_FIREBASE_MEASUREMENT_ID,
  VITE_FIREBASE_MESSAGING_SENDER_ID,
  VITE_FIREBASE_PROJECT_ID,
  VITE_FIREBASE_STORAGE_BUCKET,
} = import.meta.env;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  appId: VITE_FIREBASE_APP_ID,
  authDomain: VITE_FIREBASE_AUTH_DOMAIN,
  measurementId: VITE_FIREBASE_MEASUREMENT_ID,
  messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
  projectId: VITE_FIREBASE_PROJECT_ID,
  storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

export const signUpWithEmail = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

export const signInWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);

  // return userCredential.user;
  // const userCredential = await signInWithEmailAndPassword(auth, email, password);

  // return userCredential.user;
};
