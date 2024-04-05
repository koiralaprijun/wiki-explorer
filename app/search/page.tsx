import { Suspense } from "react";
import SearchResultsFallback from "@/app/components/SearchResultsFallback";
import ResultList from "@/app/components/ResultList";

const SearchResults = ({
    searchParams,
}: {
    searchParams?: { query?: string };
}) => {
    const query = searchParams?.query || "";

    return (
        <div>
            <div className="p-4 text-5xl my-2 text-slate-800">
                Search Results
            </div>
            <div className="p-4 my-5 bg-sky-800 text-black text-xl ">
                <Suspense fallback={<SearchResultsFallback />}>
                    <ResultList query={query} />
                </Suspense>
            </div>
        </div>
    );
};

export default SearchResults;
