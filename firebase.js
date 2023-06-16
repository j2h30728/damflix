// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  REACT_FIREBASE_API_KEY,
  REACT_FIREBASE_APP_ID,
  REACT_FIREBASE_AUTH_DOMAIN,
  REACT_FIREBASE_MEASUREMENT_ID,
  REACT_FIREBASE_MESAGING_SENDER_ID,
  REACT_FIREBASE_PROJECT_ID,
  REACT_FIREBASE_STORAGE_BUCKET,
} = import.meta.env;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: REACT_FIREBASE_API_KEY,
  appId: REACT_FIREBASE_APP_ID,
  authDomain: REACT_FIREBASE_AUTH_DOMAIN,
  measurementId: REACT_FIREBASE_MEASUREMENT_ID,
  messagingSenderId: REACT_FIREBASE_MESAGING_SENDER_ID,
  projectId: REACT_FIREBASE_PROJECT_ID,
  storageBucket: REACT_FIREBASE_STORAGE_BUCKET,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics;
