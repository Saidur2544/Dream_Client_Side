import initializeFirebase from "../Firebase/FirebaseInit";
import { useEffect, useState } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
       return signInWithPopup(auth, googleProvider)
            
    };
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((err) => {
                setError(error.message)
            });
    };
    return {
        user,
        setUser,
        handleGoogleLogin,
        handleLogout,
        error,
        setError,
        isLoading,
        setIsLoading
    };
};

export default useFirebase;