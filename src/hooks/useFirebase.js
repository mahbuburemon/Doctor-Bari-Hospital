
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/Firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);
    const auth = getAuth();


    const signInUsingGoogle = () => {
        setLoading(true);

        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
            // .then(result => {
            //     setUser(result.user)

            // })
            .finally(() => setLoading(false));

    }






    // observe use state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setLoading(false)
        });
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setLoading(false));

    }



    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;