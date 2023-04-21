import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCynr3Llp_x-B65jWts-ir7PvVp9AtgAO4",
  authDomain: "pm-exams-bank.firebaseapp.com",
  projectId: "pm-exams-bank",
  storageBucket: "pm-exams-bank.appspot.com",
  messagingSenderId: "716711596414",
  appId: "1:716711596414:web:8cf2007fe7d3292883632f",
  measurementId: "G-2HZB98KDN9"
};

const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

export const db = getFirestore(app);