import { MWA_URL, GET_RQ_OPTIONS } from "./apiConfig";
import { RandomResults, SearchResults } from "./types";

export function getSearchResults(
    term: string,
    page: number = 1,
    limit: number = 10
): Promise<SearchResults> {
    const offset = (page - 1) * limit;
    const params = {
        action: "query",
        // Results
        list: "search",
        srsearch: term,
        sroffset: offset.toString(),
        srlimit: limit.toString(),
        // Images
        generator: "search",
        gsrsearch: term,
        gsroffset: offset.toString(),
        gsrlimit: limit.toString(),
        prop: "pageimages",
        pithumbsize: "150",
        // General
        format: "json",
        origin: "*",
    };

    const url = MWA_URL + "?" + new URLSearchParams(params);

    return fetch(url, GET_RQ_OPTIONS).then(receiveResponseACB);
}

function receiveResponseACB(response: Response) {
    if (!response.ok) {
        throw new Error(
            "Error fetching results: " +
                response.status +
                " " +
                response.statusText
        );
    } else {
        return response.json();
    }
}

export function getRandomArticle(): Promise<string> {
    return getRandomResults().then((res: RandomResults) => {
        return res.query.random[0].title;
    });
}

function getRandomResults(): Promise<RandomResults> {
    const params = {
        action: "query",
        list: "random",
        format: "json",
        rnnamespace: "0",
        rnfilterredir: "nonredirects",
        rnlimit: "1",
        origin: "*",
    };

    const url = MWA_URL + "?" + new URLSearchParams(params);

    return fetch(url, GET_RQ_OPTIONS).then(receiveResponseACB);
}
