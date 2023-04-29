// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGtNLGXJhM25SiAAKgdceuXz1YvX_g7ek",
  authDomain: "tickandtock-29f93.firebaseapp.com",
  projectId: "tickandtock-29f93",
  storageBucket: "tickandtock-29f93.appspot.com",
  messagingSenderId: "263786912297",
  appId: "1:263786912297:web:6af602255357e7a52b1a38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;