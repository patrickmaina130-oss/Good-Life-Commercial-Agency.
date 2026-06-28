// ======================================================
// GOOD LIFE COMMERCIAL AGENCIES
// Firebase Configuration
// ======================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyB0FYELsmD53-3iasXDC8LuTCOgLL0u5q4",
  authDomain: "good-life-commercial-age-64599.firebaseapp.com",
  projectId: "good-life-commercial-age-64599",
  storageBucket: "good-life-commercial-age-64599.firebasestorage.app",
  messagingSenderId: "932357429628",
  appId: "1:932357429628:web:23c9f84436e4fce593acf9",
  measurementId: "G-0ER8706J00"
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

console.log("Firebase Connected Successfully");
