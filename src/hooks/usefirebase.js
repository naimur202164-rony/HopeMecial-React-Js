import { useEffect, useState } from "react";
import { getAuth,createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut  } from "firebase/auth";
import initializationAuthintication from './../componets/useFirebase/firebase.ini';


initializationAuthintication()

const UseFirebase = () => {
        const [user,setUser]=useState({});
        const auth=getAuth();
        const GoogleProvider=new GoogleAuthProvider()
        const [email,setEmail]=useState('');
        const [password,setPassword]=useState('')


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
                    const handleRegistration=(e)=>{
                        console.log(email,password);
         createUserWithEmailAndPassword(auth,email,password)
            .then(result=>{
             const user=result.user;
                 console.log(user)
    })

        e.preventDefault()
         }

                    // Email
                    const handleEmail=(e)=>{
                        setEmail(e.target.value)
                    }  ; 

                    // PassWord
                    const handlePassWord=(e)=>{
                        setPassword(e.target.value)
                    }

                return{
                        handleRegistration,LogOut,GoogleSignIN,user,handleEmail,handlePassWord,handlePassWord
                }

};

export default UseFirebase;
