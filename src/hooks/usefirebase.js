
import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthintication from './../components/Firebase/firebase.ini';

initializeAuthintication()

const UseFirebase = () => {
        const [user,setUser]=useState({})
    const auth=getAuth();
    const  GoogleProvider=new GoogleAuthProvider();
    // Google Sign
    const GoogleSignIN=()=>{
            signInWithPopup(auth,GoogleProvider)
            .then(result=>{
                console.log(result.user)
            });
    }


    // Firebase
  useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
          if(user){
            setUser(user)

          }
      })
  },[])
    // LogOut
    const LogOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    return{
        LogOut,GoogleSignIN,user
    }
};

export default UseFirebase;