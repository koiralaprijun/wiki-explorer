import type { Metadata } from "next";
import { Search } from "@/app/components/SearchPresenter";

type SearchParameters = {
    query?: string;
};

export async function generateMetadata({
    searchParams,
}: {
    searchParams: SearchParameters;
}): Promise<Metadata> {
    const title = '"' + searchParams?.query + '"' || "Search";

    return {
        title: title,
    };
}

export default function SearchPage({
    searchParams,
}: {
    searchParams?: { query?: string };
}) {
    const query = searchParams?.query || "";

    return <Search query={query} />;
}
