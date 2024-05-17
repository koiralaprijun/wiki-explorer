"use client";
import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { ResultsData } from "@/app/_ts/types";

import "@/app/CSS/ResultList.css";
import {
    Grid,
    ThemeProvider,
    CssBaseline,
    Box,
    Typography,
    Link,
    IconButton,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { searchResultsMUITheme } from "@/app/components/globalThemeMUI";
import Image from "next/image";

interface ResultListProps {
    searchTerm: string;
    results: ResultsData;
    loadMore: () => void; // Define the loadMore function prop
    hasMore: boolean; // Define the hasMore boolean prop
}

export function ResultList({
    searchTerm,
    results,
    loadMore,
    hasMore,
}: ResultListProps) {
    const { ref, inView, entry } = useInView();

    const { query, hits, items } = results;

    useEffect(() => {
        if (hasMore && inView) {
            loadMore();
        }
    }, [hasMore, inView, loadMore]);

    return (
        <div>
            {hits ? (
                <Typography>{hits.toLocaleString()} results</Typography>
            ) : null}
            <ul>
                {items.map((article, index) => (
                    <ThemeProvider theme={searchResultsMUITheme} key={index}>
                        <CssBaseline />
                        <Box
                            sx={{
                                marginBottom: "10px",
                                padding: "20px 15px 20px 0px",
                                "&:hover": {
                                    backgroundColor:
                                        searchResultsMUITheme.palette.secondary
                                            .main,
                                    cursor: "pointer",
                                },
                                borderBottom: `1px solid ${searchResultsMUITheme.palette.primary.main}`,
                            }}
                            className="search-result"
                        >
                            <Grid container alignItems="center">
                                <Grid
                                    item
                                    xs={2.5}
                                    style={{ marginRight: "10px" }}
                                >
                                    {article.image && (
                                        <Image
                                            alt=""
                                            src={article.image}
                                            style={{
                                                width: "80%",
                                                height: "100px",
                                                objectFit: "contain",
                                                margin: "10px",
                                            }}
                                        />
                                    )}
                                </Grid>
                                <Grid item xs={7.5}>
                                    <Link
                                        href={article.path}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{ fontWeight: "bold" }}
                                            color="primary"
                                            className="search-result-heading"
                                        >
                                            {article.title}
                                        </Typography>
                                        <Box className="search-result-data">
                                            {article.wordcount} words
                                        </Box>
                                        <Typography
                                            variant="body2"
                                            className="search-result-snippet"
                                            sx={{ fontWeight: "normal" }}
                                        >
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: article.snippet,
                                                }}
                                            />
                                            ...
                                        </Typography>
                                    </Link>
                                </Grid>
                                <Grid item xs={1} sx={{ textAlign: "right" }}>
                                    <IconButton
                                        aria-label="delete"
                                        color="primary"
                                    >
                                        <AddBoxIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Box>
                    </ThemeProvider>
                ))}
                {hasMore && (
                    <li ref={ref} style={{ textAlign: "center" }}>
                        Loading more results...
                    </li>
                )}
            </ul>
        </div>
    );
}
