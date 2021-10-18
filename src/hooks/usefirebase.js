import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut  } from "firebase/auth";
import initializationAuthintication from './../componets/useFirebase/firebase.ini';


initializationAuthintication()

const UseFirebase = () => {
        const [user,setUser]=useState({});
        const auth=getAuth();
        const GoogleProvider=new GoogleAuthProvider()



        const GoogleSignIN=()=>{
                signInWithPopup(auth,GoogleProvider)
                .then(result=>{
                    console.log(result.user)
                });

        }

        
        useEffect(()=>{
            onAuthStateChanged(auth,(user)=>{
                if(user){
                    setUser({})
                }
            })
        },[])
        // Google Logout Mathods
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
