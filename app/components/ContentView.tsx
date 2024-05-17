import { MainArticleStyledDiv } from "@/app/components/globalThemeMUI";

export function ContentView({ content }: { content: React.ReactNode }) {
    return <MainArticleStyledDiv>{content}</MainArticleStyledDiv>;
}
