type PromiseState<Type> = {
    promise: Promise<Type> | null;
    data: Type | null;
    error: any;
};

type AutofillResults = [string, string[], string[]];

type SearchItem = {
    ns: number; // what is this?
    title: string;
    pageid: number;
    size: number;
    wordcount: number;
    snippet: string;
    timestamp: Date;
};

type SearchResults = {
    query: {
        searchinfo: {
            totalhits: number;
        };
        search: SearchItem[];
    };
};

export type { PromiseState, AutofillResults, SearchResults, SearchItem };
