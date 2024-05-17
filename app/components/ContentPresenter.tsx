import sanitizeHtml from "sanitize-html";
import parse, { Element, DOMNode, domToReact } from "html-react-parser";
import { getPageHTML } from "@/app/_ts/wikiSource";
import { ContentView } from "@/app/components/ContentView";
import Link from "next/link";
import { Tooltip } from "@mui/material";
import { Wikilink } from "@/app/components/WikilinkPresenter";

export async function Content({ title }: { title: string }) {
    const dirtyHtml = await getPageHTML(title);
    const cleanHtml = sanitizeHtml(dirtyHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "a"]),
        allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            "*": ["id"],
        },
        nonTextTags: [
            "style",
            "script",
            "textarea",
            "option",
            "noscript",
            "math",
        ],
    });

    const dom = parse(cleanHtml, {
        replace(domNode) {
            if (domNode instanceof Element && domNode.name == "a") {
                return (
                    <Wikilink link={domNode.attribs.href}>
                        {domToReact(domNode.children as DOMNode[], {})}
                    </Wikilink>
                );
            }
            return;
        },
    });

    return <ContentView content={dom} />;
}
