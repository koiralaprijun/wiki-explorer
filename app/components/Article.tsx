import React from "react";
import { getPageHTML } from "@/app/_ts/wikiSource";

const Article = async ({ title }: { title: string }) => {
    const html = await getPageHTML(title);

    // sanitize...
    // react-html-parser / html-react-parser ?
    // fix links

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Article;
