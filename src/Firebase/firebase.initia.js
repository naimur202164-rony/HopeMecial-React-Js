import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initializeAuthinTication=()=>{
    initializeApp(firebaseConfig);
}


export default initializeAuthinTication;