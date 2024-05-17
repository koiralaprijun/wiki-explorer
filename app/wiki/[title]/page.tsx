import type { Metadata } from "next";
import { Article } from "@/app/components/ArticlePresenter";
import { Content } from "@/app/components/ContentPresenter";
import { toDisplayTitle } from "@/app/_ts/utilities";

export async function generateMetadata({
    params,
}: {
    params: { title: string };
}): Promise<Metadata> {
    const displayTitle = toDisplayTitle(params.title);

    return {
        title: displayTitle,
    };
}

export default async function WikiPage({
    params,
}: {
    params: { title: string };
}) {
    return (
        <Article title={params.title}>
            <Content title={params.title} />
        </Article>
    );
}
