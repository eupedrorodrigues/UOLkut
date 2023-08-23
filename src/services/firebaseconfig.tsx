import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBkoSFgtqBl_LwdLrVDJtRFE-SKYDni3II",
  authDomain: "uol-auth.firebaseapp.com",
  projectId: "uol-auth",
  storageBucket: "uol-auth.appspot.com",
  messagingSenderId: "865109029679",
  appId: "1:865109029679:web:ab7a8276e584ab115c67da",
  measurementId: "G-10V37SNFX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);