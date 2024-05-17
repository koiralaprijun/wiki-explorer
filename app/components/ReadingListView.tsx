"use client";

import * as React from "react";
import { Typography, Container, Divider } from "@mui/material";
import { globalThemeMUI } from "@/app/components/globalThemeMUI";
import { ThemeProvider } from "@mui/material/styles";
import { ReadingListCardView } from "./ReadingListCardView";

export function ReadingListView() {
    return (
        <ThemeProvider theme={globalThemeMUI}>
            <Container
                sx={{
                    paddingTop: 2,
                    paddingBottom: 2,
                    height: "80vh",
                }}
            >
                <ReadingListCardView />
            </Container>
        </ThemeProvider>
    );
}
