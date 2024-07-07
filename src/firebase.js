
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDA8TZKl_T5-QUpm6SJoVMpO5NpXxNmCXU",
  authDomain: "npnp-b2bb0.firebaseapp.com",
  projectId: "npnp-b2bb0",
  storageBucket: "npnp-b2bb0.appspot.com",
  messagingSenderId: "313747395688",
  appId: "1:313747395688:web:09fa4ee5e28de8bf3b17dd"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app);