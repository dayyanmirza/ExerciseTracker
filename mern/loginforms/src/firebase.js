import { getDatabase } from "firebase/database"
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUYUfd-9w8glEb416b7HPKtVtJXclQ080",
  authDomain: "exercise-tracker-reg-form.firebaseapp.com",
  databaseURL: "https://exercise-tracker-reg-form-default-rtdb.firebaseio.com",
  projectId: "exercise-tracker-reg-form",
  storageBucket: "exercise-tracker-reg-form.appspot.com",
  messagingSenderId: "369047890455",
  appId: "1:369047890455:web:34cf3f638a280f07420a52",
  measurementId: "G-W28MJF9X2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');

export const database = getDatabase(app);