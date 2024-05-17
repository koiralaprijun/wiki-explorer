"use client";

import * as React from "react";
import { useState } from "react";

//Authentication Imports
import { googleLogin, login } from "@/app/firebase/firebaseAuth";
import { LoginView } from "../components/LoginView";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    function googleAuth() {
        return googleLogin().catch((err) => {
            if (err instanceof Error) {
                setErrorMessage(err.message);
            }
            throw err;
        });
    }

    function emailAuth() {
        return login(email, password).catch((err) => {
            if (err instanceof Error) {
                setErrorMessage(err.message);
            }
            throw err;
        });
    }

    return (
        <LoginView
            updateEmail={setEmail}
            updatePassword={setPassword}
            authenticateWithEmail={emailAuth}
            authenticateWithGoogle={googleAuth}
            errorMessage={errorMessage}
        />
    );
}
