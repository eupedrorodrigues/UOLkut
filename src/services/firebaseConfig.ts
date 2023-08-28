import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = initializeApp({
  apiKey: "AIzaSyD2UBufW6NAuSX-8YgnFpxh6KjxgHT1dNs",
  authDomain: "uolkut-11d37.firebaseapp.com",
  projectId: "uolkut-11d37",
  storageBucket: "uolkut-11d37.appspot.com",
  messagingSenderId: "968833479107",
  appId: "1:968833479107:web:234ff13a11facdfe834d76",
  measurementId: "G-T9NDFFB09D"
});

// Initialize Firebase
export const auth = getAuth(firebaseConfig);