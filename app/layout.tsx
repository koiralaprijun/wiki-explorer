import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/app/CSS/Navbar.css";
import { NavbarView } from "@/app/components/NavbarView";
import { ThemeProvider } from "@mui/material/styles";
import { globalThemeMUI } from "@/app/components/globalThemeMUI";
import { AuthProvider } from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | Wiki Explorer",
        default: "Wiki Explorer",
    },
    description: "A tool for exploring and reading Wikipedia with ease.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider theme={globalThemeMUI}>
                    <AuthProvider>
                        <NavbarView />
                        <div style={{ marginTop: "150px" }}>{children}</div>
                    </AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
