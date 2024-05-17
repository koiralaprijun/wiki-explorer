"use client";

import "@/app/CSS/Wikilink.css";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { HoverPopupBoxView } from "./HoverPopupBoxView";
import { PopupContentView } from "./PopupContentView";
import { ArticleDetails } from "../_ts/types";
import { getArticleDetailsByTitle } from "../_ts/wikiDetails";

export function Wikilink({
    children,
    link,
}: {
    children: React.ReactNode;
    link: string;
}) {
    const ref = useRef<Document>();
    const [hover, setHover] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [{ mouseX, mouseY }, setCoordinates] = useState({
        mouseX: 0,
        mouseY: 0,
    });
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

    const [details, setDetails] = useState<ArticleDetails>();
    const [fetchDetailStatus, setFetchdetailsStatus] = useState("");

    useEffect(() => {
        ref.current = document;
        setMounted(true);
    }, []);

    const excludedSymbols = ["cite_note", "File:"];
    if (
        !link.startsWith("./") ||
        excludedSymbols.some((sym) => link.includes(sym))
    ) {
        // Non-wikilink, retain default behaviour
        return <a href={link}>{children}</a>;
    } else {
        // Wikilink
        const indexOfHash = link.indexOf("#");
        const title =
            indexOfHash === -1
                ? link.substring(2)
                : link.substring(2, indexOfHash);
        if (hover && !fetchDetailStatus) {
            setFetchdetailsStatus("fetching");
            // TODO: should use a more direct API than search
            getArticleDetailsByTitle(title)
                .then((details) => {
                    setDetails(details);
                    setFetchdetailsStatus("complete");
                })
                .catch((err: unknown) => {
                    setFetchdetailsStatus("failed");
                });
        }
        return (
            <>
                <a
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    href={link}
                >
                    {children}
                </a>
                {mounted && ref.current
                    ? createPortal(
                          hover && fetchDetailStatus === "complete" && (
                              <HoverPopupBoxView x={mouseX} y={mouseY}>
                                  <PopupContentView
                                      details={details}
                                  ></PopupContentView>
                              </HoverPopupBoxView>
                          ),
                          ref.current.body
                      )
                    : null}
            </>
        );
    }

    function handleHover(evt: React.MouseEvent<HTMLAnchorElement>) {
        const tid = setTimeout(() => {
            setHover(true);
        }, 500);
        setTimeoutId(tid);
    }

    function handleMouseLeave(evt: React.MouseEvent<HTMLAnchorElement>) {
        clearTimeout(timeoutId);
        setHover(false);
    }

    function handleMouseMove(evt: React.MouseEvent<HTMLAnchorElement>) {
        setCoordinates({ mouseX: evt.clientX, mouseY: evt.clientY });
    }
}
