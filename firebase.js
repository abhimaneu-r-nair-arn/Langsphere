import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjpiZq2EMZCBipF7cUekGHzkTHRqq-SaE",
  authDomain: "langsphere-bacf4.firebaseapp.com",
  projectId: "langsphere-bacf4",
  storageBucket: "langsphere-bacf4.firebasestorage.app",
  messagingSenderId: "543327233487",
  appId: "1:543327233487:web:738e6661225cbbe503deba",
  measurementId: "G-GPZ01ZGBYG"
};

export const isFirebaseConfigured = Object.values(firebaseConfig).every(Boolean);
export const app = isFirebaseConfigured ? initializeApp(firebaseConfig) : null;
export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;