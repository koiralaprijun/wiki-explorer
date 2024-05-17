"use client";

import * as React from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { globalThemeMUI } from "@/app/components/globalThemeMUI";
import { ThemeProvider } from "@mui/material/styles";

export function ReadingListCardView() {
    return (
        <ThemeProvider theme={globalThemeMUI}>
            <Card variant="outlined" sx={{ marginTop: 1 }}>
                <CardContent>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="flex-start"
                    >
                        <Typography
                            variant="body1"
                            fontWeight="bold"
                            maxWidth="80%"
                            color="primary"
                            gutterBottom
                        >
                            International Union for Conservation of Nature
                        </Typography>
                        <IconButton aria-label="close" color="primary">
                            <DisabledByDefaultIcon />
                        </IconButton>
                    </Box>
                    <Typography variant="body2">
                        Climate change describes global warming—the ongoing
                        increase in global average temperature—and its effects
                        on Earth&apos;s climate system...
                    </Typography>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{ marginTop: 1 }}>
                <CardContent>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="flex-start"
                    >
                        <Typography
                            variant="body1"
                            fontWeight="bold"
                            maxWidth="80%"
                            color="primary"
                            gutterBottom
                        >
                            International Union for Conservation of Nature
                        </Typography>
                        <IconButton aria-label="close" color="primary">
                            <DisabledByDefaultIcon />
                        </IconButton>
                    </Box>
                    <Typography variant="body2">
                        Climate change describes global warming—the ongoing
                        increase in global average temperature—and its effects
                        on Earth&apos;s climate system...
                    </Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}
