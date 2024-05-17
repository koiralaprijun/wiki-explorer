"use client";
import React from "react";

import { IconButton, Tooltip } from "@mui/material";
import CasinoIcon from "@mui/icons-material/Casino";

import { useRouter } from "next/navigation";
import { getRandomArticle } from "@/app/_ts/wikiSearch";

export function SearchBoxView({ placeholder }: { placeholder: string }) {
    const router = useRouter();

    //const searchParams = useSearchParams();
    const searchPath = "/search";
    const wikiPath = "/wiki";

    const params = new URLSearchParams();

    function inputChangeACB(query: string) {
        // this event is fired on every change of text
        // todo: perhaps offer autocomplete suggestions while typing? there is a specific API for this somewhere
        //console.log(query);
        if (query) {
            params.set("query", query);
        } else {
            params.delete("query");
        }
    }

    function inputKeyDownACB(evt: React.KeyboardEvent<HTMLInputElement>) {
        const query = (evt.target as HTMLInputElement).value;
        if (evt.key == "Enter") {
            inputChangeACB(query);
            searchButtonClickedACB();
        }
    }

    function searchButtonClickedACB() {
        if (params.has("query")) {
            router.push(`${searchPath}?${params.toString()}`);
        }
    }

    function randomButtonClickedACB() {
        getRandomArticle().then((title) => {
            const titlePath = encodeURIComponent(title);
            router.push(`${wikiPath}/${titlePath}`);
        });
    }

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder={placeholder}
                onChange={(evt) => {
                    inputChangeACB(evt.target.value);
                }}
                onKeyDown={inputKeyDownACB}
                //defaultValue={searchParams.get("query")?.toString()}
            />
            <button
                type="submit"
                className="search-button"
                onClick={searchButtonClickedACB}
            >
                Search
            </button>
            <Tooltip title="Generate Random Article">
                <IconButton
                    type="submit"
                    color="primary"
                    className="dice-button"
                    onClick={randomButtonClickedACB}
                >
                    <CasinoIcon />
                </IconButton>
            </Tooltip>
        </div>
    );
}
