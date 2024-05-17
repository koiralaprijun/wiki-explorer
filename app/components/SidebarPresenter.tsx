"use client";
import { useState } from "react";
import { SidebarView } from "./SidebarView";

export function Sidebar() {
    const [page, setPage] = useState("graph-history");

    return <SidebarView page={page} setPage={setPage} />;
}
