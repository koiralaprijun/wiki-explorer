import React from "react";
import { Container, Typography } from "@mui/material";
import { SearchBoxView } from "@/app/components/SearchBoxView";

export default function WelcomeView() {
    return (
        <Container maxWidth="md" sx={{ textAlign: "left", mt: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom>
                WELCOME TO
            </Typography>
            <Typography
                variant="h2"
                component="h2"
                sx={{ fontWeight: "bold", mb: 1 }}
            >
                WIKI EXPLORER
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 4, maxWidth: "60%" }}>
                A website which acts as a wrapper for Wikipedia that provides a
                more interactive user experience while browsing Wikipedia. It is
                intended for users who are not looking for any particular
                information but are merely reading out of curiosity and
                willingness to learn.
            </Typography>
            <SearchBoxView placeholder="Search Wikipedia" />
        </Container>
    );
}
