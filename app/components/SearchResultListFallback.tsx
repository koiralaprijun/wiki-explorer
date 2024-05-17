import React from "react";
import { Typography, Box, CircularProgress } from "@mui/material";

export function ResultListFallback() {
    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "left" }}>
                <CircularProgress />
            </Box>
            <Typography>Loading results...</Typography>
        </div>
    );
}
