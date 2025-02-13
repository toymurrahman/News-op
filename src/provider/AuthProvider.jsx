import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";



// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext ();
const auth = getAuth(app);



const AuthProvider = (props = {}) => {
     const {children} = props || {} ;
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const googleProvider = new GoogleAuthProvider();
     const facebookProvider = new FacebookAuthProvider();
 

     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        
                setUser(currentUser);
                setLoading(false);
         
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
      const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
      }
      const facebookLogin = () => {
        return signInWithPopup(auth, facebookProvider);
        }
        const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);   
        }
    const  authInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        logOut,
        updateUser,
        googleLogin,
        facebookLogin,
        loading,
        
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;