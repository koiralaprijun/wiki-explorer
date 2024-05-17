import React from "react";
import type { Metadata } from "next";
import WelcomeView from "@/app/components/WelcomeView";

export const metadata: Metadata = {
    title: "Welcome",
};

export default function WelcomePage() {
    return <WelcomeView />;
}
