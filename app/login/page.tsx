import { Login } from "@/app/components/LoginPresenter";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login",
};

export default function LoginPage() {
    return <Login />;
}
