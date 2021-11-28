import React, {createContext, useContext, useEffect, useState} from "react";
import {auth} from "../utils/init-firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signOut,
    confirmPasswordReset,
} from "firebase/auth";
import LoadingGif from "../assets/loadingGif/6134707265a929f4cdfc1f6d_5.gif"
import LoadingPage from "../pages/StatusPages/LoadingPage/LoadingPage";

const AuthContext = createContext({
    currentUser: null,
    signInWithGoogle: () => Promise,
    signInWithFacebook: () => Promise,
    login: () => Promise,
    register: () => Promise,
    logout: () => Promise,
    forgotPassword: () => Promise,
    resetPassword: () => Promise
})

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user ? user : null)
            isLoading(false);
        })
        return () => {
            unsubscribe();
            isLoading(false);
        }
    }, [])

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function register(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function forgotPassword(email) {
        return sendPasswordResetEmail(auth, email, {
            url: "http://localhost:3000/login",
        })
    }

    function resetPassword(oobCode, newPassword) {
        return confirmPasswordReset(auth, oobCode, newPassword);
    }

    function logout() {
        return signOut(auth);
    }

    function signInWithGoogle() {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider);
    }

    function signInWithFacebook() {
        const provider = new FacebookAuthProvider()
        return signInWithPopup(auth, provider);
    }

    const value = {
        currentUser,
        signInWithGoogle,
        signInWithFacebook,
        login,
        register,
        logout,
        forgotPassword,
        resetPassword,
    }
    return (
        <AuthContext.Provider value={value}>
            {loading
                ? <LoadingPage />
                : children
            }
        </AuthContext.Provider>
    )
}