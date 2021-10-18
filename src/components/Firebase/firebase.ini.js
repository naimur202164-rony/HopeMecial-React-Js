
import { initializeApp } from 'firebaseConfig/ap';
import firebaseConfig from './firebase.config';



const initializeAuthintication=()=>{
    initializeApp(firebaseConfig);
};



export default initializeAuthintication