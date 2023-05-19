import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../FirebaseConfig/Firebase";

const auth = getAuth(app);
export const AuthContextProvider = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  const authInfo = {
    register,
    login,
    logOut,
    user,
  };
  return (
    <AuthContextProvider.Provider value={authInfo}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthProvider;
