import { MWA_URL, GET_RQ_OPTIONS } from "./apiConfig";
import {
    ArticleDetails,
    DetailsResults,
    QualityResults,
    AssessmentResults,
} from "./types";
import { determineQuality } from "./wikiQuality";

const defaultParams = {
    action: "query",
    prop: "extracts|pageimages|pageassessments",
    // Images
    pithumbsize: "150",
    // Extracts
    exchars: "200",
    exlimit: "1",
    explaintext: "",
    exintro: "",
    exsectionformat: "plain",
    // General
    format: "json",
    formatversion: "2",
    origin: "*",
};

export function getArticleDetailsById(pageid: number) {
    return getArticleDetailsByIds([pageid]).then((pages) => {
        return pages[0];
    });
}

export function getArticleDetailsByTitle(title: string) {
    return getArticleDetailsByTitles([title]).then((pages) => {
        return pages[0];
    });
}

export function getArticleDetailsByIds(pageids: number[]) {
    return getArticlesDetails({ pageids });
}

export function getArticleDetailsByTitles(titles: string[]) {
    return getArticlesDetails({ titles });
}

async function getArticlesDetails(options: {
    titles?: string[];
    pageids?: number[];
}): Promise<ArticleDetails[]> {
    const results = await fetchDetails(options);
    const pages = results.query.pages;
    const articles = Object.values(pages).map((item) => {
        const quality = determineQuality(item?.pageassessments);
        return {
            pageid: item.pageid,
            title: item.title,
            snippet: item.extract,
            image: item.thumbnail?.source,
            quality: quality,
        };
    });
    return articles;
}

function fetchDetails({
    titles,
    pageids,
}: {
    titles?: string[];
    pageids?: number[];
}): Promise<DetailsResults> {
    const searchParams = new URLSearchParams(defaultParams);

    if (titles) {
        searchParams.set("titles", titles.join("|"));
    } else if (pageids) {
        searchParams.set(
            "pageids",
            pageids
                .map((x) => {
                    return x.toString();
                })
                .join("|")
        );
    }

    const url = MWA_URL + "?" + searchParams;

    return fetch(url, GET_RQ_OPTIONS).then(receiveResponseACB);
}

export function getArticlesQuality(
    articles: string[]
): Promise<QualityResults> {
    return fetchAssessments(articles).then((results) => {
        return results.query.pages.map((item) => {
            const page = item.title;
            const quality = determineQuality(item.pageassessments);
            return { page, quality };
        });
    });
}

function fetchAssessments(articles: string[]): Promise<AssessmentResults> {
    const params = {
        action: "query",
        // Results
        prop: "pageassessments",
        titles: articles.join("|"),
        // General
        format: "json",
        formatversion: "2",
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
