import React from "react";
import { getSearchResults } from "@/app/_ts/wikiSearch";
import { SearchItem } from "@/app/_ts/types";

const ProductCard = async ({ query }: { query: string }) => {
    const results = await getSearchResults(query);

    return (
        <div>
            <ul>{results.query.search.map(mapArticlesCB)}</ul>
        </div>
    );

    function mapArticlesCB(article: SearchItem) {
        return (
            <li
                key={article.pageid}
                className="odd:bg-white even:bg-gray-400 hover:bg-orange-700 hover:text-white hover:underline"
            >
                {article.title}
            </li>
        );
    }
};

export default ProductCard;
