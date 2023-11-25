// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHil9iLvfsHbBAmp8CKMDU9jVFBiKJWfQ",
  authDomain: "lanterna-marketplace-ee30b.firebaseapp.com",
  projectId: "lanterna-marketplace-ee30b",
  storageBucket: "lanterna-marketplace-ee30b.appspot.com",
  messagingSenderId: "21242476103",
  appId: "1:21242476103:web:3974b4029222cb0b5e2362",
  measurementId: "G-TH7P5X7LKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);