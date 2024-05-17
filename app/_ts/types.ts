type PromiseState<Type> = {
    promise: Promise<Type> | null;
    data: Type | null;
    error: any;
};

type AutofillResults = [string, string[], string[]];

type ResultItem = {
    title: string;
    size: number;
    wordcount: number;
    snippet: string;
    lastEdited: Date;
    path: string;
    image?: string;
};

type ResultsData = {
    query: string;
    pages: number;
    hits: number;
    items: ResultItem[];
};

type SearchItem = {
    ns: number; // namespace (0 for articles)
    title: string;
    pageid: number;
    size: number;
    wordcount: number;
    snippet: string;
    timestamp: Date;
};

type ThumbnailSearchItem = {
    pageid: number;
    ns: number;
    title: string;
    index: number;
    thumbnail?: {
        source: string;
        width: number;
        height: number;
    };
    pageimage?: string;
};

type SearchResults = {
    query: {
        pages: {
            [key: string]: ThumbnailSearchItem;
        };
        searchinfo: {
            totalhits: number;
        };
        search: SearchItem[];
    };
    continue?: { continue: string };
};

type DetailsItem = {
    pageid: number;
    ns: number;
    title: string;
    extract: string;
    thumbnail?: {
        source: string;
        width: number;
        height: number;
    };
    pageimage?: string;
    pageassessments?: PageAssessments;
};

type PageAssessments = {
    [key: string]: {
        class: string;
        importance: string;
    };
};

type DetailsResults = {
    query: {
        pages: {
            [key: string]: DetailsItem;
        };
    };
};

type ArticleDetails = {
    pageid: number;
    title: string;
    snippet: string;
    quality: Quality;
    image?: string;
};

type RandomItem = {
    id: number;
    ns: number;
    title: string;
};

type RandomResults = {
    query: {
        random: RandomItem[];
    };
};

type AssessmentItem = {
    pageid: number;
    ns: number;
    title: string;
    pageassessments: PageAssessments;
};

type AssessmentResults = {
    query: {
        pages: AssessmentItem[];
    };
};

type QualityResults = {
    page: string;
    quality: Quality;
}[];

export enum Quality {
    Excellent = 1,
    Good,
    Fine,
    Short,
    Unknown,
}

export type {
    PromiseState,
    AutofillResults,
    SearchResults,
    SearchItem,
    RandomItem,
    RandomResults,
    ResultItem,
    ResultsData,
    AssessmentItem,
    AssessmentResults,
    PageAssessments,
    QualityResults,
    ThumbnailSearchItem,
    DetailsResults,
    DetailsItem,
    ArticleDetails,
};
