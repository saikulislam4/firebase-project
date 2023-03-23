// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrDNizmfyb8SGsBqdSUogm-03E4_ZGoRU",
  authDomain: "login-practice-9c75f.firebaseapp.com",
  projectId: "login-practice-9c75f",
  storageBucket: "login-practice-9c75f.appspot.com",
  messagingSenderId: "527014327729",
  appId: "1:527014327729:web:6e94a299a4629f9f123990",
  measurementId: "G-P3M8R010FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app