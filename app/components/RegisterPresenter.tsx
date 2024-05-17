"use client";

import { useState } from "react";

//Authentication Imports
import { googleLogin, register } from "@/app/firebase/firebaseAuth";
import { RegisterView } from "../components/RegisterView";

export function Register() {
    const [errorMessage, setErrorMessage] = useState("");

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function googleAuth() {
        return googleLogin().catch((err: unknown) => {
            if (err instanceof Error) {
                setErrorMessage(err.message);
            }
            throw err;
        });
    }

    function emailSignup() {
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return Promise.reject("Passwords do not match.");
        }
        return register(email, firstName, lastName, password).catch(
            (err: unknown) => {
                if (err instanceof Error) {
                    setErrorMessage(err.message);
                }
                throw err;
            }
        );
    }

    return (
        <RegisterView
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            showPassword={showPassword}
            showConfirmPassword={showConfirmPassword}
            toggleShowPassword={() => {
                setShowPassword(!showPassword);
            }}
            toggleShowConfirmPassword={() => {
                setShowConfirmPassword(!showConfirmPassword);
            }}
            signupWithEmail={emailSignup}
            authenticateWithGoogle={googleAuth}
            errorMessage={errorMessage}
        />
    );
}
