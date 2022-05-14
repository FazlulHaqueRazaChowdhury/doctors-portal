// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfcdpwrugW4nFMLNFovCiP_mUyRt6uYJ4",
    authDomain: "docotorspor.firebaseapp.com",
    projectId: "docotorspor",
    storageBucket: "docotorspor.appspot.com",
    messagingSenderId: "614401872110",
    appId: "1:614401872110:web:b9558860b22ba8b641e3ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;