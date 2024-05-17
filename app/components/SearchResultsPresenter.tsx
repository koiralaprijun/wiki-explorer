// SearchResultsPresenter.tsx
"use client"; // This must be the very first line in your file

import React, { useState, useEffect } from "react";
import sanitizeHtml from "sanitize-html";
import { getSearchResults } from "../_ts/wikiSearch";
import {
    SearchItem,
    ResultItem,
    ThumbnailSearchItem,
    ResultsData,
} from "@/app/_ts/types";
import { ResultList } from "./SearchResultListView";

export function Results({ query }: { query: string }) {
    const [results, setResults] = useState<ResultsData>({
        query: "",
        pages: 0,
        hits: 0,
        items: [],
    });
    const [moreAvailable, setMoreAvailable] = useState(false);
    const [requestPending, setRequestPending] = useState(false);

    async function fetchResults() {
        const newQuery = query !== results.query;
        const pageToFetch = newQuery ? 1 : results.pages + 1;

        try {
            const searchResults = await getSearchResults(query, pageToFetch);
            const newItems = mapWithThumbnails(
                searchResults.query.search,
                searchResults.query.pages
            );

            if (searchResults?.continue?.continue.includes("||")) {
                setMoreAvailable(true);
            } else {
                setMoreAvailable(false);
            }

            setResults((prevResults) => {
                if (newQuery) {
                    return {
                        query: query,
                        pages: pageToFetch,
                        hits: searchResults.query.searchinfo.totalhits,
                        items: newItems,
                    };
                } else if (prevResults.pages + 1 === pageToFetch) {
                    return {
                        query: prevResults.query,
                        pages: pageToFetch,
                        hits: prevResults.hits,
                        items: prevResults.items.concat(newItems),
                    };
                } else {
                    return prevResults;
                }
            });
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    }

    // Query update
    useEffect(() => {
        fetchResults();
    }, [query]);

    function userRequestsResults() {
        if (!requestPending) {
            setRequestPending(true);
            fetchResults().then(() => {
                setRequestPending(false);
            });
        }
    }

    function mapWithThumbnails(
        searchItems: SearchItem[],
        thumbnails: { [key: string]: ThumbnailSearchItem }
    ): ResultItem[] {
        return searchItems.map((article) => {
            const articlePath = encodeURI("/wiki/" + article.title);
            const dirtySnippet = article.snippet;
            const cleanSnippet = sanitizeHtml(dirtySnippet, {
                allowedTags: ["span"],
                allowedAttributes: { span: ["class"] },
            });

            const image =
                thumbnails[article.pageid.toString()]?.thumbnail?.source;

            return {
                title: article.title,
                size: article.size,
                wordcount: article.wordcount,
                snippet: cleanSnippet,
                lastEdited: article.timestamp,
                path: articlePath,
                image: image,
            };
        });
    }
    return (
        <ResultList
            searchTerm={query}
            results={results}
            loadMore={userRequestsResults}
            hasMore={moreAvailable}
        />
    );
}
