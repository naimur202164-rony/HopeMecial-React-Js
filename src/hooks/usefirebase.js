import initializeAuthinTication from "../Firebase/firebase.initia";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthinTication()
const UseFirebase = () => {

    const [user, setUser] = useState({});
    // Email
    const [email, setEmail] = useState('');
    // Password
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");


    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider()

    // Gooogle sign in
    const HandleGoogleIn = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                console.log(result.user)
            })
            .catch((error) => setError(error.message));
    };

    // Hooks'
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setError("");
            }
        })
    }, [])

    // Login Out
    const LogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                setError("");
            });
    }
    const handleSubmit = (e) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
        e.preventDefault()
    }

    // email

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    // PassWords
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }






    return {
        user, LogOut, HandleGoogleIn, handleEmail, handlePassword, handleSubmit, error
    }

};

export default UseFirebase;