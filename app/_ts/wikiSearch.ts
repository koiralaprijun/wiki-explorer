import { MWA_URL } from "./apiConfig";
import { SearchResults } from "./types";

export function getSearchResults(term: string): Promise<SearchResults> {
    const params = {
        action: "query",
        list: "search",
        srsearch: term,
        format: "json",
    };

    const url = MWA_URL + "?" + new URLSearchParams(params);

    const options = {
        method: "GET",
        headers: {
            "User-Agent": "Preliminary testing (morrissc@kth.se)",
            Accept: "application/json",
        },
    };

    return fetch(url, options).then(receiveSearchResponseACB);
}

function receiveSearchResponseACB(response: Response) {
    if (!response.ok) {
        throw new Error(
            "Error fetching search results: " +
                response.status +
                " " +
                response.statusText
        );
    } else {
        return response.json();
    }
}
