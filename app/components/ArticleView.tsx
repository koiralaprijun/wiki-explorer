import { Suspense } from "react";
import { Sidebar } from "@/app/components/SidebarPresenter";
import { Grid, Button, Typography, Box, CircularProgress } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import Tooltip from "@mui/material/Tooltip";

import "@/app/CSS/page.css";

export function ArticleView({
    children,
    displayTitle,
    articleTitle,
    showSidebar,
    toggleSidebar,
}: {
    children: React.ReactNode;
    displayTitle: string;
    articleTitle: string;
    showSidebar: boolean;
    toggleSidebar: () => void;
}) {
    return (
        <Grid
            container
            spacing={2}
            justifyContent="center"
            style={{ height: "100vh", overflow: "hidden" }}
        >
            {showSidebar && (
                <Grid item xs={3}>
                    <Sidebar />
                </Grid>
            )}
            <Grid item xs={9} style={{ overflowY: "auto", height: "100vh" }}>
                <Box style={{ position: "relative" }}>
                    <Tooltip title="Show/Hide Graph History" placement="top">
                        <Button
                            variant="outlined"
                            size="small"
                            className="button-position"
                            sx={{ marginBottom: "10px" }}
                            onClick={toggleSidebar}
                        >
                            {showSidebar ? (
                                <ArrowCircleLeftOutlinedIcon />
                            ) : (
                                <ArrowCircleRightOutlinedIcon />
                            )}
                        </Button>
                    </Tooltip>
                    <Typography variant="h1">{displayTitle}</Typography>
                    <Suspense fallback={<CircularProgress />}>
                        {children}
                    </Suspense>
                </Box>
            </Grid>
        </Grid>
    );
}
