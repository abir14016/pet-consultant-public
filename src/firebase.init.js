// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBukC9sj_K39Z5GRmXNEAEmtH5dvl4Y_rk",
    authDomain: "pet-consultant.firebaseapp.com",
    projectId: "pet-consultant",
    storageBucket: "pet-consultant.appspot.com",
    messagingSenderId: "446363483175",
    appId: "1:446363483175:web:dbc2685806545904fd2202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;