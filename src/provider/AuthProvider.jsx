import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext ();
const auth = getAuth(app);

const AuthProvider = (props = {}) => {
     const {children} = props || {} ;
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

 

     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            // } else {
                // setUser(null);
            // }
        });
        // Cleanup subscription on unmount
        return () => unsubscribe();

        },[]);



     const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
     }

     const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
     }

     const logOut = () => {
        setLoading(true);
        return signOut(auth);
     }
    const  authInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        logOut,
        loading,
        
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;