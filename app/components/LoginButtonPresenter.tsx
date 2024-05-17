"use client";
import { LoginButtonView } from "@/app/components/LoginButtonView";
import { useAuth } from "@/app/context/auth";
import { logout } from "@/app/firebase/firebaseAuth";

export function LoginButton() {
    const { currentUser } = useAuth();

    return (
        <LoginButtonView
            firstName={currentUser?.firstName}
            logout={handleUserLogout}
        />
    );

    function handleUserLogout() {
        logout();
    }
}
