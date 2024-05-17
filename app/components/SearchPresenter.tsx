import { SearchView } from "./SearchView";

export function Search({ query }: { query: string }) {
    return <SearchView searchTerm={query} />;
}
