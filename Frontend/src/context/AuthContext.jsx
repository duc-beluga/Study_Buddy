import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext(); // <-- Call the createContext method

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // Initialized to null for better clarity

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // <-- Use semicolon here
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
