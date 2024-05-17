import { Register } from "@/app/components/RegisterPresenter";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register",
};

export default function RegisterPage() {
    return <Register />;
}
