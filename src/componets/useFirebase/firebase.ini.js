import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initializationAuthintication=()=>{
    initializeApp(firebaseConfig);
};


export default initializationAuthintication;