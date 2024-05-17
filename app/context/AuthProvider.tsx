"use client";
import { useEffect, useState } from "react";
import { AuthContext, AuthenticatedUser } from "./auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseAuth";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<AuthenticatedUser | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email ? user.email : "",
                    firstName: user.displayName ? user.displayName : "",
                });
            } else {
                setUser(null);
            }
        });
    }, []);

    return (
        <AuthContext.Provider
            value={{
                currentUser: user,
                setCurrentUser: setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
