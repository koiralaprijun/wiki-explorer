import { Suspense } from "react";
import { ResultListFallback } from "@/app/components/SearchResultListFallback";

import "@/app/CSS/ResultList.css";
import { CssBaseline, Box, Container, Typography } from "@mui/material";
import { Results } from "@/app/components/SearchResultsPresenter";

export function SearchView({ searchTerm }: { searchTerm: string }) {
    if (!searchTerm) {
        return (
            <div>
                <Typography>Use the search box to find an article.</Typography>
            </div>
        );
    }
    return (
        <>
            <CssBaseline />
            <Container maxWidth="md" sx={{ marginTop: 20 }}>
                <Typography
                    sx={{
                        marginTop: 12,
                        marginBottom: 3,
                        paddingBottom: 1,
                        borderBottom: 1,
                    }}
                    variant="h3"
                >
                    <span className="span-text-search-results">
                        Results for:
                    </span>
                    <br />
                    <span>{searchTerm}</span>
                </Typography>
                <Box>
                    <Suspense fallback={<ResultListFallback />}>
                        <Results query={searchTerm} />
                    </Suspense>
                </Box>
            </Container>
        </>
    );
}
