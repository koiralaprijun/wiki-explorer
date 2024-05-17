"use client";

import { useState } from "react";
import { ArticleView } from "@/app/components/ArticleView";
import { toDisplayTitle } from "@/app/_ts/utilities";

export function Article({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) {
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const displayTitle = toDisplayTitle(title);
    return (
        <ArticleView
            displayTitle={displayTitle}
            articleTitle={title}
            showSidebar={isSidebarVisible}
            toggleSidebar={toggleSidebar}
        >
            {children}
        </ArticleView>
    );

    function toggleSidebar() {
        setSidebarVisible(!isSidebarVisible);
    }
}
