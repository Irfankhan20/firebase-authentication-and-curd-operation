// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmnhCw9t8woArg1Ih7J-X89VhOz9BLDMw",
  authDomain: "fir-and-crud-operation.firebaseapp.com",
  projectId: "fir-and-crud-operation",
  storageBucket: "fir-and-crud-operation.appspot.com",
  messagingSenderId: "478486750693",
  appId: "1:478486750693:web:aa5c6095543bbbf34a7b0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;