"use client";
import { GraphHistoryView } from "@/app/components/GraphHistoryView";
import { ReadingListView } from "@/app/components/ReadingListView";
import { globalThemeMUI } from "@/app/components/globalThemeMUI";
import { Box, ToggleButton, Divider, ToggleButtonGroup } from "@mui/material";

export function SidebarView({
    page,
    setPage,
}: {
    page: string;
    setPage: (page: string) => void;
}) {
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string
    ) => {
        setPage(newAlignment);
    };
    return (
        <Box
            sx={{
                height: "90vh",
                padding: "20px",
                backgroundColor: globalThemeMUI.palette.primary.light,
            }}
        >
            <ToggleButtonGroup
                color="primary"
                value={page}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton value="graph-history">History Graph</ToggleButton>
                <ToggleButton value="reading-list">Reading List</ToggleButton>
            </ToggleButtonGroup>
            <Divider sx={{ margin: "10px 0" }} />
            {page === "graph-history" && <GraphHistoryView />}
            {page === "reading-list" && <ReadingListView />}
        </Box>
    );
}
